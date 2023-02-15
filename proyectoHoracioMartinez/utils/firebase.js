// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { getDropdownMenuPlacement } from "react-bootstrap/esm/DropdownMenu";
import { async } from "@firebase/util";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA2oeh7FIbJibFFw0rhJuF_pyMQE8HzKUA",
	authDomain: "cursocoderreacthoraciomtz.firebaseapp.com",
	projectId: "cursocoderreacthoraciomtz",
	storageBucket: "cursocoderreacthoraciomtz.appspot.com",
	messagingSenderId: "332309191717",
	appId: "1:332309191717:web:7eec77924eab123b2bb3cc",
	measurementId: "G-WEK55T1ZME",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

//export function gFetch(id) {
export const gFetch = async (id) => {
	const productsCollectionRef = collection(db, "productos");
	//console.log(getDocs(productsCollectionRef));
	// getDocs(productsCollectionRef).then((snapshot) => {
	// 	//console.log(snapshot.docs[0].data());
	// 	const docsData = snapshot.docs.map((doc) => doc.data());
	// 	console.log(docsData);
	const snapshot = await getDocs(productsCollectionRef);

	//const docsData = id ? snapshot.docs[id].data() : snapshot.docs.map((doc) => doc.data());
	const docsData = snapshot.docs.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});
	//console.log(docsData[id]);
	return docsData;
	// let objetoRetornado = id ? docsData[id] : docsData;
	// console.log(objetoRetornado);
	//return docsData[id];
};

export const gFetchById = async (id) => {
	const productsCollectionRef = collection(db, "productos");
	const prodRef = doc(productsCollectionRef, id);
	const snapshot = await getDoc(prodRef);
	console.log(snapshot.data());
	return { ...snapshot.data(), id: snapshot.id };
};

export const gFetchByCategory = async (category) => {
	const productsCollectionRef = collection(db, "productos");
	const q = query(productsCollectionRef, where("categoria", "==", category));
	const snapshot = await getDocs(q);
	//console.log(snapshot.data());
	const docsData = snapshot.docs.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});
	return docsData;
};

// return new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(id ? productos.find((prod) => prod.id == id) : productos);
// 	}, 1000);
// });
//};
