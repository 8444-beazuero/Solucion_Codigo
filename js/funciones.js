
const form = document.getElementById("FormContacto");
const expresion = {
	vaemail:  /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i, // Correo Electronico.
	vaTelef: /^\d{10}$/
	
}

function emailValido() {
	var valor = document.getElementById("email").value;
	var vlce = false;
	if (!expresion.vaemail.test(valor)){
		alert('Direccion de Correo No valida');
		vlce = false;
	}
	else{
		console.log("Direccion de Correo Correcta");
		vlce = true;
	}
	return vlce;
}

function telefonoValido(){
	var valor = document.getElementById("telefono").value;
	var vltl = false;
	if(valor.length == 10 && !isNaN(valor)){
		vltl = true;
	}else{
		alert('Numero de telefono Incorrecto');
	}
	return vltl;
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

function validar(){
	if(emailValido() && telefonoValido()){
		alert("La informacion proporcionada es Correcta");
		return true;
	}else{
		return false;
	}
}

async function deshabilitar(){
	if(validar() == true){
		var btn = document.getElementById('btn');
		btn.disabled = true;
		btn.value = 'Enviando datos ..........';
		await delay(2);
		btn.form.submit();
	}

}

function showContent(){
	var elem = document.getElementById('FormConfidencial');
    var option = document.getElementById('chbEntrega2');
    if(option.checked){
        elem.style.display='block';
    }else{
        elem.style.display='none';
        }
    }
function comprobar(obj){
    if (obj.checked){
        document.getElementById('SubmitDireccion').disabled = false;
    }else{
        document.getElementById('SubmitDireccion').disabled = true;
    }
}
