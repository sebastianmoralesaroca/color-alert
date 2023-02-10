console.log("hello");

const sectionColor = document.querySelector ("sectionColor");
const containerColor = document.querySelector ("containerColor");
const btnColor = document.querySelector ("btnColor");

var fruts = ["manzana", "pera,", "naranja", "mango", "babana", "durazno"];
var vegetable = ["lechuga", "tomate", "veterraga", "zanahoria", "papas"]


const aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

function suma () {
     console.log(aleatorio(0, 7));
};

suma()





