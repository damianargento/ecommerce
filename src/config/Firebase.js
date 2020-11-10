import * as firebase from 'firebase'

    var firebaseConfig = {
        apiKey: "AIzaSyBsebUoeQTykLoEcbx0v5W-Fcgtun1Uk4o",
        authDomain: "laparagrafica-ecommerce.firebaseapp.com",
        databaseURL: "https://laparagrafica-ecommerce.firebaseio.com",
        projectId: "laparagrafica-ecommerce",
        storageBucket: "laparagrafica-ecommerce.appspot.com",
        messagingSenderId: "1020441587067",
        appId: "1:1020441587067:web:a6588b2198299b6d55a1de",
        measurementId: "G-7JG195X5HG"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore()
      firebase.db = db
      firebase.auth = firebase.auth()
      firebase.analytics();

export default firebase
