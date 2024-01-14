// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore"
import {getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";
import firebaseConfig from "./configFile"; 

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const analytics = getAnalytics(app);
export const auth = getAuth()