(function(window, undefined) {

var myTextarea = document.querySelector('textarea');
var frame = document.querySelector('#preview');

var editor = CodeMirror.fromTextArea(myTextarea, {
  mode: "text/html",
  lineNumbers: true,
  theme: 'eclipse'
});

var defaultValue = [
	"<!doctype html>",
	"<html>",
	"<head>",
	"\<title>Demo</title>",
	"<style>\n",
	"</style>",
	"</head>",
	"<body>",
	"\n\n",
	"</body>",
	"</html>"
].join("\n");

editor.setValue(defaultValue);

var createHTMLDocument = function(html) {
	var doc = document.implementation.createHTMLDocument("New Document");
	doc.body.innerHTML = html;

	return doc;
};

var insertHTMLDocumentIntoFrame = function(frame, doc) {
	var destDocument = frame.contentDocument;
  var srcNode = doc.documentElement;
  var newNode = destDocument.importNode(srcNode, true);
  
  destDocument.replaceChild(newNode, destDocument.documentElement);

  return destDocument;
};

editor.on('change', function() {
	var html = editor.getValue();
	var doc = createHTMLDocument(html);
	insertHTMLDocumentIntoFrame(frame, doc);
});

})(window);