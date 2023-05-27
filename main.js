//import { Login } from "./login.js";
import { Cxmsg } from "./cxmsg.js";

//Login.login("123","321");

//const callback_ok=()=>{

	//alert("ok");
}

const callback_naook=()=>{
		const config={
		cor:"#800",
		tipo:"ok",
		textos:null,
		comando_sn:()=>{},
		
	}
	Cxmsg.mostrar(config,"Erro","Login não efetuado! Usuario ou senha incorretos.");
	//alert("nao ok");
}
//Login.login(null,null);
//Login.login(callback_ok,callback_naook);

const configlogin={
cor:"048",
img:"logo.png", 
endpoint:"https://login.marcelosuarez9.repl.co"
}

//Login.login(callback_ok,callback_naook,configlogin);
Login.login(null,callback_naook,configlogin);

