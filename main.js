function apagar (){
	const imagem = document.querySelector(".digitacao__leitura__imagem");
	const primeira_advertencia = document.querySelector(".digitacao__leitura__advertencias__primeira__advertencia");
	const segunda_advertencia = document.querySelector(".digitacao__leitura__advertencias__segunda__advertencia");
	imagem.remove();
	primeira_advertencia.remove();
	segunda_advertencia.remove();
}

function copiarTexto(){
        var r = document.createRange();
        r.selectNode(document.querySelector(".digitacao__leitura__copiar"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        try {
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            alert('Texto copiado com sucesso: ' + r);
        } catch (err) {
            alert('Não foi possível copiar!');
        }
    }


function botaoCopiarTexto(){
	const digitacao_leitura_botao = document.querySelector(".digitacao__leitura__botao");
	const botao = document.createElement("button");
	botao.setAttribute("class", "digitacao__leitura__botao__copiar");
	botao.setAttribute("onclick","copiarTexto(); window.location.reload(true)");	
	botao.innerHTML = 'Copiar';
	digitacao_leitura_botao.style.margin = 0;
	digitacao_leitura_botao.style.alignItems = "center";
	digitacao_leitura_botao.style.justifyContent = "center";
	digitacao_leitura_botao.style.width = "22rem";
	digitacao_leitura_botao.style.backgroundColor = "#FFFFFF";
	digitacao_leitura_botao.appendChild(botao);
}

function substituir(vogal,codigo){
	const digitacao = document.querySelector(".digitacao__conteudo__escrita");
	if(digitacao.value.indexOf(vogal) != -1){
		return codigo;		
	}
	
}

function criptografar(){	
	const digitacao = document.querySelector(".digitacao__conteudo__escrita");
	const leitura = document.querySelector(".digitacao__leitura__copiar");
	const digitacao_leitura = document.querySelector(".digitacao__leitura");
	let texto_criptografado = "";
	
	for(i=0; i<digitacao.value.length; i++){		
		
		if(digitacao.value.slice(i,i+1) == 'e'){
			texto_criptografado+=substituir('e',"enter");
		} else if(digitacao.value.slice(i,i+1) == 'i'){
			texto_criptografado+=substituir('i',"imes");
		} else if(digitacao.value.slice(i,i+1) == 'a'){
			texto_criptografado+=substituir('a',"ai");
		} else if(digitacao.value.slice(i,i+1) == 'o'){
			texto_criptografado+=substituir('o',"ober");
		} else if(digitacao.value.slice(i,i+1) == 'u'){
			texto_criptografado+=substituir('u',"ufat");
		} else{
			texto_criptografado+=digitacao.value.slice(i, i+1);
		}		
	}	
	apagar();
	digitacao_leitura.style.justifyContent = "space-between";	
	leitura.innerText = texto_criptografado;	
	botaoCopiarTexto();
	
}

function descriptografar(){	
	const digitacao = document.querySelector(".digitacao__conteudo__escrita");
	const leitura = document.querySelector(".digitacao__leitura__copiar");
	const digitacao_leitura = document.querySelector(".digitacao__leitura");	
	let texto_descriptografado = digitacao.value.slice(0);
	
	for(i=0; i<digitacao.value.length; i++){		
		
		if(digitacao.value.slice(i,i+5) == "enter"){			
			texto_descriptografado=texto_descriptografado.replace("enter", 'e');
		} else if(digitacao.value.slice(i,i+4) == "imes"){			
			texto_descriptografado=texto_descriptografado.replace("imes", 'i');
		} else if(digitacao.value.slice(i,i+2) == "ai"){			
			texto_descriptografado=texto_descriptografado.replace("ai", 'a');
		} else if(digitacao.value.slice(i,i+4) == "ober"){			
			texto_descriptografado=texto_descriptografado.replace("ober", 'o');
		} else if(digitacao.value.slice(i,i+4) == "ufat"){			
			texto_descriptografado=texto_descriptografado.replace("ufat", 'u');
		} 
	}		
	apagar();
	digitacao_leitura.style.justifyContent = "space-between";	
	leitura.innerText = texto_descriptografado;	
	botaoCopiarTexto();
	
}


