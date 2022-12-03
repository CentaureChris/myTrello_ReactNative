import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    deleteUser} from "firebase/auth";
import { appFireB } from "./app";

const auth = getAuth(appFireB);

export function createUser(mail, pass) {
    return new Promise((res, rej) => {
        createUserWithEmailAndPassword(auth, mail, pass)
            .then((userCredential) => {
                res(userCredential.user);
            })
            .catch((error) => {
                console.log(error)
                rej(error)
            });
    })
}
export function connectUser(mail, pass) {
    return new Promise((res, rej) => {
        signInWithEmailAndPassword(auth, mail, pass)
            .then((userCredential) => {
                // Signed in
                res(userCredential.user);
            })
            .catch((error) => {
                rej(error)
            });
    })
}
export function suppUser(user) {
    return new Promise((res, rej) => {
        deleteUser(user).then(() => {
            res(true)
        }).catch((error) => {
            rej(error)
        });
    })
}