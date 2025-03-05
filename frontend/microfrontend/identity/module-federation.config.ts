export const mfConfig = {
  name: "identity",
  exposes: {
    './UserLogin': './src/components/Login.js',
    './Register': './src/components/Register.js',
    './InfoTooltip': './src/components/InfoTooltip.js',
    './ProtectedRoute': './src/components/ProtectedRoute.js'
  },
  shared: ["react", "react-dom"],
};
