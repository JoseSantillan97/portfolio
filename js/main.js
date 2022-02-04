const toggleLight = () =>{
	const skills = document.getElementById("skills");
	if(skills){
		skills.classList.toggle("light-active")
	}
}
skills.addEventListener("click", toggleLight);

const addMovement = () => {
	const list1 = document.getElementById("skillsList1");
	const list2 = document.getElementById("skillsList2");
	const getChildrens = [...list1.children,...list2.children]
	const randomElement = getChildrens[Math.floor(Math.random() * getChildrens.length)];
	if(!randomElement.classList.contains('activeSwinging')){
		randomElement.classList.add('activeSwinging')
		setTimeout(function(){
			randomElement.classList.remove('activeSwinging')
		}, 1500)
	}
}

toggleLight(); 
setInterval(addMovement, 1500);