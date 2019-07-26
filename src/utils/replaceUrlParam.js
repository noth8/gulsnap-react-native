export const replaceUrlParam = (param, newValue, url) => {
  const regex = new RegExp(`([&?]${param})([^&]*)`);

  return url.replace(regex, `$1=${newValue}`);
};
