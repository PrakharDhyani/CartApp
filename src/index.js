import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZzulDUjGS_eFDypaWJvkUXS2IZ7MEeOk",
  authDomain: "cartapp-4f710.firebaseapp.com",
  projectId: "cartapp-4f710",
  storageBucket: "cartapp-4f710.appspot.com",
  messagingSenderId: "88618188013",
  appId: "1:88618188013:web:4e2092b7c73e86350e60e4"
};



const app = initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

