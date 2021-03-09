import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBZVH9s99vtqbd5I2nYJ4-jmc58o2-CexQ',
  authDomain: 'shop-demo-ed33c.firebaseapp.com',
  projectId: 'shop-demo-ed33c',
  storageBucket: 'shop-demo-ed33c.appspot.com',
  messagingSenderId: '706251795044',
  appId: '1:706251795044:web:d49dfd34c8aaba60b00d71',
  measurementId: 'G-4V7PJ7CY8Q',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
