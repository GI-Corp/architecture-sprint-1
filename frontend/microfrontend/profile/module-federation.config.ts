export const mfConfig = {
  name: "profile",
  exposes: {
    './GetCards': './src/components/Login.js',
    './Register': './src/components/Register.js',
  },
  shared: ["react", "react-dom"],
};
