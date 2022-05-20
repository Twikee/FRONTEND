'use strict';

const clearForm = (address) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//FUNÇÃO PARA PREENCHER FORMULÁRIO
const fillOutForm = (address) => {
    document.getElementById('endereco').value = address.logradouro;
    document.getElementById('bairro').value = address.bairro;
    document.getElementById('cidade').value = address.localidade;
    document.getElementById('estado').value = address.uf;
}


//FUNÇÃO PARA MUDAR OS CAMPOS CASO O CEP SEJA INVÁLIDO
const invalidCep = () => {
    document.getElementById('endereco').value = 'ERRO: CEP NÃO ENCONTRADO';
    document.getElementById('cep').style.color = 'red';
}

//VERIFICAÇÃO DA VALIDADE DO CEP
const isNumber = (n) => /^[0-9]+$/.test(n) ? true : false;
const validCep = (cep) => cep.length == 8 && isNumber(cep);


//UTILIZAÇÃO DA API
const pesquisarCep = async () => {
    clearForm();
    
    const cep = document.getElementById('cep').value;
    const BASE_URL = `http://viacep.com.br/ws/${cep}/json/`;
    
    if(validCep(cep)){
        //PRIMEIRA FORMA
        // fetch(BASE_URL)
        //     .then(response => response.json())
        //     .then();

        //SEGUNDA FORMA
        const responseData = await fetch(BASE_URL);
        const address = await responseData.json();

        if(address.hasOwnProperty('erro')){
            invalidCep();
        }else{
            fillOutForm(address);
        }
    }else{
        invalidCep();
    }

}

//AO SAIR DO CAMPO CEP AS OUTRAS FUNÇÕES FUNCIONAM
document.getElementById('cep').addEventListener('focusout', pesquisarCep);

