import React from "react";
import { View, Text, Dimensions, PixelRatio, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { DataProvider, LayoutProvider } from "recyclerlistview";
import List from "../components/List";
import { Button } from "../components/common";
import {
  widthPercentageToDP,
  heightPercentageToDP,
  sizePercentageToDP
} from "../utils";
import * as conf from "../config/app";

const mapStateToListProps = state => ({
  loading: state.likes.loading,
  error: state.likes.error,
  images: state.likes.data
});

const ListThumbnails = connect(mapStateToListProps)(List);

const LikesScreen = ({ isLogged, loginScreen }) => {
  const { width } = Dimensions.get("window");
  const devicePixelRatio = PixelRatio.get();
  const thumbnailWidth = width / conf.LIKES_PAGE_COLUMNS_COUNT;
  const thumbnailWidthPx = thumbnailWidth * devicePixelRatio;

  const layoutProvider = new LayoutProvider(
    () => " ",
    (type, dim) => {
      dim.width = thumbnailWidth;
      dim.height = thumbnailWidth;
    }
  );
  const dataProvider = new DataProvider((r1, r2) => r1 !== r2);

  if (!isLogged) {
    return (
      <View style={styles.unauthorizedViewStyle}>
        <Text style={styles.loginTextStyle}>
          Enter to your account and manage your likes
        </Text>
        <Button onPress={() => loginScreen()}>Login</Button>
      </View>
    );
  }

  if (isLogged)
    return (
      <View style={styles.authorizedViewStyle}>
        <ListThumbnails
          layoutProvider={layoutProvider}
          dataProvider={dataProvider}
          thumbnailWidthPx={thumbnailWidthPx}
          currentRoute="Likes"
        />
      </View>
    );
};

const styles = StyleSheet.create({
  unauthorizedViewStyle: {
    flex: 1,
    backgroundColor: "#032337",
    alignItems: "center",
    paddingTop: heightPercentageToDP("30%")
  },
  authorizedViewStyle: {
    flex: 1,
    backgroundColor: "black"
  },
  loginTextStyle: {
    color: "white",
    textAlign: "center",
    width: widthPercentageToDP("65%"),
    fontSize: sizePercentageToDP("4.2%"),
    paddingBottom: heightPercentageToDP("3%")
  }
});

const mapStateToLikesProps = state => ({
  isLogged: state.auth.user
});

const mapDispatchToLikesProps = dispatch => ({
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: "Login" }))
});

const LikesScreenConnected = connect(
  mapStateToLikesProps,
  mapDispatchToLikesProps
)(LikesScreen);

export { LikesScreenConnected as LikesScreen };
