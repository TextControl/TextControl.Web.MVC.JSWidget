# ⚠️ Warning: This project is tagged as obsolete and is no longer supported

# Welcome to the Text Control JS Widget
This ASP.NET MVC project hosts the IFRAME based JavaScript widget wrapper for the HTML5 based editor. This technology preview version can be tested in your application simply by adding a JavaScript package to your HTML.

The widget has (nearly) the same JavaScript API like the MVC version of TX Text Control Web. All objects, methods, properties and events can be used in the same way.
## How does this work?
The JavaScript widget project consists of two parts:

 - The hosting "server-side"  application (this GitHub project)
 - Your application that consumes this widget

Essentially, the widget lives in an IFRAME which  runs this ASP.NET MVC project. The widget provides a JavaScript wrapper API that can be used to program the editor from within your application. The JavaScript communicates with the IFRAME application through window [post messages](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

## Setup
In order to host this widget on your own servers, follow these steps:
 - Download this project and host it on an IIS server.
 - Open the file *widget/Scripts/**txtextcontrol.web.js*** and search for this variable:

```javascript
var m_destinationUrl = "http://localhost:1303/";
```
Replace the destination URL string with the URL where you are going to host this project.
When this hosting project is running, you can integrate the widget simply by adding this JavaScript tag to the HEAD of your HTML:
 
```html
<script src="http://localhost:1303/widget/scripts/txtextcontrol.web.js"></script>
```
Then create a container DIV somewhere in your HTML that will host the widget. The editor itself will automatically fill the complete container.
```html
<style>
#myTextControlContainer {
width: 1000px;
height: 500px;
margin-bottom: 20px;
}
</style>

<div id="myTextControlContainer"></div>
```
Finally, in a _SCRIPT_ section, create a new widget by passing the container id in the constructor:
```html
<script>
var textControl1;
window.onload = function() {
	textControl1 = new TXTextControlWeb("myTextControlContainer");
};
</script>

```
