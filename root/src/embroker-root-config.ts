import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@embroker/app",
//   app: () => System.import<LifeCycles>("http://localhost:8081/embroker-app.js"),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@embroker/app",
  app: () => System.import<LifeCycles>("@embroker/app"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@embroker/admin",
  app: () => System.import<LifeCycles>("@embroker/admin"),
  activeWhen: ["/admin"],
});

start({
  urlRerouteOnly: true,
});
