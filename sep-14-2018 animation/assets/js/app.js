 
 var myApp=angular.module('myApp',[]);
 myApp.controller('maincontroller',['$scope',function($scope){



  var canvas = this.__canvas = new fabric.Canvas('c');
$scope.createRect=function(){
   rect = new fabric.Rect({
    width: 50,
    height: 50,
    left: 100,
    top: 100,
    stroke: '#aaf',
    strokeWidth: 5,
    fill: '#faa',
    selectable: false
  });
  canvas.add(rect);
}
  $scope.createRect();

// fabric.loadSVGFromURL('http://192.168.5.11/prjects/Assignments/sep-14-2018%20animation/1.svg',function(svg){
// console.log(svg)
// canvas.add(svg);
// canvas.renderAll();
// });

 fabric.loadSVGFromURL('http://192.168.5.11/prjects/Assignments/sep-14-2018%20animation/1.svg', function(objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        /*obj.scaleToWidth(this.canvas.getWidth())*/

        obj.set({
            left: 50,
            top: 50,
            opacity:0.2
        });

        obj.hasControls = true;
        obj.padding = 10;

        canvas.add(obj);      
        svg = obj;
    });

   
     
     render();

function render(){ 
    canvas.renderAll();
    fabric.util.requestAnimFrame(render);
}
  //var animateBtn = document.getElementById('animate');
  // animateBtn.onclick = function() {
  //   animateBtn.disabled = true;
  //   rect.animate('left', rect.left === 100 ? 400 : 100, {
  //     duration: 1000,
  //     onChange: canvas.renderAll.bind(canvas),
  //     onComplete: function() {
  //       animateBtn.disabled = false;
  //     },
  //     easing: fabric.util.ease[document.getElementById('easing').value]
  //   });
  // };

$scope.animateRect = function() {
  console.log($scope.select);

  if($scope.select=="rl"){

    rect.animate('left', rect.left ===0 ? (canvas.get('width')-rect.get('width')):0, {
      duration: 1000,
      onChange: canvas.renderAll.bind(canvas),
      onComplete: function() {
rect.animate('left', rect.left ===0 ? (canvas.get('width')-rect.get('width')):0, {
      duration: 1,
      onChange: canvas.renderAll.bind(canvas),
      onComplete: function() {
          $scope.animateRect();
        }
    });
    // canvas.remove(rect);

    //             $scope.createRect();
            //   $scope.animateRect();
      }
    });
  }

  else if($scope.select=="lr"){

    rect.animate('left', rect.left ===canvas.get('width') ?0:(canvas.get('width')-rect.get('width')), {
      duration: 1000,
      onChange: canvas.renderAll.bind(canvas),
      onComplete: function() {
  rect.animate('left', rect.left ===canvas.get('width') ?0:0, {
      duration: 1,
      onChange: canvas.renderAll.bind(canvas),
      onComplete: function() {
          $scope.animateRect();

  }
    });
    // canvas.remove(rect);

               // $scope.createRect(); 
                // $scope.animateRect();

      }
    });
  }
  else if($scope.select=="bt"){
          rect.set('left',0);
    rect.animate('top', rect.top === 100 ? (canvas.get("height")-rect.get('width')) :0, {
      duration: 1000,
      onChange: canvas.renderAll.bind(canvas),
      onComplete: function() {
                 rect.animate('top', rect.top === 100 ? (canvas.get("height")-rect.get('width')) :0, {
      duration: 1000,
      onChange: canvas.renderAll.bind(canvas),
      onComplete: function() {
          $scope.animateRect();


      }
    });
    // canvas.remove(rect);
    //             $scope.createRect();
                 //$scope.animateRect();




      }
    });
  }

  else if($scope.select=="tb"){
          // rect.set('left',0);
    
console.log(canvas.get('width'));
    rect.animate('top', rect.top === canvas.get("height") ? 0 :(canvas.get("height")-rect.get('width')), {
      duration: 1000,
      onChange: canvas.renderAll.bind(canvas),
      onComplete: function() {
    // canvas.remove(rect);
    //             $scope.createRect();
                 // $scope.animateRect();

    
      }
    });
  }
    // animateBtn.disabled = true;
    // rect.animate('left', rect.left === 100 ? 400 : 100, {
    //   duration: 1000,
    //   onChange: canvas.renderAll.bind(canvas),
    //   onComplete: function() {
    //     animateBtn.disabled = false;
    //   },
    //   easing: fabric.util.ease[document.getElementById('easing').value]
    // });
  };


 }]);

