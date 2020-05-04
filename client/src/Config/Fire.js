import firebase from "firebase"
// Your web app's Firebase configuration
var config = {
apiKey: "AIzaSyCEk35BALjPXiUf7yU2qFfLHA_ORBJX6ng",
authDomain: "food4poor.firebaseapp.com",
databaseURL: "https://food4poor.firebaseio.com",
projectId: "food4poor",
storageBucket: "food4poor.appspot.com",
messagingSenderId: "626169818128",
appId: "1:626169818128:web:f54a197db5da8b72a16e95",
measurementId: "G-33WT5D7BGJ"
};

// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire