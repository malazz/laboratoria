const bienvenida= document.getElementById('bienvenida');
const seleccion= document.getElementById('seleccion');
const opc1Pre1= document.getElementById('opc1Pre1');
const opc1Pre2= document.getElementById('opc1Pre2');
const opc1Pre3= document.getElementById('opc1Pre3');
const opc2Pre1= document.getElementById('opc2Pre1');
const opc2Pre2= document.getElementById('opc2Pre2');
const opc2Pre3= document.getElementById('opc2Pre3');
const resultado= document.getElementById('resultado');
seleccion.style.display ='none';
opc1Pre1.style.display='none';
opc1Pre2.style.display='none';
opc1Pre3.style.display='none';
opc2Pre1.style.display='none';
opc2Pre2.style.display='none';
opc2Pre3.style.display='none';
resultado.style.display='none';

let suma = 0;
let arrarResp =[];


function siguiente(){
    const name = document.getElementById('nombre').value;
	const parrafo = document.getElementById('saludo');
    parrafo.innerHTML= name;
	seleccion.style.display='block';
	bienvenida.style.display='none';
	//opc1Pre1.style.display='none';
	//opc1Pre2.style.display='none';
	//opc1Pre3.style.display='none';
	//resultado.style.display='none';
    console.log(name);

}

console.log(suma);
function respuesta11_1(){
	const resp1 = document.getElementById('P1O1');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc1p1();
}

function respuesta11_2(){
	const resp1 = document.getElementById('P1O2');
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);	
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc1p1();
}

function respuesta11_3(){
	const resp1 = document.getElementById('P1O3');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc1p1();
}


//preg2

function respuesta12_1(){
	const resp1 = document.getElementById('P2O1');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc1p2();
}

function respuesta12_2(){
	const resp1 = document.getElementById('P2O2');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc1p2();
}

function respuesta12_3(){
	const resp1 = document.getElementById('P2O3');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc1p2();
}

//preg3

function respuesta13_1(){
	const resp1 = document.getElementById('P3O1');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc1p3();
}

function respuesta13_2(){
	const resp1 = document.getElementById('P3O2');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc1p3();
}

function respuesta13_3(){
	const resp1 = document.getElementById('P3O3');
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);	
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc1p3();
}

//Respuestas opcion2 pregunta1
function respuesta1_o2p1(){
	const resp1 = document.getElementById('R1P1O2');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc2p1();
}
function respuesta2_o2p1(){
	const resp1 = document.getElementById('R2P1O2');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc2p1();
}
	function respuesta3_o2p1(){
	const resp1 = document.getElementById('R3P1O2');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc2p1();
}
//Respuestas opcion2 pregunta2
function respuesta1_o2p2(){
	const resp1 = document.getElementById('R1P2O2');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc2p2();
}
function respuesta2_o2p2(){
	const resp1 = document.getElementById('R2P2O2');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc2p2();
}
function respuesta3_o2p2(){
	const resp1 = document.getElementById('R3P2O2');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc2p2();
}
//Respuestas opcion2 pregunta3
function respuesta1_o2p3(){
	const resp1 = document.getElementById('R1P3O2');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc2p3();
}
function respuesta2_o2p3(){
	const resp1 = document.getElementById('R2P3O2');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc2p3();
}
function respuesta3_o2p3(){
	const resp1 = document.getElementById('R3P3O2');	
	const textresp = resp1.innerHTML;	
	arrarResp.push(textresp);
	console.log(arrarResp);
	let valor = parseInt(resp1.getAttribute("data-respuesta"));	
	suma = suma + valor;
	console.log(suma);	
	opc2p3();
} 

function opc1() {
	const FEP1 =document.getElementById('FEP1');
	opc1Pre1.style.display='block';
	//bienvenida.style.display='none';
	seleccion.style.display='none';
	//opc1Pre2.style.display='none';
	//opc1Pre3.style.display='none';
	resultado.style.display='none';
}

function opc2() {
	const FEP1 =document.getElementById('FEP1');
	opc2Pre1.style.display='block';
	//bienvenida.style.display='none';
	seleccion.style.display='none';
	//opc2Pre2.style.display='none';
	//opc2Pre3.style.display='none';
	resultado.style.display='none';
}

function opc1p1() {
	const FEP1 =document.getElementById('FEP1');
	opc1Pre2.style.display='block';
	//bienvenida.style.display='none';
	//seleccion.style.display='none';
	opc1Pre1.style.display='none';
	//opc1Pre3.style.display='none';
	//resultado.style.display='none';

}

function opc1p2() {
	const FEP1 =document.getElementById('FEP1');
	opc1Pre3.style.display='block';
	//bienvenida.style.display='none';
	//seleccion.style.display='none';
	//opc1Pre1.style.display='none';
	opc1Pre2.style.display='none';
	//resultado.style.display='none';
}

function opc1p3() {
	const parrafo1 = document.getElementById('acumulado');
	parrafo1.innerHTML= suma;
	
	//for (i = 0; i < arrarResp.length; i++){
	//	console.log(arrarResp[i]);
	//}
	
	console.log(arrarResp[0]);

	const pxa1 = document.getElementById('r');
	console.log(pxa1);
	pxa1.innerHTML= arrarResp[0];

	const pxa2 = document.getElementById('rr');
	pxa2.innerHTML= arrarResp[1];

	const pxa3 = document.getElementById('rrr');
	pxa3.innerHTML= arrarResp[2];


	const FEP1 =document.getElementById('FEP1');
	resultado.style.display='block';
	//bienvenida.style.display='none';
	//seleccion.style.display='none';
	//opc1Pre1.style.display='none';
	//opc1Pre2.style.display='none';
	opc1Pre3.style.display='none';
	arrarResp =[];
	suma = 0;

}

function opc2p1() {
	const FEP1 =document.getElementById('FEP1');
	opc2Pre2.style.display='block';
	//bienvenida.style.display='none';
	//seleccion.style.display='none';
	opc2Pre1.style.display='none';
	//opc2Pre3.style.display='none';
	//resultado.style.display='none';
}

function opc2p2() {
	const FEP1 =document.getElementById('FEP1');
	opc2Pre3.style.display='block';
	//bienvenida.style.display='none';
	//seleccion.style.display='none';
	//opc2Pre1.style.display='none';
	opc2Pre2.style.display='none';
	//resultado.style.display='none';
}


function opc2p3() {
	const parrafo1 = document.getElementById('acumulado');
	parrafo1.innerHTML= suma;
	
	//for (i = 0; i < arrarResp.length; i++){
	//	console.log(arrarResp[i]);
	//}
	
	console.log(arrarResp[0]);

	const pxa1 = document.getElementById('r');
	console.log(pxa1);
	pxa1.innerHTML= arrarResp[0];
	

	const pxa2 = document.getElementById('rr');
	pxa2.innerHTML= arrarResp[1];

	const pxa3 = document.getElementById('rrr');
	pxa3.innerHTML= arrarResp[2];


	const FEP1 =document.getElementById('FEP1');
	resultado.style.display='block';
	//bienvenida.style.display='none';
	//seleccion.style.display='none';
	//opc1Pre1.style.display='none';
	//opc1Pre2.style.display='none';
	opc2Pre3.style.display='none';
	arrarResp =[];
	suma = 0;

}


