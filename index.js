// Usando const para permitir que o valor das variáveis sejam mudados
const nameHero = "BartMoon";
const XP = 10000; 

// Variável que armazenará o nível do herói
let levelHero;

// Estrutura de decisão para determinar o nível do herói conforme a quantidade de XPs
if (XP < 1000) {
    levelHero = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
    levelHero = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
    levelHero = "Prata";
} else if (XP >= 5001 && XP <= 7000) {
    levelHero = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
    levelHero = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
    levelHero = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
    levelHero = "Imortal";
} else if (XP >= 10001) {
    levelHero = "Radiante";
}

// Exibindo a mensagem final
console.log("O Herói de nome " + nameHero  + " está no nível " + levelHero);
