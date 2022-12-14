import { child, get, getDatabase, update,push, ref, set } from "firebase/database";
import { uuidv4 } from "@firebase/util";
import { appFireB } from "./app";

const database = getDatabase(appFireB);
const starCountRef = ref(database, 'projects/');

export function getColumns(uid,idProject) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projects/${uid}/${idProject}/column`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                // console.log("coucou", idProject, data, uid);
                // const indexProject = data.findIndex(elem => elem.id === uid)
                // if (indexProject == -1) reject({ message: "id non trouvé sur projects todos" })
                // if (!data[indexProject].todos) data[indexProject].todos = []
                resolve(data)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function addColumn(uid, idProject,columnName) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projects/${uid}/${idProject}/column`)).then((snapshot) => {
                const data = snapshot.val() ?? []
                console.log(data)
                data.push({ id: uuidv4(), name: columnName, todos: [] })
                console.log(data);
                set(ref(database, `projects/${uid}/${idProject}/column`), data);
                resolve(data)
            }).catch(err => {
                // console.log(err);
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

export function updateColumn(uid, idProject,idColumn,columnDatas,columnName){
    const updateCol = columnDatas
    updateCol.name = columnName
    console.log(updateCol)
    update(ref(database, `projects/${uid}/${idProject}/column/${idColumn}`), updateCol);
}

export function deleteColumn(uid, idProject,idColumn,){
    set(ref(database, `projects/${uid}/${idProject}/column/${idColumn}`), null)
}
