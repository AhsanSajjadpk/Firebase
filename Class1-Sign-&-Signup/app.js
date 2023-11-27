
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBvcs_CT3P9kwc1kR3GPRZVMKfyMVraSqw",
    authDomain: "test-d7978.firebaseapp.com",
    projectId: "test-d7978",
    storageBucket: "test-d7978.appspot.com",
    messagingSenderId: "789547773453",
    appId: "1:789547773453:web:95e181411c86593764ef44",
    measurementId: "G-CZSQHL75X7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// let getemail =document.querySelector('#semail')
// let getpass =document.querySelector('#spass')



// let btn =document.querySelector('#subtn')
// btn.addEventListener('click',()=>{
//     createUserWithEmailAndPassword(auth, getemail.value, getpass.value)
//     .then((userCredential) => {

//       const user = userCredential.user;
//       console.log(user);

//   })
//   .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("error code "+ errorCode + " Error Message ", errorMessage);



//     });
// })
let btn = document.querySelector('#sibtn')
btn.addEventListener('click', () => {

    let email = document.querySelector('#lemail')
    let password = document.getElementById('lpass')

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.email);
        })
        .catch((error) => {
            //   const errorCode = error.code;
            //   const errorMessage = error.message;
            console.log(error);
        });



})

