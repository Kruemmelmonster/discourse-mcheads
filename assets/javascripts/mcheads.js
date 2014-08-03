function mcheads(text) {
  //Expression to find.
  var re = /\[head:([a-zA-Z0-9]+)]/;
  // Adjust text.
  var adjusted = text.replace(re, "<img src=\"http://cravatar.eu/helmavatar/" + "$1" + "/16.png\">");
  return adjusted;
}

(function () {
  Discourse.Dialect.postProcessText(function (text) {
    text = [].concat(text);
    for (var i = 0; i < text.length; i++) {
      if (text[i].length > 0 && text[i][0] !== "<") {
        text[i] = mcheads(text[i]);
      }
    }
    return text;
  });
}).call(this);
