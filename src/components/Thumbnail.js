import React from "react";
import { Image } from "react-native";
import { replaceUrlParam } from "../utils";
import * as conf from "../config/app";

export default ({ thumbnailUrl, thumbnailWidthPx }) => {
  const maxQualityUrl = replaceUrlParam(
    "q",
    conf.THUMBNAIL_IMG_QUALITY,
    thumbnailUrl
  );
  const maxWidthUrl = replaceUrlParam("w", thumbnailWidthPx, maxQualityUrl);

  return (
    <Image
      source={{
        uri: maxWidthUrl
      }}
      style={{ flex: 1 }}
    />
  );
};
