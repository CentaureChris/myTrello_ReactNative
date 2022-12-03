import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { uuidv4 } from "@firebase/util";
import { appFireB } from "./app";


const database = getDatabase(appFireB);
const starCountRef = ref(database, 'projects/');


export function getAllProjects(uid) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database, 'projects/' + uid);
            console.log(reference);
            onValue(reference, (snapshot) => {
                const data = snapshot.val();
                resolve(data)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function addProjects(uid, projectName) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projects/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                data.push({ id: uuidv4(), title: projectName, column: [] })
                console.log(data);
                set(ref(database, 'projects/' + uid), data);
                resolve(data)
            }).catch(err => {
                console.log(err);
                // const data = []
                // data.push({ id: uuidv4(), nom: nomCarnet, photos: [] })
                // set(ref(database, 'albums/' + uid), data);
                // resolve(data)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}