
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAeI9IFuq-pSk5JU9k-9PaVUbF_XASWCoc",
    authDomain: "signin-a52a6.firebaseapp.com",
    databaseURL: "https://signin-a52a6.firebaseio.com",
    projectId: "signin-a52a6",
    storageBucket: "signin-a52a6.appspot.com",
    messagingSenderId: "24765085513",
    appId: "1:24765085513:web:c3fcadf480519a9a04cc98",
    measurementId: "G-7YL9SM0HD5"
};

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp(){
const email = document.getElementById("email");
const password = document.getElementById("password2");
const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
promise.catch(e=>alert(e.message));
alert("Signed Up!");
}

function signIn(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Signed In!"+email);
    window.location.href = "http://localhost:63342/Html/htmlfile2/index.html?_ijt=816m98d9r7pou7a0agq17c37im";

}
function signOut(){
    auth.signOut();
    alert("Signed Out!");
}
auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
        // ...
    } else {
        // User is signed out.
        // ...
    }
});

