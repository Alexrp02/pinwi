import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";


export class DBManager
{
	
    init()
    {
		
        
	// Import the functions you need from the SDKs you need
		// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries
  
	// Your web app's Firebase configuration
	const firebaseConfig = {
	  apiKey: "AIzaSyAcI2DuAbi1MC5YtgIfYQrbs1nGwMJlx2c",
	  authDomain: "pinwi-softix-uma.firebaseapp.com",
	  projectId: "pinwi-softix-uma",
	  storageBucket: "pinwi-softix-uma.appspot.com",
	  messagingSenderId: "636601225644",
	  appId: "1:636601225644:web:f21b242527e7598ec1aa09"
	};
  
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);

	const db = getFirestore(app);

	console.log("susmu");

	async function getCities(db) {
  const citiesCol = collection(db, 'inventory');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
	console.log(getCities(db));
  
    }
}