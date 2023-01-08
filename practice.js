
var firebaseConfig = {
    apiKey: "AIzaSyBP2_aKFQPGnTKG1-OejkY7PaB1ivMJtjw",
    authDomain: "kwitter-3e5ed.firebaseapp.com",
    databaseURL: "https://kwitter-3e5ed-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-3e5ed",
    storageBucket: "kwitter-3e5ed.appspot.com",
    messagingSenderId: "1453400418",
    appId: "1:1453400418:web:c96024af9c65205720cc3b",
    measurementId: "G-D31PE6EP5R"
  };
  
   firebase.initializeApp(firebaseConfig);

   function addUser(){
     user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
        jamalthanakau : "goldfish"
     });
   }



