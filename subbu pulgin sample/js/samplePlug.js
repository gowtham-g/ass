(function(pWindow) {
	if(typeof pWindow.CustomGrid == "function") {
		throw new Error("Custom Table already defined");
	}

	/*===================== creating default values=============*/

	var CustomGrid= function(pId, options) {
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
	/*==================== creating new list================*/


	CustomGrid.prototype._newTable = function(){
		var mainDiv=document.createElement('div');
		this.options.data.forEach(function(data,i){
          subDiv=document.createElement('div');
          subDiv.innerHTML=i;
          subDiv.style.border="2px dashed red";
          mainDiv.appendChild(subDiv);
		});
          this.domEl.appendChild(mainDiv);
         
	}

	CustomGrid.prototype._filter = function(){
		alert()
	}

	pWindow.CustomGrid = CustomGrid;
})(window)