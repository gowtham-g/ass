
myApp.controller('childController',['$scope',function(){



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

		
		

 table=document.createElement('table');

 tr=document.createElement('tr');
 arr=["name",'img','m1','m2','m3','m4','m5','total'];
 for(i=0;i<arr.length;i++){
 th=document.createElement('th');
th.textContent=arr[i];
tr.appendChild(th);
 }
 th=document.createElement('td');
  this.domEl.appendChild(table);
   // left.appendChild(table);
table.appendChild(tr);

 // inputLength = Object.keys(this.options.data[0]["Marks"]).length;
 // for(i=0; i<inputLength; i++){



 
 this.options.data.forEach((data,i)=>{
 	tr=document.createElement('tr');
td=document.createElement('td');
td.textContent=data['Student Name'];
tr.appendChild(td);
tr.setAttribute("id",i);

tdPhoto=document.createElement('td');

img=document.createElement('img');
 	img.src="assets/img/student.png";
 	tdPhoto.appendChild(img);
 	img.style.margin="4px";
 	img.style.width="36%";
 	tr.appendChild(tdPhoto);
tdM1=document.createElement('td');
tdM1.setAttribute("contenteditable",true);
tdM1.setAttribute("class","M1");

tdM1.setAttribute("onkeyup","markChange(this,this.class)");

tdM1.textContent=data['Marks'].M1;
tr.appendChild(tdM1);

tdM2=document.createElement('td');
tdM2.setAttribute("contenteditable",true);
tdM2.textContent=data['Marks'].M2;
tdM2.setAttribute("class","M2");


tdM2.setAttribute("onkeyup","markChange(this,this.class)");

tr.appendChild(tdM2);
tdM3=document.createElement('td');
tdM3.setAttribute("contenteditable",true);
tdM3.textContent=data['Marks'].M3;
tdM3.setAttribute("class","M3");

tdM3.setAttribute("onkeyup","markChange(this,this.class)");

tr.appendChild(tdM3);
tdM4=document.createElement('td');
tdM4.setAttribute("contenteditable",true);
tdM4.textContent=data['Marks'].M4;
tdM4.setAttribute("class","M4");

tdM4.setAttribute("onkeyup","markChange(this,this.class)");

tr.appendChild(tdM4);
tdM5=document.createElement('td');
tdM5.setAttribute("contenteditable",true);
tdM5.textContent=data['Marks'].M5;
tdM5.setAttribute("class","M5");




tr.appendChild(tdM5);
tdM5.setAttribute("onkeyup","markChange(this,this.class)");
tdTotal=document.createElement('td');
tdTotal.setAttribute("class","total"+i);

tdTotal.textContent=data['Marks'].M1+data['Marks'].M2+data['Marks'].M3+data['Marks'].M4+data['Marks'].M5;
tr.appendChild(tdTotal);

table.appendChild(tr);


});



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


CustomGrid.prototype._mark= function(thisdiv,thisid){
	// console.log(thisdiv.parentNode.id);
markclass=thisdiv.className;
	// console.log(markclass, thisid);
	parentId=thisdiv.parentNode.id;
   mark=thisdiv.textContent;
   total=0;


   // console.log(this.options.data[parentId]["Marks"][markclass]);
	// console.log(thisdiv.textContent,thisid);
	mark=+mark;
	this.options.data[parentId]["Marks"][markclass]= mark;
   // this.options.data[parentId]["Marks"].thisdiv.className=mark;
   console.log(this.options.data[parentId]);
   // console.log(this.options.data );

   totaltd=document.querySelector(".total"+parentId);
   for(i=1;i<6;i++){
       total=total+this.options.data[parentId]["Marks"]["M"+i];
   }
   sum=total
    totaltd.textContent=total;
}



myWindow.CustomGrid = CustomGrid;

})(window)

}]);