var texts = document.querySelector('input');
var papel = document.querySelector('#papel');
//const lista = document.querySelectorAll(".lista");

function inserts(elements) {
	tempDoc = document.createDocumentFragment(); //create siya temporary document or <div>/array
	tagElem = document.createElement('ul'); //create siyag element (ul)
	tagElem.innerHTML = elements; //unod daw sa imong parameter(elements) sa function
	tempDoc.appendChild(tagElem.firstChild); //isulod sa imong tempDoc ang (ul) nga element nga "create element(tagElem)"
	return tempDoc; //return niya ang unod sa imong tempDoc containing element na (ul)
}

//event listener para sa textfield. para i-insert niya ang content sa list.
texts.addEventListener('keypress', function(event) {
	console.log(event);
	textCons = this.value;
	if (event.keyCode === 13) {
		if (textCons == false) {
			alert('Doing nothing is not reproductive');
			textCons = '';
			event.preventDefault(); //since naa default na action ang event na enter, tawagon siya para ma force ang program nga i run imo code.
			//                      ang purpose ani is para i-disable niya ang default action sa isa ka event.
			//                      let say textfield, naa siya default action na pag mag press kag enter, naa siya dafault action.
			//                      tawagon nimo ni sya para dili mo-occour and default action.
		} else {
			event.preventDefault(); // Ensure it is only this code that runs
			el =
				"<ul class='sawal'><li><span class='lista'>" +
				textCons +
				"</span> <img class='basura' src='file:///C:/Users/Jaryl/Desktop/html/Bootcamp/Javascript/ToDoList/img/trash.png'></li></ul>";
			fragment = inserts(el);
			papel.insertBefore(fragment, papel.childNodes[0]);
			texts.value = '';
		}
	}
});

//EVENT DELEGATION - way para ma manipulate nimo ang html elements wheter static or dynamic.
//pero sa kani na case kay dynamic. pulos? manipulte nimo ang children nga element sa sulod sa parent element.
//since dynamic man ang pag insert ug elements, d nimo siya ma manipulate dayon kay wala siya na exist sa original na HTML na file.
//event targeting ang style sa kani nga method. (developer tools imong friend dire).

papel.addEventListener('click', function(event) {
	//g himo niyag event on click ang parent sa listahan which is ang <div class="papel">
	//                                               purpose anang event na paramaenter is calling mass event or tawagon ang properties
	console.log(event); //i check ang event properties para ma-manipulate nimo ang g insert nimo na elelement.
	if (event.target.className === 'lista') {
		//check niya ang property then manipulate.
		event.target.classList.add('yehey'); //method/logic sa imong i manipulate na property.
	} else {
		event.target.classList.remove('yehey');
	}

	if (event.target.className === 'basura' || event.target.className === 'basura katchara') {
		//check niya ang property then manipulate.
		event.target.parentElement.parentElement.remove();
	} else if (event.target.className === 'sawal') {
		tagElem = document.createElement('img');
		tagElem.innerHTML;
		event.target.children[0].children[1].classList.toggle('katchara');
	}
});

//AYAW NI I DELETE KAYY NAA TANAN TIKNIK ABOUT DOCUMENTFRAGMENT!!----------------------------------------------------

// button.addEventListener("click",function(){

//     el = '<ul><li><span>What to</span> <a href="#"><img src="file:///C:/Users/Jaryl/Desktop/html/Bootcamp/Javascript/ToDoList/img/trash.png"></a></li></ul>'
//     fragment = inserts(el);
//     papel.insertBefore(fragment, papel.childNodes[0]);
// });

//creating temporary document para sa paspas nga pa insert sa new elements sa parent nga element
// var el = '<ul><li><span>What to</span> <a href="#"><img src="file:///C:/Users/Jaryl/Desktop/html/Bootcamp/Javascript/ToDoList/img/trash.png"></a></li></ul>'

//     tempDoc = document.createDocumentFragment(); //create siya temporary document
//     tagElem = document.createElement("ul"); //create siyag element (ul)
//     tagElem.textContent = el; //unod daw sa imong parameter(elements)

//     //SABTA SA NA DONG!
//     while(tagElem.firstChild){//purpose niya is pag daghan node/ietms ang imo object/array, i loop niya tanan items sa imo node or array.
//         tempDoc.appendChild(tagElem.firstChild);
//     };
//     console.log(tempDoc);
