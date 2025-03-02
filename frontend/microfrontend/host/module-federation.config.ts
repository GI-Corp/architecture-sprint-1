export const mfConfig = {
  name: "host",
  exposes: {},
  remotes: {
    'identity': 'identity@http://localhost:8081/remoteEnty.js',
    'profile': 'profile@http://localhost:8082/remoteEnty.js',
    'cards': 'cards@http://localhost:8083/remoteEnty.js'
  },
  shared: ["react", "react-dom"],
};
