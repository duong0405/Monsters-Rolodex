import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBnNMQ3YLS8X7GuH16uwITV9Zj5T-w1hl0",
    authDomain: "crwn-clothing-db-1b2ff.firebaseapp.com",
    projectId: "crwn-clothing-db-1b2ff",
    storageBucket: "crwn-clothing-db-1b2ff.appspot.com",
    messagingSenderId: "761368966633",
    appId: "1:761368966633:web:db2f54a0c2adc2acb6c778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);