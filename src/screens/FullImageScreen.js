import React from "react";
import {
  View,
  Image as Img,
  Platform,
  Dimensions,
  PixelRatio,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import { createImageProgress } from "react-native-image-progress";
import { replaceUrlParam } from "../utils";
import LikeButton from "../components/LikeButton";
import { Spinner } from "../components/common";
import * as conf from "../config/app";

SafeAreaView.setStatusBarHeight(0);

const { width } = Dimensions.get("window");
const devicePixelRatio = PixelRatio.get();
const fullImageWidthPixels = width * devicePixelRatio;

const Image = createImageProgress(Img);

const FullImageScreen = ({ url, loading }) => {
  if (!url || loading)
    return <Spinner backgroundColor="black" color="#2d87f5" />;

  const maxQualityUrl = replaceUrlParam("q", conf.FULL_IMG_QUALITY, url);
  const maxDeviceWidthUrl = replaceUrlParam(
    "w",
    fullImageWidthPixels,
    maxQualityUrl
  );
  return (
    <Image
      source={{
        uri: maxDeviceWidthUrl
      }}
      style={styles.image}
      indicator={Spinner}
    />
  );
};

FullImageScreen.navigationOptions = () => ({
  headerTransparent: true,
  headerStyle: { backgroundColor: "rgba(0, 0, 0, 0.4)", height: 47 },
  headerLeftContainerStyle: {
    backgroundColor: "black",
    height: 47
  },
  headerTintColor: "white",
  headerTitleStyle: {
    marginLeft: 0,
    color: "white",
    fontSize: 18
  },
  headerRight: (
    <View>
      <LikeButton />
    </View>
  )
});

const styles = StyleSheet.create({
  image: { flex: 1, backgroundColor: "#000" }
});

const mapStateToProps = state => ({
  url: state.img.url,
  loading: state.img.loading
});

const FullImageScreenConnected = connect(mapStateToProps)(FullImageScreen);
export { FullImageScreenConnected as FullImageScreen };
