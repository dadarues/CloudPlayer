// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { start } from "./app";
import { init, collectionReferences, queryDocs, addItem } from "./firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6f2Iipe9dkegqZhY5JOLx0zDSkk7Tksk",
  authDomain: "cloudplayer-9445d.firebaseapp.com",
  projectId: "cloudplayer-9445d",
  storageBucket: "cloudplayer-9445d.appspot.com",
  messagingSenderId: "975375348439",
  appId: "1:975375348439:web:da5062c2a7a3c71c667692"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
init(db);

export async function initPlayer() {
    const songs = await queryDocs(collectionReferences.songs);
    start(songs[0]);
}

if (window?.page === 'index') {
  initPlayer();
} else if (window?.page === 'add') {
  const form = document.querySelector("#addSongForm");
  form.onsubmit = (e) => {
    e.preventDefault();
    const data = {};
    const inputs = e.target.querySelectorAll("input");
    inputs.forEach(input => {
      if (input.id) {
        let key = input.id;
        data[`${key.charAt(0).toLowerCase()}${key.slice(1)}`] = input.value;
      }
    });
    const r = addItem(collectionReferences.songs, data);
    console.log(r);
  }
}