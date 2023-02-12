import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBL8grJ5XZ6PTtxn_3soSJKsmN9mBBv1ww',
  authDomain: 'goit-react-native-hw-project.firebaseapp.com',
  databaseURL:
    'https://goit-react-native-hw-project-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'goit-react-native-hw-project',
  storageBucket: 'goit-react-native-hw-project.appspot.com',
  messagingSenderId: '93492562347',
  appId: '1:93492562347:web:2ce00d59d10005679aaaee',
  measurementId: 'G-PPRE3K4ZTG',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
