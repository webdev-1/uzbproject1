// import * as firebase from 'firebase/app';

// import 'firebase/analytics';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';
// import 'firebase/performance';


// // web application's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyANZlFJrXhHqsPRgsHG_yE_yu9q8C6C67M",
//     authDomain: "uzbnetwork1.firebaseapp.com",
//     databaseURL: "https://uzbnetwork1.firebaseio.com",
//     projectId: "uzbnetwork1",
//     storageBucket: "uzbnetwork1.appspot.com",
//     messagingSenderId: "458669348091",
//     appId: "1:458669348091:web:a7307ff2c7b7e8e5838c5e",
//     measurementId: "G-0N8SPJZQZQ"
//   };

// // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   export default firebase;
//   export const analytics = firebase.analytics();
//   export const auth = firebase.auth();
// //   export const firestore = firebase.firestore();
// //   export const storage = firebase.storage();
// //   export const performance = firebase.performance();


// import firebase from 'firebase'
// import '@firebase/firestore' // 👈 If you're using firestore
// import ReduxSagaFirebase from 'redux-saga-firebase'

// const myFirebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyANZlFJrXhHqsPRgsHG_yE_yu9q8C6C67M",
//     authDomain: "uzbnetwork1.firebaseapp.com",
//     databaseURL: "https://uzbnetwork1.firebaseio.com",
// });

// const Firebase = new ReduxSagaFirebase(myFirebaseApp);

// export default Firebase;