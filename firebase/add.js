//div met id studenten uit html aanspreken met
var studenten_div = document.getElementById('studenten');


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB627GD6o7mcky7I_qk5wokGZLjKPMJvoM",
    authDomain: "nmt-ii.firebaseapp.com",
    databaseURL: "https://nmt-ii.firebaseio.com",
    projectId: "nmt-ii",
    storageBucket: "nmt-ii.appspot.com",
    messagingSenderId: "603333372329",
    appId: "1:603333372329:web:47d5eb5ab8050749c67cb8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection("tweets").add({
  tweet: getParameterByName('tweet'),
  from: getParameterByName('from')
})


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}