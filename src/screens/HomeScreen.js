import React, { Component } from "react";
import { View, Dimensions, PixelRatio, StyleSheet } from "react-native";
import { DataProvider, LayoutProvider } from "recyclerlistview";
import { connect } from "react-redux";
import { fetchImagesAction } from "../actions";
import List from "../components/List";
import { Spinner } from "../components/common";
import * as conf from "../config/app";

const mapStateToListProps = state => ({
  loading: state.api.loading,
  error: state.api.error,
  images: state.api.data
});

const ListThumbnails = connect(mapStateToListProps)(List);

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.apiUrl = `https://api.unsplash.com/photos/random?count=${conf.HOME_PAGE_IMAGES_AMOUNT_TO_LOAD}&client_id=${conf.UNSPLASH_API_ACCESS_KEY}`;
    const { width, height } = Dimensions.get("window");
    const devicePixelRatio = PixelRatio.get();
    this.deviceWidth = width;
    this.deviceHeight = height;
    this.thumbnailWidth = this.deviceWidth / conf.HOME_PAGE_COLUMNS_COUNT;
    this.thumbnailWidthPx = this.thumbnailWidth * devicePixelRatio;

    this.layoutProvider = new LayoutProvider(
      () => " ",
      (type, dim) => {
        dim.width = this.thumbnailWidth;
        dim.height = this.thumbnailWidth;
      }
    );
    this.dataProvider = new DataProvider((r1, r2) => r1 !== r2);
  }

  componentDidMount() {
    this.props.fetchImagesAction(this.apiUrl);
  }

  onEndReached = loading => {
    if (!loading) this.props.fetchImagesAction(this.apiUrl);
  };

  renderFooter = loading => {
    if (loading) return <Spinner backgroundColor="black" color="#2d87f5" />;

    return null;
  };

  render() {
    return (
      <View style={styles.rootViewStyle}>
        <ListThumbnails
          layoutProvider={this.layoutProvider}
          dataProvider={this.dataProvider}
          onEndReached={this.onEndReached}
          renderFooter={this.renderFooter}
          renderAheadOffset={this.deviceHeight * 2}
          thumbnailWidthPx={this.thumbnailWidthPx}
          currentRoute="Home"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootViewStyle: {
    flex: 1,
    backgroundColor: "black"
  }
});

const HomeScreenConnected = connect(
  null,
  { fetchImagesAction }
)(HomeScreen);

export { HomeScreenConnected as HomeScreen };
