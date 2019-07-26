import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { RecyclerListView } from "recyclerlistview";
import Thumbnail from "./Thumbnail";
import { Spinner } from "./common";
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
  error
}) => {
  const { errorViewStyle, errorTextStyle } = styles;

  const rowRenderer = (type, data) => (
    <View style={{ flex: 1 }}>
      <Thumbnail
        thumbnailUrl={data.urls.regular}
        thumbnailWidthPx={thumbnailWidthPx}
      />
    </View>
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

export default List;
