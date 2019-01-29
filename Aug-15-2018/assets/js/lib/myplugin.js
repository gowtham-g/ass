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
		$("<label/>",{text:'Search'}).appendTo("#grid");
        $("<input>",{type:'text'}).attr("onkeyup","search(this.value)").appendTo("#grid");
		$("#grid").append("<div class='left col-lg-9'></div><div class='col-lg-3 right'></div>");
		$(".left").css({"border":"2px solid gray","margin":"100px auto","overflow":"auto","height":"600px"});
		$(".right").css({"margin":"100px auto"});
        $("<input>",{type:'text'}).attr("class","nameInput").appendTo(".right");
		// inputLength = Object.keys(this.options.data[0]["Marks"]).length;
		for(i=0;i<Object.keys(this.options.data[i]["Marks"]).length;i++){

			c=i+1;
			$(".right").append("<label class='markLabel'>M"+c+"</label><input type='text' class='markInput'>");
}
            $(".markLabel").css({"margin-top":"10px","display":"block"});
		
            $(".markInput").css("margin-top","10px");
		this.options.data.forEach((data,i)=>{
			$(".left").append("<div class='col-lg-3 box thumbnail div"+i+"' id='"+i+"' onclick='showMarks(this.id,this)'><img class='img'><span class='name'>"+this.options.data[i]["Student Name"]+"</span></div>");
         // $("<div/>").attr("onclick","showMarks(this.id,this)").attr("class","col-lg-3 thumbnail box").attr("id",i).appendTo(".left");
		}); $(".img").attr("src","assets/img/student.png");
		$(".box").css({
			"height":"274px",
			"textAlign":"center",
			"margin":"28px 30px",
			"display":"block"
		});
		

	}

	CustomGrid.prototype._showMarks=function(e,thisbox){
		box=$(".box");
          	for(i=0;i<box.length;i++){
          		box[i].style.background="white";
          	}

          	thisbox.style.background="green";
          	show=$(".markInput");


$(".nameInput").val(this.options.data[e]["Student Name"]);
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
		l=$(".box");
		for (i = 0; i <l.length; i++) {
			a=l[i].textContent[0]+l[i].textContent[1];
			if (a.toUpperCase().indexOf(filter) > -1)  {
				
				l[i].style.display="";
              
			} else {
				l[i].style.display="none";
				
			}
		}
	}

	myWindow.CustomGrid = CustomGrid;

})(window)

