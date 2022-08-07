import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore , collection, doc, setDoc, getDoc } from "firebase/firestore";
const config = {
  apiKey: "AIzaSyDIwdVVPlGqKeCy-b0MmVuvL5oEd7ZaY98",
  authDomain: "igfollow-d8da9.firebaseapp.com",
  projectId: "igfollow-d8da9",
  storageBucket: "igfollow-d8da9.appspot.com",
  messagingSenderId: "681607008969",
  appId: "1:681607008969:web:6bc983dd7ee3521d9af318"
};


const app = initializeApp(config)
const auth = getAuth();
const db = getFirestore()
const provider = new GoogleAuthProvider();

export const signUpEmail = async (email, password) => {
  const res = createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // const ref =  collection(db, "users");
    //creating user in firestore
    //  await setDoc( doc(db,'users', `${user.uid}`),user)
    // const dataRef = await db.collection('users').doc(user.uid).set({...user})
    const userRef = doc(db, "users", user.uid);
    setDoc(userRef, {
      email:user.email,
      orders: [],
      displayname:user.displayName
    });


    // dataRef.set({...user})
    let data = {
      email:user.email,
      orders: [],
      displayname:user.displayName
    }
    //returning user
    return {status:true, user,data}
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {status:false, error}
    // ..
  });
  return res
}

export const signInEmail = async (email, password) => {

   const res =  signInWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      
      //getting user data from firestore
      const userRef = doc(db, 'users', user.uid)
      const dataSnap = await getDoc(userRef)



      return {status:true, user, data:dataSnap.data()}
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {status:false, error}
    });

    return res
}

export const continueWithGoogle = async () => {
  const res = await signInWithPopup(auth, provider)
  .then(async(result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    const userRef = doc(db, "users", user.uid);
    const dataSnap = await getDoc(userRef)

    let data;
    if(dataSnap.exists()){
      console.log('datais there', dataSnap.data())
      //return base data
      data = dataSnap.data()
      }else{
        console.log('noo dataa')
        //create base data 
        setDoc(userRef, {
          email:user.email,
          orders: [],
          displayname:user.displayName
        });
        //return base data
        data = {
          email:user.email,
          orders: [],
          displayname:user.displayName
        }
      }


    // userRef.get()
    // .then((docSnap)=> {
    //   if(docSnap.exists){
    //     console.log('datais there', docSnap.data())

    //     //return base data
    //   }else{
    //     console.log('noo dataa')
    //     //create base data 

    //     //return base data
    //   }
    // })

    console.log(user)
    return {status: true,user, data}
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    return {status: false,error}
  });
  return res
}

export const signOutGoogle = async () => {
  signOut(auth).then(() => {
    // Sign-out successful.

  }).catch((error) => {
    // An error happened.
  });
}

