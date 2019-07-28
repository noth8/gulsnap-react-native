import { SELECTED_IMAGE_CHANGED } from "./Types";

export const setSelectedImageAction = url => ({
  type: SELECTED_IMAGE_CHANGED,
  payload: url
});
