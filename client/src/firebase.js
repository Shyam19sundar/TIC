import firebase from "firebase"
import "firebase/storage"

const firebaseConfiguration = sessionStorage.getItem("firebaseConfig");
const firebaseConfig = JSON.parse(firebaseConfiguration)

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage }