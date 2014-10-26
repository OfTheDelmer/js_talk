components = require('./prism-components-snippet.js');
require('./utopia-snippet.js');

(function() {
  var target = $(components.themeTarget);
  var p = $u.element.create("div", {
    properties: {
      id: 'theme'
    },
    contents: {
      tag: 'p',
      contents: 'Theme:'
    },
    inside: target
  });

  var themes = components.themes;
  var current = (location.search.match(/theme=([\w-]+)/) || [])[1];

  if (!(current in themes)) {
    current = undefined;
  }

  if (current === undefined) {
    var stored = localStorage.getItem('theme');

    current = stored in themes? current = stored : 'prism';
  }
  var folder = components.themes.meta.path.split(/\{id}\.css/)[0]
  function setTheme(id) {
    var path = folder + "prism" 
    var link = $$('link[href^="' + path + '"]')[0];

    link.href = themes.meta.path.replace(/\{id}/g, id);
    localStorage.setItem('theme', id);
  }

  for (var id in themes) {

    if (id === 'meta') {
      continue;
    }

    $u.element.create('input', {
      properties: {
        type: 'radio',
        name: "theme",
        id: 'theme=' + id,
        checked: current === id,
        value: id,
        onclick: function () {
          setTheme(this.value);
        }
      },
      inside: p
    });

    $u.element.create('label', {
      properties: {
        htmlFor: 'theme=' + id
      },
      contents: themes[id].title || themes[id],
      inside: p
    });
  }

  setTheme(current);
})();


