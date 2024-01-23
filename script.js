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
