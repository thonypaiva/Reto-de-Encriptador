/*e - enter
o - ober
i - imes
a - ai
u -ufat*/




const img = document.querySelector(".imagen_derecha");
const textRigth = document.querySelector(".texto_derecho");
const textTwo = document.querySelector(".text_dos");
const copy = document.querySelector(".copiar");
const textImput = document.querySelector('.text_input');
const btnEncriptar = document.querySelector('.encriptar');
const btnDesencriptar = document.querySelector('.desencriptar');
const divDerecho = document.querySelector('.right')



function encriptar(){
   

    btnEncriptar.addEventListener('click', () => {

        textImput.value = textImput.value.toLowerCase();
        
        let textEncriptado = textImput.value.replace(/e/img, "enter");      
        textEncriptado     = textEncriptado.replace(/o/img, "ober");            
        textEncriptado     = textEncriptado.replace(/i/img, "imes")
        textEncriptado    = textEncriptado.replace(/a/img, "ai");
        textEncriptado    = textEncriptado.replace(/u/img, "ufat");

        img.style.display ="none";
        textRigth.style.display ="none";       
        textTwo.textContent = textEncriptado;

        if(textTwo.value.trim() !== ''){
            textTwo.style.display= 'block';
        } else{
            textTwo.style.display= 'none';
        }

        if(textTwo.value !== ""){
            copy.style.display= 'block';
        }else{
            copy.style.display= 'none';
        }
    })
    

   
}

encriptar()

function desencriptar(){

    textImput.value.toLowerCase()   
    btnDesencriptar.addEventListener('click', () => {

    let  txtCifrado = textImput.value.replace(/enter/img,"e");
         txtCifrado = txtCifrado.replace(/ober/img,"o");
         txtCifrado = txtCifrado.replace(/imes/img,"i");
         txtCifrado = txtCifrado.replace(/ai/img,"a");
        txtCifrado = txtCifrado.replace(/ufat/img,"u");

        img.style.display ="none";
        textRigth.style.display ="none";

        textTwo.textContent =txtCifrado;

    })


}

desencriptar()

function copiar(){   

    copy.addEventListener('click', () =>{

        textTwo.select();
        document.execCommand("copy");
        
        const textoCopiado = "!Texto Copiado¡";
        const avisoCopiado = document.createElement('span')
        avisoCopiado.textContent = textoCopiado
        divDerecho.appendChild(avisoCopiado);
        setTimeout(()=>{
          avisoCopiado.style.display  = 'none';
        },2000)
       
        
      
    });   
    
    
   
}

copiar()
