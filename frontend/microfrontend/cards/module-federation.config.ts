export const mfConfig = {
  name: "cards",
  exposes: {
    './AddCard': './src/components/AddPlacePopup.js',
    './HandleCard': './src/components/Card.js',
    './PopUpCard': './src/components/ImagePopup.js',
  },
  shared: ["react", "react-dom"],
};
