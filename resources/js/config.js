requirejs.config({

  baseUrl: "/files/resources",

  paths: {
    dom: "js/utils/dom",
    environment: "js/utils/environment",
    language: "js/utils/language",
    location: "js/utils/location",
    marked: "external/marked-js-14-1-2/marked.min",
    scroll: "js/utils/scroll"
  },

  shim: {
    dom: {
      deps: ["environment"]
    },
    language: {
      deps: ["environment", "location"]
    },
    location: {
      deps: ["environment"]
    },
    scroll: {
      deps: ["environment"]
    }
  }

});
