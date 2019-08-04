import { toHash } from './toHash';

export const checkLike = (likes, imgUrl) => {
  const hashedUrl = toHash(imgUrl);

  const isHashedUrlExist = Object.prototype.hasOwnProperty.call(
    likes,
    hashedUrl
  );

  const isUrlValueExist = isHashedUrlExist
    ? likes[hashedUrl].urls.regular === imgUrl
    : false;

  return isUrlValueExist;
};
