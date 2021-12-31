

var App = (function () {
  App.login = function () {
    "use strict";

    //Js Code

    $(".login-submit").click(function () {
      var no_pengguna = $("#no_pengguna").val();
      var password = $("#password").val();

      postData("http://eis2.mbi.gov.my:4545/authentication/api/signin", {
        no_pengguna: no_pengguna,
        password: password
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
