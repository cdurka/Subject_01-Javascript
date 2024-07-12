/*var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else {
        if (userNumber > secret) {
          return "Too high!";
        } else {
          return "Too low!";
        }
      }
    };
  };
  
  var guess = getGuesser();
  */

  //update the second addition
/*
  var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);
  
    return function (userNumber) {
      if (userNumber < secret) {
        return "lower";
      } else {
        if (userNumber > secret) {
          return "higher";
        } else {
          return "correct";
        }
      }
    };
  };
  
  var guess = getGuesser();
*/
  //swap the first and second condition
  var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);
  
    return function (userNumber) {
      if (userNumber < secret) {
        return "Too low!";
      } else {
        if (userNumber === secret) {
          return "Well done!";
        } else {
          return "Too high!";
        }
      }
    };
  };
  
  var guess = getGuesser();
