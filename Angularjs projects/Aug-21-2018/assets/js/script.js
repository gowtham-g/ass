var arr=[];
var index;
var completed=[];
var old=[];
var d;

/*input Selection*/
var searchBtn=document.querySelector(".toggle-search-box");;
var inputBoxBtn=document.querySelector(".toggle-input-box");
var inputBox=document.querySelector(".input-box");
var taskInput=document.querySelector(".task-input");;
var dateInput=document.querySelector(".date-input");;
var clearSearch=document.querySelector(".btn-clear-input-search");;
var clearInput=document.querySelector(".btn-clear-input");;
var searchBox=document.querySelector('.search-box');
/*ul selection*/
var taskUl=document.querySelector(".task-list");;
var completedUl=document.querySelector(".completed-ul");;
var oldUl=document.querySelector(".old-ul");;
/*button selection*/	
var addBtn=document.querySelector(".btn-add");
var batIcon=document.getElementById("bat-icon");
var liAdd=document.querySelector(".fa-pencil");
var v=function(selector){
  return document.querySelector(selector);
}
var li=document.getElementsByTagName('li');
var r=0;

clearInput.addEventListener("click",function(){
	taskInput.value="";
	dateInput.value="";
});
clearSearch.addEventListener("click",function(){
	v(".search-task").value="";
});
if(r==0){
	v("#bat-icon").setAttribute("class","fa fa-battery-0");

v(".progress").innerText = 0 +" %";
}
inputBoxBtn.addEventListener("click",function(){
   inputBox.classList.toggle('toggle-box');

});
searchBtn.addEventListener("click",function(){
  
   searchBox.classList.toggle('toggle-box1');
  

});

addBtn.addEventListener("click",function(){
  var taskLi;
    a=taskInput.value;
    b=dateInput.value;
/*    oldLisClass=document.querySelector(".old-lis-class");
*/   if(a!="" && b!=""){
   arr.push({name:a, date:b});

   var oldDate = new Date(b);
			var newDate = new Date();

			if(newDate.getTime() > oldDate.getTime()) {
				old.push({name:a, date:b});
}
			while(oldUl.firstChild){
      oldUl.removeChild(oldUl.firstChild);
 }
 
for(i=0;i<old.length;i++){

oldLi=document.createElement("li");
	oldLi.innerHTML="<span>"+ old[i].name  + "  "+old[i].date  +"</span> ";
			oldUl.append(oldLi);
				}
			}
 
 while(taskUl.firstChild){
      taskUl.removeChild(taskUl.firstChild);
 }
 for(i=0;i<arr.length;i++){
	  taskLi=document.createElement("li");
	  taskLi.id="list";
	  taskLi.setAttribute('data-attr',i);
	   
	 
   taskLi.innerHTML=""+ arr[i].name + " "+ arr[i].date + "<input type='hidden' value='"+i+"'><span  class='fa fa-pencil' onclick='addCompleted()'> </span><span class='fa fa-trash'onclick='removeTask()'></span>";
   taskUl.append(taskLi);
   console.log(taskLi);
}
progress();
taskInput.value="";
	dateInput.value="";
});


function addCompleted(){

     
	val=v("#list").getAttribute('data-attr');
	completed.push({name:arr[val].name, date:arr[val].date});
while(completedUl.firstChild){
      completedUl.removeChild(completedUl.firstChild);
 }
 for(i=0;i<completed.length;i++){
	  completedLi=document.createElement("li");
	  completedLi.id="list";
	  completedLi.setAttribute('data-attr',i);	 
   completedLi.innerHTML=""+ arr[i].name + " "+ arr[i].date + "";
   completedUl.append(completedLi);

}

progress();

}
function removeTask(){
   
	val=v("#list").getAttribute('data-attr');

   arr.splice(val,1);
   completed.splice(val,1);
   old.splice(val,1);

while(oldUl.firstChild){
      oldUl.removeChild(oldUl.firstChild);
 }
 for(i=0;i<arr.length;i++){
	  oldLi=document.createElement("li");
	  oldLi.id="list";
	  oldLi.setAttribute('data-attr',i);	 
   oldLi.innerHTML=""+ arr[i].name + " "+ arr[i].date + "<input type='hidden' value='"+i+"'><span  > <i class='fa fa-pencil' onclick='addCompleted()'></i> </span><span><i class='fa fa-trash'onclick='removeTask()'></i></span>";
  oldUl.append(oldLi);

}

 while(taskUl.firstChild){
      taskUl.removeChild(taskUl.firstChild);
 }
 for(i=0;i<arr.length;i++){
	  taskLi=document.createElement("li");
	  taskLi.id="list";
	  taskLi.setAttribute('data-attr',i);	 
   taskLi.innerHTML=""+ arr[i].name + " "+ arr[i].date + "<input type='hidden' value='"+i+"'><span  > <i class='fa fa-pencil' onclick='addCompleted()'></i> </span><span><i class='fa fa-trash'onclick='removeTask()'></i></span>";
   taskUl.append(taskLi);

}
while(completedUl.firstChild){
      completedUl.removeChild(completedUl.firstChild);
 }
 for(i=0;i<arr.length;i++){
	  completedLi=document.createElement("li");
	  completedLi.id="list";
	  completedLi.setAttribute('data-attr',i);	 
   completedLi.innerHTML=""+ arr[i].name + " "+ arr[i].date + "<input type='hidden' value='"+i+"'><span  > <i class='fa fa-pencil' onclick='addCompleted()'></i> </span><span><i class='fa fa-trash'onclick='removeTask()'></i></span>";
   completedUl.append(completedLi);

}
progress();

}
var input,filter, ul, li, a, i;

function search(){

	sval=v(".search-task").value;
		
   
    filter = sval.toUpperCase();
 
    
    for (i = 0; i < li.length; i++) {
        a = li[i];
        if (a.textContent.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    }



function addTaskLi(){
	 
}
function removeTaskLi(){

}

/*Progress bar calculation*/
function progress(){
	if(completed.length){
		p= completed.length;
		q= arr.length;
		r=Math.round(p/q*100);

		if(r<49 && r >24)
			v("#bat-icon").setAttribute("class","fa fa-battery-1");
		else if(r<74 && r>49 ){
			v("#bat-icon").setAttribute("class","fa fa-battery-2");
		}
		else if(r<95 && r>74 ){
			v("#bat-icon").setAttribute("class","fa fa-battery-3");
		}
		else if(r>=100 )$("#bat-icon").attr("class","fa fa-battery-4");
		
		v(".progress").innerText= 100 +" %";

	}
	else{
		v("#bat-icon").setAttribute("class","fa fa-battery-0");
		v(".progress").innerText= 0 +" %";
	}}
	