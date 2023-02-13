console.log("hello!");

const sectionColor = document.querySelector ("sectionColor");
const containerColor = document.getElementById ("containerColor");
const next = document.getElementById ("next");

const colorRandom = ["red", "green", "blue", "alpha", "black", "yellow", "brown", "aqua", "orange", "purple", "pink", "gold"];



function election_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}


next.addEventListener ("click", () => {
containerColor.style.backgroundColor = election_random(colorRandom);
    console.log("Click!")
});


console.log("bye!");