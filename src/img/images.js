// src/img/images.js
const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => {
    const name = key.replace('./', '');
    images[name] = r(key);
  });
  return images;
};

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default images;
