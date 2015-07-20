(function() {
  Discourse.Dialect.inlineRegexp({
    start: '[head:',
    matcher: /^\[head:([a-zA-Z0-9_]{2,16})\]/,
    emitter: function(contents) {
      var username = contents[1];
      console.log(username);
      return ['img', {"src": "http://cravatar.eu/avatar/" + username + "/16.png"}];
    }
  });
})();
