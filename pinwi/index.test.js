import{DBManager} from "./DBManager.js";
import{index} from "./index.js";
test('El nombre de login tiene que ser igual que el nombre de register', async()=>{
    expect(loginUsername.value).toBe(signupUsername.value);
});

test('La contraseña de login tiene que ser igual que la contraseña de register', async()=>{
    expect(loginPassword.value).toBe(signupPassword.value);
});

test('El nombre de la mascota no puede estar vacio', async()=>{  //El nombre de la mascota es igual
    expect(petName).not.toBeUndefined();                         //al nombre del usuario si deja el campo del nombre de la mascota vacio
});                                                              //o igual al nombre que elija el usuario


