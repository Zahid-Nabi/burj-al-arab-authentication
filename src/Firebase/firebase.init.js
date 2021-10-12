import { initializeApp } from "firebase"
import firebaseConfig from "./firebase.config"

const firebaseInitialization = () => {
    initializeApp(firebaseConfig)
}

export default firebaseInitialization;