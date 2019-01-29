/*$(document).ready(function(){
	$("button").click(function(){
$.ajax({
		url:"pag1.json",
        metod:"post",
        success:function(result){
        	var data=json.parse(result);
        	$("#id").value=data.id;
        	$("#title").value=data.title;

        }
	});


	});

	
});*/




var div=document.querySelector("#div1");
var b=document.querySelector("button");
var tmp;
b.addEventListener("click",function(){
var xhr=new XMLHttpRequest();
	xhr.onreadystatechange= function(){
		if( this.readyState== 4){
if(this.status== 200 ){
	var data=xhr.responseText;
	var book=JSON.parse(data);

	/*var id=document.getElementById("id").value=book[i].id;
	var title=document.getElementById("title").value=book[i].title;
    */
    tmp ="<table border='2'><thead><tr><th>ID</th><th>TITLE</th></tr></thead>"
    for(c in book){
    tmp += "<tr><td>"+book[c].id+"</td><td>"+book[c].title+"</td></tr>";
    }
    tmp += "</table>"

    console.log("its working ");
  
	}
		
div.innerHTML=tmp;

	
}
else{
   console.log("something went wrong pls chk");
     }

		}
		
xhr.open('POST','page1.json','true');
xhr.send();
});



/*
var b=document.querySelector("button");
b.addEventListener("click",function(){
var xhr=new XMLHttpRequest();
	xhr.onreadystatechange= function(){
		if( this.readyState== 4){
if(this.status== 200 ){
	var page=document.getElementById("page");
	page.innerHTML=xhr.responseText;
    console.log("its working ");
   
	}
		


	
}
else{
   console.log("something went wrong pls chk");
     }

		}
		
xhr.open('GET','page1.html','true');
xhr.send();
});

*/	
