In this tutorial we'll learn what is AngularJS and it's main features.

You can run all examples in repository without any prerequesitions. Just run appropriate .html file in your browser and it's source in your text editor. All files numerated for ease of use.

What is AngulagJS

AngularJS is a JavaScript framework based on MVC design pattern. This framework was made for developing dynamic web-applications. AngularJS has some important differences from others JS frameworks: form validation, deep linking, data binding, no DOM manipulation in the controllers, declarative style. Before we look at these features more closely let's see basic usage of AngularJS first.


AngularJS Components

To understand what is AngularJS and how to work with we'll examine it's components.

AngularJC is a framework based on MVC pattern. This pattern consists of three parts: Model, View, Controller. Model is the representation of all data in the application, View is the way how date is presented to the user, and the third part - Controller establishes interaction between user (View) and data (Model). Now we can learn specifics of MVC design pattern in AngularJC.

View

The view is what the user sees. View in AngularJS is an HTML template with some declarations. You can declare in the template some data from the model in specific place or bind some HTML tag with the controller. Let's see example:

<div ng-controller="HelloCtrl">
	Hello {{name}}!
	<button ng-click="action()">
		OK
	</button>
</div>

In the attribute of div we declare that this div is binded to our controller HelloCtrl. Text in the double curly braces is the data of our Model. And attribute of button is declaration of calling method action() when click occurs.

So you can 








