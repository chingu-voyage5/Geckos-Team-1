var firebase = require('firebase/app');
require("firebase/auth");


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBHXsWN43n2ALikrRuigq7tCRuDhTyJXBo",
  authDomain: "gecko-team-01.firebaseapp.com",
  databaseURL: "https://gecko-team-01.firebaseio.com",
  projectId: "gecko-team-01",
  storageBucket: "gecko-team-01.appspot.com",
  messagingSenderId: "1087908997098"
};

let fire = firebase.initializeApp(config);

export default fire;