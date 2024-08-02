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

function criptografar(){	
	const digitacao = document.querySelector(".digitacao__conteudo__escrita");
	const leitura = document.querySelector(".digitacao__leitura__copiar");
	const digitacao_leitura = document.querySelector(".digitacao__leitura");
	let texto_criptografado = digitacao.value.toLowerCase();	
	let codificacao = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	
	for(i=0; i<codificacao.length; i++){		
		
		if(texto_criptografado.includes(codificacao[i][0])){
			texto_criptografado = texto_criptografado.replaceAll(codificacao[i][0], codificacao[i][1]);					
		}
	}	
	apagar();
	digitacao_leitura.style.justifyContent = "space-between";
    leitura.style.height = "90%";	
	leitura.innerText = texto_criptografado;	
	botaoCopiarTexto();
	
}

function descriptografar(){	
	const digitacao = document.querySelector(".digitacao__conteudo__escrita");
	const leitura = document.querySelector(".digitacao__leitura__copiar");
	const digitacao_leitura = document.querySelector(".digitacao__leitura");	
	let texto_descriptografado = digitacao.value.toLowerCase();	
	let codificacao = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	
	for(i=0; i<codificacao.length; i++){		
		
		if(texto_descriptografado.includes(codificacao[i][1])){
			texto_descriptografado = texto_descriptografado.replaceAll(codificacao[i][1], codificacao[i][0]);					
		}
	}	
	apagar();
	digitacao_leitura.style.justifyContent = "space-between";
	leitura.style.height = "90%";
	leitura.innerText = texto_descriptografado;	
	botaoCopiarTexto();
	
}

