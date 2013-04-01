In this tutorial we'll learn what is AngularJS and it's main features.

You can run all examples in repository without any prerequesitions. Just run appropriate .html file in your browser and it's source in your text editor. All example numerated for ease of use.

# What is AngularJS

AngularJS is a JavaScript framework based on MVC design pattern. This framework was made for developing dynamic web-applications. AngularJS has some important differences from others JS frameworks: form validation, deep linking, data binding, no DOM manipulation in the controllers, declarative style. Before we look at these features more closely let's see basic usage of AngularJS first.

## AngularJS Components

To understand what is AngularJS and how to work with it we'll examine it's components.

AngularJC is a framework based on MVC pattern. This pattern consists of three parts: Model, View, Controller. Model is the representation of all data in the application, View is the way how data is presented to the user, and the third part - Controller establishes interaction between user (View) and data (Model). Now we can learn specifics of MVC design pattern in AngularJC.

### View

The view is what the user sees. View in AngularJS is an HTML template with some declarations. You can declare in the template some data from the model in the  specific place or bind some HTML tag with the controller. Let's see example ("1. Hello World" in repository)):

```
<div ng-controller="HelloCtrl">
	Hello {{name}}!
	<button ng-click="action()">
		OK
	</button>
</div>
```

In the attribute of div we declare that this div is binded to our controller HelloCtrl. Text in the double curly braces is the data of our Model. And attribute of button is declaration of calling method action() when click occurs.

In AngularJS templates you declare placeholders for data from your models and declare what tags will be binded to specific events.

### Controller

Controller in AngularJS is a class. Controllers construct models and reacts to the actions when some event occurs. That's how you can implement HelloCtrl:

```
function HelloCtrl($scope) {
	$scope.action = function() {
		$scope.name = 'World';
	}
	$scope.name = '';
}
```

When you create controller you must send argument $scope. $ sign is AngularJS prefix for it's ojbects. $scope is an object which binds the Model with the View. Defining $scope properties you can create callback functions and Model variables. in this example we defined action callback function which will be called when user clicks button 'Hi'. Also we created variable 'name'.

So, when you load 'Hello World' example, AngularJS creates controller and initializes variable 'name' to empty string. When you click 'Hi' button, action function is called and 'name' property is changed to 'World'.

### Model

In AngularJS you create Model data through $scope variable like we did: `$scope.name = '';`

And to show this data in the View you use curly braces in template: {{name}} - notice, you don't need to point $scope, but data which you present must be in scope of certain controller. Let's see example ("2. Scopes" in repository):

```
<div ng-controller="FirstCtrl">
	This is the scope of the {{name}}!
</div>

<div ng-controller="SecondCtrl">
	This is the scope of the {{name}}!
</div>
```

And controllers:

```
function FirstCtrl($scope) {
  $scope.name = 'First Controller';
}

function SecondCtrl($scope) {
  $scope.name = 'Second Controller';
}
```

We just declared variables with the same name. When you run this page in your browser you'll see:

```
This is the scope of the First Controller!
This is the scope of the Second Controller!
```

Now as we learned basics of MVC design pattern in AngularJS, let's also learn about bootstrapping it to HTML page.

### Bootstrapping AngularJS

To bootstrap AngularJS to your application you need to add AngularJS script. You can find it here: [http://angularjs.org](http://angularjs.org). Just put that script to your JS folder and make reference in your HTML page:

```
<head>
  <script src="scripts/angular.min.js"></script>
</head>
```

Also you can reference to the angulag script on it's server like I do in this tutorial: `<script src="http://code.angularjs.org/1.0.5/angular.min.js"></script>`

OK. Now you need to say AngularJS compiler where in your document is AngularJS code. You do this with attribute ng-app. You can place this attribute in any tag of your document, so AngularJS will work only in that part. Like this:

```
<div ng-app>
<!-- Part of the page where AngularJS works -->
</div>
```

Also you can place ng-app in html tag, so AngularJS will work in whole document:

```
<html ng-app>
<!-- Now you can declare here AngularJS controllers and put placeholders for Model data -->
</html>
```

## Data binding

And for the end part let's examine one more example - "Data Biding" Which helps us see one very important feature of AngularJS. HTML code:

```
<div ng-controller="DataBindingCtrl">
  Hello {{name}}!<br/>
  <input ng-model="name">
</div>
```

We put placeholder for our Model variable 'name' and bind input field with the same model variable. JavaScript code:

```
function DataBindingCtrl($scope) {
  $scope.name = '';
}
```

When page is loaded variable name is an empty string. But when we type something in the text field the sting above is automatically updates. But look at our code!!! There is no DOM manipulation in our code, there is no callbacks in controller. We just declare controller in template, put placeholder and declare that input field is binded to Model variable 'name'. So, we can separate out some features of AngularJS:

1. Declarative style. In templates we declare some stuff - no actual code like calling functions.
2. Data binding. When something happens with data in Model it is immediately represented in View and vice versa.
3. No DOM manipulation in Controller. That means no more innerHTML code on Controller side.

So, that's all for today.

You can find more info about AngularJS here:
[Tutorial](http://docs.angularjs.org/tutorial/index),
[Developer's guide](http://docs.angularjs.org/guide)