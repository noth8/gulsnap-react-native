import React from "react";
import { View, TouchableWithoutFeedback, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { RecyclerListView } from "recyclerlistview";
import Thumbnail from "./Thumbnail";
import { Spinner } from "./common";
import { setSelectedImageAction } from "../actions";
import * as lang from "../config/languages";

const List = ({
  layoutProvider,
  dataProvider,
  onEndReached = () => {},
  renderFooter = () => {},
  renderAheadOffset = null,
  thumbnailWidthPx,
  images,
  loading,
  error,
  setSelectedImage,
  fullSizeImageScreen
}) => {
  const { errorViewStyle, errorTextStyle } = styles;

  const rowRenderer = (type, data) => (
    <TouchableWithoutFeedback
      style={styles.touchableContainer}
      onPress={() => {
        setSelectedImage(data.urls.regular);
        fullSizeImageScreen({ routeName: "FullImage" });
      }}
    >
      <View style={{ flex: 1 }}>
        <Thumbnail
          thumbnailUrl={data.urls.regular}
          thumbnailWidthPx={thumbnailWidthPx}
        />
      </View>
    </TouchableWithoutFeedback>
  );

  if (loading && (images.length === 0 || Object.keys(images).length === 0))
    return <Spinner size={90} backgroundColor="black" color="#2d87f5" />;

  if (images.length === 0 || Object.keys(images).length === 0)
    return (
      <View style={errorViewStyle}>
        <Text style={errorTextStyle}>{lang.NO_IMAGES_TO_SHOW}</Text>
      </View>
    );

  if (error)
    return (
      <View style={errorViewStyle}>
        <Text style={errorTextStyle}>{error}</Text>
      </View>
    );

  return (
    <RecyclerListView
      layoutProvider={layoutProvider}
      dataProvider={dataProvider.cloneWithRows(Object.values(images))}
      rowRenderer={(type, data) => rowRenderer(type, data)}
      onEndReached={() => onEndReached(loading)}
      renderAheadOffset={renderAheadOffset}
      renderFooter={() => renderFooter(loading)}
    />
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    flex: 1
  },
  errorViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  errorTextStyle: {
    fontSize: 18,
    color: "red"
  }
});

const mapDispatchToProps = dispatch => ({
  setSelectedImage: url => dispatch(setSelectedImageAction(url)),
  fullSizeImageScreen: routeName =>
    dispatch(NavigationActions.navigate(routeName))
});

export default connect(
  null,
  mapDispatchToProps
)(List);
