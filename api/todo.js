import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { uuidv4 } from "@firebase/util";
import { appFireB } from "./app";

const database = getDatabase(appFireB);
const starCountRef = ref(database, 'projects/');

export function getTodos(uid,idProject,column) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `/projects/${uid}/${idProject}/column/${column}/todos`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                console.log(data)
                resolve(data)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function addTodo(uid,idProject,idColumn,todosName){
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `/projects/${uid}/${idProject}/column/${idColumn}/todos`)).then((snapshot) => {
                const data = snapshot.val() ?? []
                console.log(data)
                data.push({ id: uuidv4(), name: todosName})
                console.log(data);
                set(ref(database, `projects/${uid}/${idProject}/column/${idColumn}/todos`), data);
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
