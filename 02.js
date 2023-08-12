const jogada1 = "papel"
const jogada2 = "pedra"

    if(( jogada1 === "papel" && jogada2 === "tesoura") || ( jogada2 === "papel" && jogada1 === "tesoura")){          
        console.log("tesoura");
    }else if(( jogada1 === "tesoura" && jogada2 === "pedra") || ( jogada2 === "tesoura" && jogada1 === "pedra")){          
        console.log("pedra");
    }else if(( jogada1 === "pedra" && jogada2 === "papel") || ( jogada2 === "pedra" && jogada1 === "papel")){          
        console.log("papel");
    }else{
        console.log("empate");
    }