const idade = 70;
const possuiPatologia = false;
const altura = 180;
const estudante = false;

    if(idade >= 18 && idade <= 65 && possuiPatologia === false && altura >= 150 && estudante === false){
        console.log("20 reais");
    }else if(idade > 12 && idade < 18  && possuiPatologia === false && altura >= 150 && estudante === false){
        console.log("10 reais");
    }else{
        console.log("ACESSO NEGADO");
    }
