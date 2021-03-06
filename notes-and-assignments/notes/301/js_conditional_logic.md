Conditional Logic
=================

### Overview

* Review last lecture
  * data types
  * variables
  * functions
* Local Variables
* Global Variables
* Conditional Logic
  * if statements
  * else
  * else if
* parseFloat

******************************************************************
Please download the following zip file and extract it to a folder:

Yuanbo: [starter files](http://itpwebdev.herokuapp.com/starters/301/js_conditional_logic.zip)

David: [starter files](http://itpwebdev.herokuapp.com/starters/301/js_conditional_logic-2.zip)
******************************************************************

### JS Placement

JS can be written in three ways: In SCRIPT tags as direct code, either in the HEAD or in the BODY. Code placed in this manner executes in the order of page load when the browser parses that location of the file.

In SCRIPT tags in functions (stored or delayed routines), either in the HEAD or in the BODY. Javascript in functions are parsed by the browser for proper syntax, but are not executed until that function is called.

In HTML tags in the BODY, tied to event handlers. For instance, in an anchor tag you can have onmouseover="xxxxxx" where x represents direct code or calling of functions. Event handlers must either equal methods, functions or Javascript instructions/routines. 


### Object basics

Objects are scoped/referenced by their location in the Domain Object Model or DOM. document.getElementbyId('myobj') would locate an object IDed as 'myobj'. There are many ways to query the DOM for an object. document.getElementById() is just one approach.

Objects have properties that can be read and changed through Javascript. 

#### Image swapping

Changing the src property of an image object such as:

```js
document.getElementById('myimage').src='newimage.gif';
```

#### Change background color

Changing the bgColor property of the document such as:

```js
document.bgColor = 'red';
```

#### Change text form field values

The content of a text field with an ID of info could be changed to 'Please fill in your name' by:

```js
document.getElementById('info').value = 'Please fill in your name';
```

Objects have methods which are like stored procedures specific to those objects. These named actions usually transform or manipulate their parent object. (Note: Some window methods do not require the window object such as alert and prompt.) 

#### Closing a window

The close method of the window object closes the browser window, as in:

```js
window.close();
```

__Information Prompt__: This window method brings up a prompt for the user to input information. To set a new variable named 'userinfo' to the results of a prompt that says 'Please enter your information' you could write:

```js
var userinfo = prompt('Please enter your information');
```

Objects have __event handlers__ that detect user interaction and act as triggers for Javascript. These can detect things like when a user has their mouse over an object, when they select an object and when a page finishes loading. Different objects support different event handlers. Event handlers begin with 'on':

__onmouseup__: Detect when someone releases a mouseclick.

__onchange:__ To execute a function called checkInfo that perform some sort of data validation on the content of a form field when a person enters new information, you could include in the form tag onchange="checkInfo()"

__onsubmit:__ To bring up an alert box that thanks someone when they submit a form, you could include in the form tag:

```html
<form onsubmit="alert('Thanks for filling out the form.');">
```

#### Calling functions/method and arguments:

Arguments and Parameters: When you call a functions or methods, you pass additional data to them through arguments. When you write functions, you can build in parameters to accept data when the function is "called". Arguments contain the data to be passed to function/methods

Parameters contain the names of local variables which argument data will be assigned to.

When you call functions and methods you use parentheses to define the arguments for them. Even if you don't have any data to pass to a function, you must include empty argument parentheses.

Methods automatically expect one or more arguments, and plug the information you provide into the method, such as the alert method taking the argument you provide and displaying it in the alert box.

Functions are formatted with parentheses to define their parameters. If a function will not have any parameters, it must still be constructed with (empty) parentheses

Functions with parameters assign the argument data to "local variables". These variables are named in the parentheses of functions (as opposed to the parentheses of the statement that calls the function). Local variables only work in side the function (they cannot be read by the page at large or other Javascript routines not contained in the function). 

__Example 1:__

```html
<script>
var linkAlert =  function(linkmsg) {
  alert('You are leaving the current site and going to ' + linkmsg);
};
</script>

<a href='mypage.html' onmousedown="linkAlert('My Page')">my link</a>
```

When someone clicks on the above link it runs the linkAlert function with the string 'My Page' passed as an argument.

The function linkAlert assigns the passed data to a local variable 'linkmsg'

When run, the linkAlert function brings up an alert (pop-up message) and displays the string 'You are leaving the current site and going to ' and the value of the linkmsg variable that was passed into the function when it was called.

So in this example 'You are leaving the current site and are going to My Page' will appear in a pop-up alert box before the user is taken to the link's page/url. 

__Example 2:__

```html
<script>
  var displayInfo = function(info) {
    console.log(info);
  };
</script>

<form name="myform">
  <input type="text" name="thename" id="thename" onchange="displayInfo(this.value)">
</form>
```

The value (content) of the thename box is passed as an argument to the DisplayInfo function

The DisplayInfo function assigns data passed to it (as an argument) to the local variable 'info'

The alert method uses the info variable as its argument (and therefore displays the value of the local variable in an alert box).

Three functions page: the following [example](http://webdev.usc.edu/function1_example.html) has a page with three functions (and here is the starter file with no scripting). One function (alertbox) has one parameter that receives string data, one function (imageinfo) has three parameters that receive string data, and one function (imageinfo2) has one parameter that receives an entire object and then extras values/properties from that object.
 
### Variables

__Global Variables:__ Variables created by the var function and created OUTSIDE of functions are "global' variables, which means they can be accessed from any Javascript in the page.

They can be used/read/manipulated by any routine

Global variables exist in the memory of a browser when a page is loaded (the currently page) and are lost/dropped when a new document is loaded (when the user goes to another page)

When working with framed documents, can create a frame that doesn't unload and store information in global variables in that document

 
__Local Variables:__ Initialized within routines (functions) specifically for use in that section of code

Cannot be read outside of the defining routine (when the function finishes executing the local variable data is lost)

__Object Values:__ Value properties of objects can be manipulated like global variables

 
__Set variables:__ Use the = sign to set expressions or data to variables, such as i = 2 or i = 'phrase' or var name = document.myform.namefield.value

Can also use += to add to a variable. For instance:

```js
  var i = 'This is a new page ';
  i += 'that I have created for you to see';
  document.write(i);
```

### Conditional logic

Event handlers can detect certain kinds of user activity on a page, but inherently only provide for a single occurrence.

Conditional logic allows programmers to build different routines or code execution depending on different (planned) contingencies. (Natural Language): If the information inputted in the textbox IDed as n1 is '1' then display 'You entered 1'

(Javascript) if (document.getElementById('n1').value == '1') { alert('You entered 1') }

Remember that = is used to assign expressions to properties and variables, whereas == is used to evaluate expressions.

 

Whether the associated routine runs is dependent on the result of the expression evaluation you set up.

Often referred to as if/then statements or conditional routines

if statement Format: if (EXPRESSION EVALUATION) { CODE TO EXECUTE }

Assigned code executes if expression is evaluated as true

Similar to functions, curly crackets are used to delineate the code to be executed.

```js
if (document.getElementById('n1').value == '1') { 
  alert('You entered 1');
}
```

__else clause__ in if statement Creates basic true/false conditional routines

else assigns code to a false expression evaluation -- creates a second code branch in condition if routine 

```js
if (document.getElementById('n1').value == '1') { 
  alert('You entered 1');
}
else { 
  alert('You did not enter 1');
}
```

__else if clause__ in if statement Creates ADDITONAL logic branches OFF the original statement.

ONLY is evaluated if the first/previous statement/s (expression evaluations) were false (did not match)

can have one or more of these AFTER the if statement but BEFORE the catch-all "else" statement (if it exists) 

```js
if (parseFloat(document.getElementById('n1').value) > 18) {
  alert('You are of legal voting age');
}
else if (parseFloat(document.getElementById('n1').value) < 18) { 
  alert('You cannot yet vote');
}
else if (parseFloat(document.getElementById('n1').value) == 18) {
  alert('Congratulations! Just this year you became eligible to vote!');
}
else { 
 alert('Hmm. It does not appear that you entered a valid age.');
}
 ```
 
Lecture [example](http://webdev.usc.edu/itp301/lecture_examples/conditional_agecheck.html) that takes a piece of data, converts it to a number, then evaluates it according to certain criteria.

 