define([], function() {

  const VISIBLE_STYLE = '';
  const INVISIBLE_STYLE = 'display: none';

  function getInvisible() {
    return INVISIBLE_STYLE;
  }

  function getVisible() {
    return VISIBLE_STYLE;
  }

  return {
    getVisible,
    getInvisible
  };

});
