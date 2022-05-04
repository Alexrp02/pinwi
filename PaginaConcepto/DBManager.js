import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";


export class DBManager
{
	static BD;

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
	this.BD = db;

	console.log("susmu");

	/*async function getCities(db) {
  const citiesCol = collection(db, 'inventory');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
	console.log(getCities(db));*/
  
    }

	insert()
	{

	}

	getCoins()
	{

	}

	delete()
	{

	}

	registerUser(usuario,contra)
	{
		try{
			setDoc(doc(this.BD, "userInfo", usuario), 
			{
				Exp: 0,
				Password: contra,
				coins: 0,
				user: usuario,
				Equipped:[]
			});
		}catch(e)
		{
			console.error("Error adding document: ", e);
		}
	};

	getUser(usuario, contra)
	{

	}

	getExp()
	{

	}

	getInventory()
	{

	}

	getItem()
	{

	}

	getShop()
	{

	}

	getQuestion()
	{

	}

	getItemsEquipped()
	{

	}

}