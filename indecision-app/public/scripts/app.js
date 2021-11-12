"use strict";

console.log("app.js is running...");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  // get input by name="option"
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

var removeAllOptions = function removeAllOptions() {
  app.options = [];
  renderIndecisionApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById("app");

var renderIndecisionApp = function renderIndecisionApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should i do?"
    ),
    React.createElement(
      "button",
      { onClick: removeAllOptions },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
