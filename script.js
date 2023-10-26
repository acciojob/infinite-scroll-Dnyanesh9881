//your code here!
let ol=document.getElementById("infi-list");
let j=1;
function addItems() {
	for(let i=0;i<10;i++){
	let li=document.createElement("li");
	li.innerText=`Item ${j}`;
	ol.appendChild(li);
}
}

function addItems() {

	for (let i = 0; i < 10; i++) {
	let li=document.createElement("li");
	li.innerText=`Item ${j++}`;
	ol.appendChild(li);
	}
}
addItems();
function onScrollAdding(params) {
	// let scrollheight=ol.scrollHeight;
	// let containerH=ol.clientHeight;
	
	let scrolledHeight=ol.scrollTop;
	console.log(scrolledHeight);
	if(scrolledHeight>=80){
		addItems();
	}
}

ol.addEventListener("scroll", onScrollAdding);

