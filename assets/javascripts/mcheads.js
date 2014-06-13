function mcheads(text) {
  //Expression to use
  var re = /\[head:([a-zA-Z0-9]+)]/;
  
  // Adjusted text
  var adjusted = 
  "[img]http://cravatar.eu/helmavatar/"
  + srctext.replace(re, "$1")
  + "/16.png[/img]";

 return adjusted;
}

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = mcheads(text[i]);
    }
  }
  return text;
});
