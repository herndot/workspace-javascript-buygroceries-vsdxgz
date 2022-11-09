// Import stylesheets
import './style.css';

// Import javascript files
import './js/add-element.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseui from 'firebaseui';

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: 'AIzaSyCwtNB0A-KP8LwvEtJ-Df7Cj9BwufaLmKg',
  authDomain: 'grocerylist-e0d24.firebaseapp.com',
  projectId: 'grocerylist-e0d24',
  storageBucket: 'grocerylist-e0d24.appspot.com',
  messagingSenderId: '455097292055',
  appId: '1:455097292055:web:ee3426b9043152594c1352',
  measurementId: 'G-XX0EPYZTCS',
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$('#save').click(function () {
  // document.querySelectorAll('li') ==> nodelist
  // for loop to go through each nodelist
  // and then get the text content
  $(this).text('Saved');
  $('li').each(function () {
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection('groceryList').add({
      item: value,
    });
  });
});
