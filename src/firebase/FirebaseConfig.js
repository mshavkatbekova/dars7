import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZOBz7VQmyuHhk8A2EzQ3StgAGewldTaQ",
  authDomain: "test-project-5471e.firebaseapp.com",
  projectId: "test-project-5471e",
  storageBucket: "test-project-5471e.appspot.com",
  messagingSenderId: "992555080517",
  appId: "1:992555080517:web:8d51d16c068f254c55bc2c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
