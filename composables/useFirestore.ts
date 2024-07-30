import { useCollection , useFirestore} from 'vuefire'


import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const taridatadatabase = async (col: string) => {
const db = useFirestore();

  const colRef = useCollection(collection(db, col));
  return colRef;
};

export const setdatabase = async (col: string, id: string, document: Object) => {
  const db = useFirestore();


  await setDoc(doc(db, col, id), document, { merge: true });
};

export const tambahdatabase = async (col: string, document: Object, ) => {
  const db = useFirestore();
  const colRef = collection(db, col);
  const docRef = await addDoc(colRef, document);
  return docRef;
};

export const updatedatabase = async (col: string, id: string, document: any) => {

  const db = useFirestore();

  const docRef = doc(db, col, id);

  return await updateDoc(docRef, document).then(()=>{
    return 'ok'
  }).catch((error)=>{
    return 'gagal'
  })


};

export const tarikdetaildatabase = async (col: string, id : string) =>{
  const db = useFirestore();
   return useDocument(doc(db, col, id))

}

export const hapusdatabase = async (col: string, id: string) => {
  const db = useFirestore();
  const docRef = doc(db, col, id);
  return await deleteDoc(docRef);
};