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

db.collection("studenten").get().then((querySnapshot) => {
    querySnapshot.forEach((student) => {

        var student_div = document.createElement('div');

        student_div.innerHTML =  `<h2>${student.data().naam}</h2><p>Punten: ${student.data().punten}</p>`;

        studenten_div.appendChild(student_div);

        // wegschrijven in Web Inspector Console
        console.log(`${student.id} => ${student.data().naam}`);
    });
});



/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2020, 5, 3);
    }
  }
}

*/