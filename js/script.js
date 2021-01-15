const allStikers = document.getElementById('allStikers');
const add       = document.getElementById('add');
let inputValue  = document.getElementById('input');

if(window.localStorage.getItem("stikers") == undefined){
    let stikers = [];
    window.localStorage.setItem("stikers", JSON.stringify(stikers));
}

let stikersEX = window.localStorage.getItem("stikers");
let stikers = JSON.parse(stikersEX);

class newStiker{
	constructor(name){ 
		this.createItem(name);
	}
    createItem(name){
    	let stikerBox = document.createElement('div');
		stikerBox.classList.add('newNote');
		stikerBox.innerText = name;

    	let remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "x";
    	remove.addEventListener('click', () => this.remove(stikerBox, name));

    	allStikers.appendChild(stikerBox);            
        stikerBox.appendChild(remove);
    }
    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = stikers.indexOf(name);
        stikers.splice(index, 1);
        window.localStorage.setItem("stikers", JSON.stringify(stikers));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (event) => {
    console.log(event.which)
	if(event.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new newStiker(inputValue.value);
        stikers.push(inputValue.value);
        window.localStorage.setItem("stikers", JSON.stringify(stikers));
		inputValue.value = "";
	}
}

for (let i = 0 ; i < stikers.length ; i++){
    new newStiker(stikers[i]);
}