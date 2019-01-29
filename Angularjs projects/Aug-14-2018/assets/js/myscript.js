
/*=====creation of http request=====*/
var xhttp=new XMLHttpRequest();
 xhttp.onreadystatechange=function(){
  if(this.readyState==4){
    if(this.status==200){
     var data=JSON.parse(this.responseText);
     OnLoad(data);
  
    }
  }
 }
 xhttp.open('GET','sample.json',true);
 xhttp.send();


 /*===== onload function definition =======*/

 var OnLoad=function(data){

  detail= CustomGrid('grid',{data:data});
 };

 /*===== Calling of search function =====*/
 var search= function(val){
  detail._filter(val);
 };

var showMarks= function(e,thisbox,thisarr){
  detail._showMarks(e,thisbox,thisarr);
 };
