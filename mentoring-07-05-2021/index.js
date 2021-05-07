/**
 try...catch
The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.
 */
const axios = require("axios");
try {
  console.log("test try");

  let name;

  console.log("log after the error");
} catch (ex) {
  console.log("there is error ==> ", ex); // there is error ==>  ReferenceError: name is not defined
}

const api = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log(res.data);
  } catch (ex) {
    console.log("there is error ==> ", ex.response);
  }
};

api();
