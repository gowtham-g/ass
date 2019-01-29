var xhrHttp=new XMLHttpRequest();
   xhrHttp.onreadystatechange = function(){
   if(this.readyState==4){
      if(this.status==200){
        
         var data=JSON.parse(this.responseText);
         		OnLoaded(data);
         		
         		 }
     		   }	
         }
    xhrHttp.open('GET','sample.json',true);
		xhrHttp.send();

/*---------------onload func--------------*/
var OnLoaded = function(data) {
				
	
			  sample = CustomGrid('grid', {data : data});

 };
/*=========== search func============*/

var search =function(){
  sample._filter();
};
				