function details(text) {
  if (text.indexOf("[head:") > -1); {
    var adjusted = "[img]http://cravatar.eu/helmavatar/"
    + text.replace(/\[head:([a-zA-Z0-9]+)]/, "$1")
    + "/16.png[/img]";
  }
 return adjusted;
}

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = details(text[i]);
    }
  }
  return text;
});
