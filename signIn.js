const firebaseConfig = {
    apiKey: "AIzaSyAeI9IFuq-pSk5JU9k-9PaVUbF_XASWCoc",
    authDomain: "signin-a52a6.firebaseapp.com",
    databaseURL: "https://signin-a52a6.firebaseio.com",
    projectId: "signin-a52a6",
    storageBucket: "signin-a52a6.appspot.com",
    messagingSenderId: "24765085513",
    appId: "1:24765085513:web:c3fcadf480519a9a04cc98",
    measurementId: "G-7YL9SM0HD5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Signed Up!");
    window.location.href = "http://localhost:63342/Html/htmlfile2/index.html?_ijt=div2895hidq8vdc4uhstbtnjis";
}

function signIn(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Signed In!"+email);
    window.location.href = "http://localhost:63342/Html/htmlfile2/index.html?_ijt=div2895hidq8vdc4uhstbtnjis";
}
function signOut(){
    auth.signOut();
    alert("Signed Out!");
    window.location.href = "http://localhost:63342/Html/htmlfile2/index.html?_ijt=div2895hidq8vdc4uhstbtnjis";
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

