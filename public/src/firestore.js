import {
    getDocs,
    collection,
    addDoc
} from "firebase/firestore";

export const collectionReferences = {
    songs: undefined
};

export function init(db) {
    Object.keys(collectionReferences).forEach(key => {
        collectionReferences[key] = collection(db, key);
    })
}

export async function queryDocs(collection) {
    try {
        const songs = [];
        const snapshot = await getDocs(collection);
        snapshot.docs.forEach((doc) => {
            songs.push({ id: doc.id, ...doc.data() });
        });
        return songs;
    } catch (error) {
        console.log(error.message);
    }
}

export async function addItem(collection, data) {
    const addResponse = await addDoc(collection, data);
    return addResponse;
}