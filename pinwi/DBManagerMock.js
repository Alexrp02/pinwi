
/*
IMPORTANTE

PARA QUE FUNCIONE DBMANAGER NECESITA:

·Ser llamado como un módulo (type = "module")
·El método en el que se llame debe ser async(esto es necesario para permitir el await)
·llamar a los métodos async de esta clase con await(sino te dará una promesa y solo tu y dios podrás entenderlo xd)

*/

class DBManager {
	database = new Map ();
	objetos = new Map() ;
	static BD;
	/**
	 * Es el método inicial de la BD. Sirve para inicializarla, hace falta llamarlo antes de hacer cualquier tipo de operación.
	 * 
	 * Ejemplo de uso:
	 * <script type="module"> //Ejemplo de integración de la bbdd con codigo usado para probar la bbdd
		import {DBManager} from "./DBManager.js";
		const db = new DBManager();
		db.init();
		//db.registerUser("diablo", "mami");
		//db.loginUser("diablo", "mami");
		//console.log(await db.loginUser("diablo", "mami"));
		//console.log(await db.getExp("diablo"));
		//console.log(await db.getInventory("diablo"));
		//console.log(await db.getItemsEquipped("diablo"));
		console.log(await db.getCoins("diablo"));
	</script>
	 * 
	 */

	async init() {
		this.objetos.set('gorro', {
			Price:2
		})
		this.objetos.set('burger', {
			EXP: 7,
			Price: 3,
			
		})
		this.database.set('Prueba', {
			'Password': 'Prueba',
			'petName' : 'PruebaPet',
			'Buy': [],
			'Equipped' : {
				'Body':'b2',
				'Down':'b3',
				'Face':'b4',
				'Head':'b1'
			},
			'Exp':0,
			'coins':0,
			'user':'Prueba',
			'UltimoJuego':'00/00/0000'
		})
	}
	/** El parámetro es el nombre de usuario, se asume que es correcto.
 * Igualmente en caso de error devuelve -1
 * En caso de ser correcto devuelve el valor de las monedas del usuario.
 * 
 * Ejemplo de uso:
 * var monedas = await getCoins("usuario1");
	 */
	async getCoins(usuario) {
		return this.database.get(usuario).coins;
	}

	/** El parámetro es el nombre de usuario y el dinero actualizado, se asume que es correcto.
 * En caso de error pues hay error
 * En caso de ser correcto actualiza el valor de las monedas del usuario en la base de datos
 * 
 * Ejemplo de uso:
 * await getCoins("usuario1", money);
	 */
	async setCoins(usuario, money) {
		this.database.get(usuario).coins = money

		return 1
	}

	/**
	 * Registra el usuario con los datos proporcionados
	 * Te devuelve un valor numérico para asegurarte que ha sido correcto
	 * 0 es error
	 * 1 es correcto
	 */
	registerUser(usuario, contra, petname) {
		
		this.database.set(usuario, {
			'Password': contra,
			'petName' : petname,
			'Buy': [],
			'Equipped' : {
				'Body':'b2',
				'Down':'b3',
				'Face':'b4',
				'Head':'b1'
			},
			'Exp':0,
			'coins':0,
			'user':usuario,
			'UltimoJuego':'00/00/0000'
		})

		return 1;
	};
	/**
	 * El método loginUser necesita 2 parametros, el usuario y la contraseña,
	 * este comprueba que esté registrado, en caso de error de las credenciales
	 * te devuelve el valor numérico 0, y en caso del usuario no existir te devuelve -1.
	 * En el caso de haber acertado te devuelve un objeto con los parametros:
	 * user, Password, EXP, coins y equipped
	 * 
	 * por ejemplo voy a usar coins, pero con todos es igual. Se llama tal que así:
	 * var objeto = await loginUser(usuario, contra);
	 * objeto.coin;
	 * ó también se puede llamar así:
	 * objeto['coin'];
	 * 
	 * igual con el resto de parametros 
	 */
	async loginUser(usuario, contra) {
		
		if(!this.database.has(usuario)){
			return -1
		}else{
			if(this.database.get(usuario).Password !== contra){
				return 0;
			}else{
				return 1;
			}
		}
	}


	/** El parámetro es el nombre de usuario, se asume que es correcto.
	 * Igualmente en caso de error devuelve -1
	 * En caso de ser correcto devuelve el integer de la experiencia.
	 * 
	 * Ejemplo de uso:
	 * var experiencia = await getExp("usuario1");
	 */
	async getExp(usuario) {
		
		return this.database.get(usuario).Exp;
	}

	/** El parámetro es el nombre de usuario y la exp actualizada, se asume que es correcto.
* En caso de error pues hay error
* En caso de ser correcto actualiza el valor de la exp del usuario en la base de datos
* 
* Ejemplo de uso:
* await getCoins("usuario1", exp);
 */
	async setExp(usuario, experiencia) {
		this.database.get(usuario).Exp = experiencia;
		return 1
	}

	/** El parámetro es el nombre de usuario, se asume que es correcto.
 * Igualmente en caso de error devuelve -1
 * En caso de ser correcto devuelve un array de Strings con los nombres de los objetos equipados.
 * 
 * Ejemplo de uso:
 * var equipados = await getItemsEquipped("usuario1");
	 */
	async getItemsEquipped(usuario) {
		
		return this.database.get(usuario).Equipped;
	}

	/** El parámetro es el nombre del item, 
	* en caso de error devuelve -1
	* En caso de ser correcto devuelve el valor numérico del precio.
	* 
	* Ejemplo de uso:
	* var precio = await getItemPrice("ternera");
		*/
	async getItemPrice(nombreItem) {
		return this.objetos.get(nombreItem).Price;
	}

