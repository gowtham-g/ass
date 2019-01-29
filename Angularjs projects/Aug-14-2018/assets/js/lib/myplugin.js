(function(myWindow){
	if(typeof myWindow.CustomGrid=="function"){
		throw Error("Custom table defined");
	}
	/*<===== creating default values ===>*/
	var CustomGrid=function(pId,options){
		if(!(this instanceof CustomGrid)) {
			return new CustomGrid(pId, options);
		}
		this.domEl = document.getElementById(pId);
		if(!this.domEl) {
			throw new Error("dom not found");
		}
		this.options=options||{};
		if(typeof this.options.data == "undefined")  {
			this.options.data = [];
		}

		this._newTable();
	};
	/*<======= creating new list ========>*/


	CustomGrid.prototype._newTable = function(){

		
		
		/*marks grid*/
 /*		markGrid= document.getElementById("mark-grid");


*/		
var left=document.createElement('div');
        left.className="col-lg-9 col-x-sm-6";
rightDiv=document.createElement('div'); 
this.domEl.appendChild(left);
		right=document.createElement('div'); 
        this.domEl.appendChild(right);
        right.id="markGrid";
        right.class="col-lg-3 col-x-sm-6";
/*search input creation*/
var label=document.createElement("label");
		label.innerText="Search: ";
		left.appendChild(label);

		var search=document.createElement("input");
		search.type="search";
		search.setAttribute("class","form-controls");
		search.setAttribute("onkeyup","search(this.value)");


	  left.appendChild(search);

		namelabel=document.createElement("label");

		nameInput=document.createElement("input");
		nameInput.type="text";
		nameInput.setAttribute("class","nameInput");
		namelabel.innerText="Student Name: ";
		rightDiv.appendChild(namelabel);
		rightDiv.appendChild(nameInput);

		namelabel.style.display="block";
             inputLength = Object.keys(this.options.data[0]["Marks"]).length;
		for(i=0;i<inputLength ;i++){


			marklabel=document.createElement("label");

			markInput=document.createElement("input");
			markInput.type="text";
			markInput.className="inputMarks";
			c=i+1;
			marklabel.innerText="M"+c+": ";
			marklabel.style.display="block";
			markInput.style.display="block";
			rightDiv.appendChild(marklabel);

			rightDiv.appendChild(markInput);
		}

          right.appendChild(rightDiv);

		
		var leftDiv=document.createElement('div');
		var div1=document.createElement("div");
		div1.className="row";
		leftDiv.className="col-lg-12";

		leftDiv.appendChild(div1);
		leftDiv.style.height="600px"
		leftDiv.style.border="2px solid #cecece";
		leftDiv.style.overflow="auto";


         
         this.options.data.forEach((data,i)=>{
        var div2=document.createElement("div");
         	div2.className="thumbnail";
         	div2.className="col-lg-3 box";
         	div2.style.margin="28px 30px";
         	div2.style.width="25%;";
         	div2.style.height="274px";

         	div2.style.display="block";
         	div2.style.textAlign="center";
         	div2.style.boxShadow=" #fffefe 2px 3px 5px, #ccc9c9 2px 2px 12px 3px";
            

         	div2.padding="auto"
         	img=document.createElement('img');
         	img.src="assets/img/student.png";
         	div2.appendChild(img);
         	img.style.margin="4px";
         	img.style.width="100%";

         	nameSpan=document.createElement('span');
         	nameSpan.innerHTML=data['Student Name'];
         	div2.appendChild(nameSpan);
/*     div2.innerHTML= '<img src="assets/img/student.png">'+data['Student Name'];
*/     
div2.setAttribute("id",i);
div2.setAttribute("arr",data.Marks[0]);

div2.setAttribute("onclick","showMarks(this.id,this,this.arr)");
leftDiv.appendChild(div2);

});


         

          /*	var MarkShow=document.createElement('input');
          	Marks.type="text";
          	document.getElementById("mark-grid").appendChild(MarkShow);*/
         

          	left.appendChild(leftDiv);


          }

          CustomGrid.prototype._showMarks=function(e,thisbox,thisarr){
          	box=document.querySelectorAll(".box");
          	for(i=0;i<box.length;i++){
          		box[i].style.background="white";
          	}

          	thisbox.style.background="green";
          	show=document.querySelectorAll(".inputMarks");


sname=document.querySelector(".nameInput");
sname.value=this.options.data[e]["Student Name"];
for(i=0;i<show.length;i++){
	c=i+1;
	if(this.options.data[e].Marks["M"+c]<40){
		show[i].style.background="red";
	}else{
		show[i].style.background="white";

	}
	show[i].value=this.options.data[e].Marks["M"+c];

}

}

CustomGrid.prototype._filter= function(e){

	filter = e.toUpperCase();
	a = document.querySelectorAll(".box");
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display = "none";
		}
	}
}

myWindow.CustomGrid = CustomGrid;

})(window)

