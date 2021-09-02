//https://reqres.in

var App = (function () {
  App.login = function () {
    "use strict";

    //Js Code

    $(".login-submit").click(function () {
      var username = $("#email").val();
      var password = $("#password").val();

      postData("https://reqres.in/api/login", {
        email: username,
        password: password,
      }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
    });

    // Example POST method implementation:
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
  };

  return App;
})(App || {});