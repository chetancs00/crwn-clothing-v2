import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyBp44DyFL7Mg6Of5oEezfP5ISRQB3icswM",
    authDomain: "crwn-clothing-db-a0201.firebaseapp.com",
    projectId: "crwn-clothing-db-a0201",
    storageBucket: "crwn-clothing-db-a0201.appspot.com",
    messagingSenderId: "851793749692",
    appId: "1:851793749692:web:90c5238288bf06bb4b12b9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists());


      //if user data exists
    
    //return userDocRef

    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
        })
      } catch (error) {
        console.log('error creating the user', error.message );
      }
    }

   //if the user exists
   
   //create / set the document with the data from userAuth in my collection

   return userDocRef;

    

  
  }