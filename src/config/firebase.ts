import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyALPhsmewW9jkSpYHWOJfoEg8YjvCixULs',
  authDomain: 'learn-js-with-fahad.firebaseapp.com',
  projectId: 'learn-js-with-fahad',
  storageBucket: 'learn-js-with-fahad.firebasestorage.app',
  messagingSenderId: '615592988515',
  appId: '1:615592988515:web:0f535428001cadf7310d56',
  measurementId: 'G-3NPF03TGW5'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const firestoreDb = getFirestore(firebaseApp)

export { firebaseApp, firestoreDb }
