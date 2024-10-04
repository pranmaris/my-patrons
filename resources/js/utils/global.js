define([], function() {

  const values = {};

  function get(name) {
    return values[name] ?? undefined;
  }

  function set(name, value) {
    values[name] = value;

    return this;
  }

  return {
    get,
    set
  };

});
