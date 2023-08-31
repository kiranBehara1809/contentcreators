import React, { useContext, useState, useEffect } from "react";
// import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {
  collection,
  addDoc,
  collectionGroup,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  getDocs,
  updateDoc,
  orderBy,
  deleteDoc,
  FieldValue,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
const ApiContext = React.createContext();

export function useApi() {
  return useContext(ApiContext);
}

export function ApiProvider({ children }) {
    const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState();
  const [currentIp, setCurrentIp] = useState("");
  const [loading, setLoading] = useState(true);
  const [projectLoader, setProjectLoader] = useState(false);


  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  }

  function logout() {
    navigate("/login")
    sessionStorage.clear();
    return auth.signOut();
  }

  function postData(collectionName, obj) {
    const collectionRef = collection(db, collectionName);
    const { serverTimestamp } = firebase.firestore.FieldValue;
    return addDoc(collectionRef, {
      ...obj,
      userId: currentUser?.uid,
      createdAt: serverTimestamp(),
    });
  }

  function updateData(collectionName, obj, uid) {
    const docRef = doc(db, collectionName, uid);
    const { serverTimestamp } = firebase.firestore.FieldValue;
    return updateDoc(docRef, {
      ...obj,
      updatedAt: serverTimestamp(),
    });
  }

  function updateFieldsInDoc(collectionName, obj, uid) {
    const docRef = doc(db, collectionName, uid);
    const { serverTimestamp } = firebase.firestore.FieldValue;
    return updateDoc(docRef, { ...obj });
  }

  function deleteData(collectionName, uid) {
    const docRef = doc(db, collectionName, uid);
    return deleteDoc(docRef);
  }

  function getData(collectionName) {
    setProjectLoader(true);
    // return getDocs(query(collection(db, collectionName), where("userId", "==", currentUser?.uid)));
    let promise = getDocs(query(collection(db, collectionName)));
    promise
      .then((x) => {
        setProjectLoader(false);
      })
      .catch((e) => {
        setProjectLoader(false);
      });
    return promise;
  }

  function getCompoundQuerResults(queryInfo) {
    setProjectLoader(true);
    // return getDocs(query(collection(db, collectionName), where("userId", "==", currentUser?.uid)));
    let promise = getDocs(query(queryInfo));
    promise
      .then((x) => {
        setProjectLoader(false);
      })
      .catch((e) => {
        setProjectLoader(false);
      });
    return promise;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      setProjectLoader(false);
    });
    return unsubscribe;
  }, []);

  async function getCurrentIpViaAPI() {
    await fetch(`https://api.ipify.org?format=json`).then((x) => {
      x.json().then((y) => {
        setCurrentIp(y.ip);
      });
    });
  }


  const value = {
    currentUser,
    logout,
    signInWithGoogle,
    getData,
    postData,
    updateData,
    deleteData,
    projectLoader,
    getCompoundQuerResults,
    updateFieldsInDoc,
  };

  return (
    <ApiContext.Provider value={value}>
      <Backdrop
        sx={{ color: "#000", zIndex: 99999 }}
        open={loading || projectLoader}
      >
        <CircularProgress color={"info"} />
      </Backdrop>

      {!loading && children}
    </ApiContext.Provider>
  );
}
