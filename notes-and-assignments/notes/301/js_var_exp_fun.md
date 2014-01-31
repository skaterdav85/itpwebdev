JS variables, expressions, functions
==========================================
Introduction to Javascript Variables, Expressions and Operators, and Functions and Methods 

******************************************************************
Please download the following zip file and extract it to a folder: 
[starter files](http://itpwebdev.herokuapp.com/starters/301/js_var_exp_fun.zip)
******************************************************************

### What is Javascript:

*	DannyG's example of scripting vs. programming of model airplanes
*	Javascript is scripting language with:
	*	Programming fundamentals like variables, loops, logic, etc.
	*	Can write and then call routines (functions)
	*	Object-oriented in which objects have pre-defined methods or actions
	*	It IS CASE-SENSITIVE


### JS data types:
*	Strings
*	Numbers
*	Booleans
*	Nulls
*	Objects
*	Functions

#### Basics of object Properties:

*	You can "read" the value of a property of an object be referencing the property, such as document.fgColor
*	To edit/set the property of an object you reference the property then set it equal to a value, such as document.bgColor='red'
*	Accessing the properties of a document or window is as simple as referencing document or window and then the property name, that object, such as document.bgColor
*	To access the property of an object on the page, you first need to "find" that object using its unique ID with document.getElementById()
*	Then with that reference to the object, if you want to edit an html attribute of that object, such as the href of an anchor tag, you reference that attribute name such as document.getElementById('thelink').href
*	To reference a style property of an object you first reference its style property, and then inside that object the name of the style property such as document.getElementById('mypic').style.width

#### Some simple object properties and methods and objects:

*	document.write - used in execution of a page (must be used when page is compiling and not later) to write information to the document (HTML page). *	Can write tags as well as data/text
*	window.status - this property refers to the status area of the browser window
*	alert()- although technically a method of window, you do not have to scope out window.alert. Syntax is alert("This message will appear.")
*	prompt() - another window method, this brings up a prompt. The "value" of the method is whatever is entered by the user. So if you entered the statement var result = prompt("What is your answer?") then the result variable would equal whatever data the user answered the prompt with.
*	navigator.appName - the name of the Web browser
*	navigator.appVersion - the version of the Web browser
*	document.fgColor
*	document.bgColor
*	document.getElementById('theimg').src - the src attribute of an image that is IDed as theimg
*	document.getElementById('theimg').style.width - the width style property of an image IDed as theimg


#### Javascript locations:
*	In SCRIPT tags in the HEAD of the document
*	In SCRIPT tags in the BODY (inline) of the document or In the body in HTML tags (tied to event handlers)
*	In and external SCRIPT file, linked through a SCRIPT tag in the HEAD
*	Examples:
	*	script in HEAD that displays message in window.status :
		```js
		<head>
			<script language="javascript">
				window.status = 'Hello there visitor.'
			</script>
		</head>
		```
	*	script in BODY that generates an alert:
		```js
		<body>
		HTML PAGE CONTENT
			<script language="javascript">
				alert('Message to the visitor of this page...')
			</script>
		MORE HTML PAGE CONTENT
		</body>
		```
	   
	*	script in anchor tag that onMouseOver handler brings up a data entry prompt and assigns entry to variable variable1:
		```js
			<a href="mypage.html" onMouseOver="alert('You are about to go to anoter page')">Special Link</a>
		```

#### Javascript implementation:
*	Direct scripts: Code executed when the browser/JS parser reads the line
*	Event-triffered: Code placed inside an event handler inside an HTML tag, that does nto execute until that event occurs
*	Stored/written for later use -- FUNCTIONS: code stored under a name that can be activated later
	*	Re-useable
	*	Can be sequenced
	*	Can be treated as "data" in other routines

#### Some very basic/general Javascript concepts::
*	Comments:
	*	You can enter comments in HTML code by using blocks that start with <-- and end with > ... internal comments are a good way to remind yourself what you are doing, or trying to do.
	*	You can enter comments into JS code by either on a SINGLE line of JS by preceding the comment with // ... or if you want to create a block of comments star tthe block with /* and end the block with */
*	Variables:
	*	Variables are "containers" in which you can store information (such as text and numbers), objects from a page (such as images and text boxes), or delayed code called functions (routines you write that are stored in that variable but not "executed" until you "call" that variable.)
	*	Variables need to be "created" with the var command.
	*	Variables can be "read" (data/objects retrieved from them) and "written" (store new data/objects into them)
*	Data:
	*	Different kinds of data includes text, numbers, expressions, objects and functions
	*	Data can be stored in variables and can be passed into functions and methods.
	*	Some data is simple, such as text and numbers, and others are more complex such as an object which has properties. In other words an image object has many properties, and each property has a piece of text of numeric data inside of it (an image object has width and src properties)..
*	Functions:
	*	Functions are variables that contain not data (text or string) but rather a set of JS code to be "run".
	*	Functions can be set up to receive data (called parameters of the function) in which case when you call that function you pass data to it (called arguments). Functions can also return data out (with a return command).
	*	Functions are most efficient to use when you want to execute a set of code many times. Or when you want to write out a long set of code in a central location that you can activate with a simple name (rather than having 100 lines of code inside an event handler, for instance).

 
#### Programming Fundamentals:

*	Variables:
	*	Data storage vessels - can hold string and numeric information
	*	Initially format or initialize variables with "var" - but ONLY the first time. So you can var favnumber or var favnumber = 34.
	*	Use = operator to set values. Use quotes to specify string values (rather than numeric values). So you can set variableA = 45 (to the number 45) but you need to set variableB = 'patrick' (to the text string patrick)
	*	Variable names must begin with a letter, but can contain numbers in their names. A variable name also CANNOT contain spaces OR hyphens in them. So favcolor, text2 and my2go are valid variable names, but 2go , fav color (with a space) , and my-name are not valid variable names.
	*	Variables created/set with numbers are considered to hold numeric data. Data stored in variables with quotes are considered to hold string data.
		*	var temp2='2'; temp2 = temp2 + 2; document.write (temp2);
		*	var temp2=2; temp2 = temp2 + 2; document.write (temp2);
	*	Best practice is to use descriptive variable names for clarity in your programming. Fname, lname, email and address are better variable name choices than f, l, em and a.
	*	Example1: Below shows three DIFFERENT ways of building and then outputting a variable... all three are equally valid:
		```js
		<script language="javascript">

			var myname = ""
			myname = myname + " My name is "
			myname = myname + "patrick"
			myname = myname + " "
			myname = myname + "dent"
			alert(myname)

			var myname = " My name is patrick dent"
			alert(myname)

			var myname = " My name is " + "patrick" + " " + "dent"
			alert(myname)

		</script>
		```
	*	Example2: In a page first a prompt assigns user-specified data to a variable, then displays that variable.
		```js
		<script language="javascript">
			var variable1 = prompt('Please enter value for variable varA')
			alert('Variable variable1 is now set to ' + variable1)
		</script>
		```

*	Expressions:
	*	An expressions can be strings, variables, numbers and combinations of them
	*	Operators define how expressions interact and are evaluated:
	*	= sign assigns values to variables or object properties
	*	+ and - perform calculations on expressions
	*	> and < compare expressions
	*	Evaluating an expression means returning its value. You can evaluation the value of a variable, and object, a string, and combinations of them

*	Arithmetic operators:
	*	When arithmetic operators are used with expressions the result are value judgments of those strings
		*	variable1 + variable2
		*	variable1 + 'phrase or string'
		*	'1 + 1 = ' + 1 + 1
		*	'11 = ' + 1 + 1
	*	+ means to add or join expressions
	*	- means to subtract expressions

*	Comparison operators:
	*	When comparison operators are used with expressions the expressions are evaluated and a true or false answer results:
		*	var large = 12; var small=2; alert(large<small);
	*	== evaluates if the expressions are equal
	*	!= evaluates if the expressions are not equal
	*	> evaluates greater than
	*	>= evaluates greater than or equal to
	*	< evaluates less than
	*	<= evaluates less than or equal to

*	Functions & Methods:
	*	Methods and functions are called by their name followed by the parentheses. When you call (activate) a function OR a method you MUST include parentheses for arguments, even if you don't have any information to pass along. For instance, alert() or alert('Test message').
	*	Methods are pre-written routines (or "mini programs") already stored in Javascript.
	*	Some methods are just one name, such as alert, whereas methods are called with a parent object preceding it, such as window.close() ... i.e. close() is not a method, but window.close() is.
	*	The "arguments" of a method or function are pieces of data (none, one or more) that you pass along to the routine. For instance, when you call the alert method you need to tell the program WHAT to display in the alert. So you pass the "message" as the sole argument in an alert call. The window.close() method does not have any argumetns (nothing else you need to tell it about closing a window), so the parentheses are always empty when you call that method. But regardless of whether a method (or function) has any arguments, you must always provide or represent that format through parentheses.
	*	Functions are routines that YOU write. You must define them in a script block BEFORE you call them.
	*	When you plan out a function, you must determine how many pieces of information the function you are writing will need to know/receive. When defining a function, you can write it to expect no arguments, one argument, two arguments, etc.
	*	Below is an example of a function called scaleit that takes any image and scales it to 100x100. The first function scales down a specific image on the page (the id of a specific image is hard-coded into the script):
		```js
		var scaleit = function ()
		{
		theobj = document.getElmentById('theimage') // store the object theimage into a variable
		theobj.width = 100 // access the width and height properties of the object stored in the variable
		theobj.height = 100
		}
		```
		This next function is written to receive one piece of information (the name of the image):
		```js
		var scaleit = function (imageid)
		{
		theobj = document.getElmentById(imageid)
		theobj.width = 100
		theobj.height = 100
		}
		```
		Below is another version that receives THREE pieces of information: the name of the image, the desired width and the desired height:
		```js
		var scaleit = function(imageid, w, h)
		{
		theobj = document.getElmentById(imageid)
		theobj.width = w
		theobj.height = h
		}
		```
 