	/** El parámetro es el nombre del item, 
* en caso de error devuelve -1
* En caso de ser correcto devuelve el valor numérico de la experiencia que da.
* 
* Ejemplo de uso:
* var exp = await getItemExp("ternera");
	*/
	async getItemExp(nombreItem) {
		/*const docRef = doc(DBManager.BD, "shop", nombreItem);
		const docSnap = await getDoc(docRef);
		let resultao = -1;
		if (docSnap.exists()) {
			resultao = await docSnap.get("XP");
		}
		return resultao;*/
		return this.objetos.get(nombreItem).EXP;
	}


	/** Requiere de un parámetro, nombreItem, en el caso de no ser correcto devuelve -1
	 * 
	 * Cuando es correcto devuelve un objeto con todos los parámetros del Item especificado, 
	 * cambia su estructura dependiendo de si es cosmético o no
	 * es la propiedad skin, en el caso de true es cosmético
	 * 
	 * En caso de ser cosmético sus propiedades son:
	 * Icon, ImageIG, LvlUnlocked, Name, Price, XP y skin
	 * 
	 * En el caso de ser comestible sus propiedades son:
	 * Icon, LvlUnlocked, Name, Price, XP, skin
	 * 
	 * Para llamar a las propiedades por ejemplo voy a usar skin, pero con todos es igual. Se llama tal que así:
	 * var objeto = await getItem(nombreItem);
	 * objeto.skin;
	 * ó también se puede llamar así:
	 * objeto['skin'];
	 * 
	 * igual con el resto de parametros 
	 * 
	 */
	async getItem(nombreItem) {
		const docRef = doc(DBManager.BD, "shop", nombreItem);
		const docSnap = await getDoc(docRef);
		let resultao = -1;
		if (docSnap.exists()) {
			let cosmetico = await docSnap.get("skin");
			if (cosmetico) {
				resultao =
				{
					Icon: await docSnap.get("Icon"),
					ImageIG: await docSnap.get("ImageIG"),
					LvlUnlocked: await docSnap.get("LvlUnlocked"),
					Name: await docSnap.get("Name"),
					Price: await docSnap.get("Price"),
					XP: await docSnap.get("XP"),
					skin: await docSnap.get("skin")
				}
			} else {
				resultao =
				{
					Icon: await docSnap.get("Icon"),
					LvlUnlocked: await docSnap.get("LvlUnlocked"),
					Name: await docSnap.get("Name"),
					Price: await docSnap.get("Price"),
					XP: await docSnap.get("XP"),
					skin: await docSnap.get("skin")
				}
			}
		}
		return resultao;
	}

	/** No requiere de ningún parametro, simplemente devuelve un array con los nombres de todos los objetos que existen en el juego.
	 * 
	 * No hace ninguna comprobación porque la única manera en la que esto estaría vacío sería si la BD se corrompiese.
	 */
	async getShop() {
		const CollectionSnapShot = await getDocs(collection(DBManager.BD, "shop"));
		let resultao = [];
		CollectionSnapShot.forEach((doc) => {
			//console.log(doc.id, " => ", doc.data());
			resultao.push(doc.id);
		});
		return resultao;

	}


	/** El parámetro es el nombre del usuario, 
* en caso de error devuelve -1
* En caso de ser correcto devuelve euna lista de con los nombres de los objetos comprados.
* 
* Ejemplo de uso:
* var bought = await getBuy("pepe");
	*/
	async getBuy(usuario) {
		
		return this.database.get(usuario).Buy;
	}

	/** El parámetro es el nombre del usuario y una lista con el nombre de los objetos comprados, 
* en caso de error devuelve un error
* En caso de ser correcto actualiza la lista de objetos comprados en la base de datos.
* 
* Ejemplo de uso:
* await setBuy("pepe", bought);
	*/
	async setBuy(usuario, buy) {
		this.database.get(usuario).Buy = buy
	}


	/** El parámetro es el nombre del usuario y una lista con el nombre de los objetos equipados, 
* en caso de error devuelve un error
* En caso de ser correcto actualiza el map de objetos equipados en la base de datos.
* 
* Ejemplo de uso:
* await setEquip("pepe", equipped);
	*/
	async setEquip(usuario, equip) {
		this.database.get(usuario).Equipped = equip
	}
	/** El parámetro es el nombre del usuario, 
* en caso de error devuelve -1
* En caso de ser correcto devuelve un map con el elemento equipado en cada psoición.
* 
* Ejemplo de uso:
* var equipped = await getEquipped("pepe");
	*/
	async getEquipped(usuario) {
		return this.database.get(usuario).Equipped
	}
	/** El parámetro es el nombre de usuario, se asume que es correcto.
 * Igualmente en caso de error devuelve -1
 * En caso de ser correcto devuelve el map de los objetos que posee el usuario con un booleano que indica si lo tiene equipado.
 * 
 * Ejemplo de uso:
 * var experiencia = await getExp("usuario1");
	 */
	async getInventory(usuario) {
		return BD.getEquipped(usuario);
	}

	/*
	Esta función devuelve el nombre de la mascota del usuario pasado como parámetro.
	Se asume que todos los usuarios tienen un nombre de mascota puesto que en el registro 
	hace falta especificar el nombre de la mascota si no, no deja registrarse.
	Si por algún casual el usuario no tiene nombre de mascota, este devolverá undefined.
	*/
	async getPetName(usuario) {
		
		return this.database.get(usuario).petName
	}


	async setPetName(usuario, petname) {
		this.database.get(usuario).petName = petname
	}



	async setFecha(usuario, fecha) {
		
		this.database.get(usuario).UltimoJuego = fecha
	}


	async getFecha(usuario) {
		return this.database.get(usuario).UltimoJuego
	}

}
let db = new DBManager ;
module.exports = db 
//Descomentar para pruebas