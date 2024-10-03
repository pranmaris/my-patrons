requirejs.config({

  baseUrl: "/files/resources",

  paths: {
    const: "js/utils/const",
    displayStyle: "js/utils/display-style",
    dom: "js/utils/dom",
    env: "js/utils/env",
    language: "js/utils/language",
    location: "js/utils/location",
    marked: "external/marked-js-14-1-2/marked.min",
    scroll: "js/utils/scroll"
  },

  shim: {
    dom: {
      deps: ["env"]
    },
    language: {
      deps: ["env", "location"]
    },
    location: {
      deps: ["env"]
    },
    scroll: {
      deps: ["env"]
    }
  }

});
