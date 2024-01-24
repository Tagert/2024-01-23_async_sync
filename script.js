"use strict";

// 1. Susikurti kreipimasi į funkcija su Vardu, Slaptažodžiu.
function getYourData(userName, password) {
  if (userName && password) {
    console.log(`Welcome ${userName} your log in was successful`);
  } else {
    console.log(`Sorry you can't log in, not enough info`);
  }
}

const processUserInput = (callback) => {
  const userName = "lname";
  const password = "password";
  callback(userName, password);
};

processUserInput(getYourData);
// 2. Iškvietus funkciją po 3sek mes gauname Promisą (resolvinta arba rejectinta).

const delayReturn = (userName, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName && password) {
        return resolve(`Welcome ${userName} your log in was successful`);
      } else {
        return reject(`Sorry you can't log in, not enough info`);
      }
    }, 3000);
  });
};

delayReturn("Gamer25", "")
  .then((res) => {
    console.log("res-success,", res);
  })
  .catch((err) => {
    console.log("err-fail,", err);
  });

// 3. Jeigu siunčiamas vardas yra "Tadas" ir slaptazodis "12345678" tuomet resolve grazina, kad jus prisijungete sekmingai, kitu atveju gražiname reject su žinute, kad prisijungimas nepavyko.

const checkData = (userName, password) => {
  return new Promise((resolve, reject) => {
    if (userName && password) {
      return resolve(`Welcome ${userName} your log in was successful`);
    } else {
      return reject(`Sorry you can't log in, not enough info`);
    }
  });
};

checkData("YourMaster69-Tadas", "1234")
  .then((res) => {
    console.log("res-success,", res);
  })
  .catch((err) => {
    console.log("err-fail,", err);
  });

// // naudoti DOM komandas
// 4. Žinutė turi but išvedama i ekraną, sėkminga žinutė - žalia spalva, nesėkminga - raudona.
const firstDiv = document.createElement("div");
document.body.prepend(firstDiv);
firstDiv.setAttribute("style", "height: 150px; width: 150px;");

const checkYourNumber = 5;

const changeColor = (successfulColor, unsuccessfulColor, checkYourNumber) => {
  return new Promise((resolve, reject) => {
    if (checkYourNumber >= 5) {
      return resolve((firstDiv.style.backgroundColor = successfulColor));
    } else {
      return reject((firstDiv.style.backgroundColor = unsuccessfulColor));
    }
  });
};

changeColor("green", "red", checkYourNumber)
  .then((res) => {
    console.log("congrats res-was_successful,", `Your color - ${res}`);
  })
  .catch((err) => {
    console.log("sorry err-was_unsuccessful,", `Your color - ${err}`);
  });

// 5. Prisijungus sekmingai - į consolej atvaizduojam grazinta response.

const myFunction = (userName, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const messageElement = document.createElement("p");
      if (userName === "Tadas" && password === 12345678) {
        firstDiv.after(messageElement);
        messageElement.textContent = "Success, you are logged in";
        messageElement.style.color = "green";

        return resolve("login was successful");
      } else {
        firstDiv.after(messageElement);
        messageElement.textContent = "Wrong details, try again";
        messageElement.style.color = "red";

        return reject("wrong details, try again");
      }
    }, 1000);
  });
};

myFunction("Tadas", 12345678)
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });

// 6. CAO JS 20 tema;

const checkYourChances = (random) =>
  new Promise((resolve, reject) => {
    if (random <= 4) {
      setTimeout(() => {
        return resolve(`Thank you for waiting, loading time was 3s`);
      }, 3000);
    } else {
      setTimeout(() => {
        return reject(
          `Thank you for waiting, there was some errors, loading time was 5s`
        );
      }, 5000);
    }
  });

const randomNum = Math.floor(Math.random() * (5 - 1 + 1) + 1);
console.log(randomNum);

checkYourChances(randomNum)
  .then((res) => {
    return `${res}. + double checking`;
  })
  .then((secondRes) => {
    console.log("secondRes", secondRes);
  })
  .catch((err) => {
    console.log("err", err);
  });

//   1. Sukurti localstorage info (userId);
localStorage.setItem("user", "dfgdf51dg1dS");

// 2. Atvaizduot concolėj informaciją iš localsorage;
const localUser = localStorage.getItem("user");
console.log(localUser);

// 3. Parašyt scriptą kuris ištrina informaciją iš userId localstorage;
localStorage.removeItem("user");

// 4. Sukurt customerId cookie.
const localCookie = (document.cookie = "name=newCookie");

// 5. Atvaizduot ekrane customer cookie;
console.log(localCookie);

// 6. Sukurt product objektą su keliais properties. Objektą įdėt į loclastorage;
const localObj = {
  name: "Tommy",
  job: "Painter",
  hobbies: ["sports", "music", "books"],
};

localStorage.setItem("userObj", JSON.stringify(localObj));

// 7. Objektą išsitraukt iš localstorage bei jį atvaizduot (objekto pavidalu);
const localUserObj = JSON.parse(localStorage.getItem("userObj"));

console.log(localUserObj);

// 8. Sukurti formą su 2 inputais (username, password) bei buttoną;

// 9. Paspaudus button reikia consolėj atspauzdinti tiek username tiek password;
// 10. Padaryt validaciją, jei nėra nurodyta username ar password consolėj turi atsirast ne duomenis, o informacinė žinutė prašanti įvesti duomenis;
// 11. Sėkmės atveju į ekraną išvesti žalią tekstą su sekmės žinute, neturint duomenų - raudoną tekstą su informacine žinute;

const loginButton = document.getElementById("btn");

const login = () => {
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  const errorElement = document.querySelector(".error");
  const userNameInfo = document.querySelector(".username-info");
  const passwordInfo = document.querySelector(".password-info");
  if (userName && password && userName.length > 3) {
    localStorage.setItem("userName", userName);
    errorElement.textContent = "Login was successful.";
    errorElement.style.color = "green";
    alert("Login was successful.");
  } else {
    errorElement.textContent =
      "Please ensure that all fields are filled out completely.";
    errorElement.style.color = "brown";
  }

  if (userName) {
    userNameInfo.textContent = "";
    // errorElement.textContent = "";
  } else {
    userNameInfo.textContent = "Please enter a username.";
    userNameInfo.style.color = "brown";
  }

  if (userName.length > 3) {
    userNameInfo.textContent = "";
    // errorElement.textContent = "";
  } else {
    userNameInfo.textContent = "Please enter more that 3 letters";
    userNameInfo.style.color = "brown";
  }

  if (password) {
    passwordInfo.textContent = "";
    // errorElement.textContent = "";
  } else {
    passwordInfo.textContent = "Please enter a password.";
    passwordInfo.style.color = "brown";
  }
};

loginButton.addEventListener("click", login);
