$(
    function(){
      'use strict';
      var randomScalingFactor=function(){
        return Math.round(Math.random()*100)
      };
      var polarData={datasets:[{data:[11,16,7,3,14],backgroundColor:['#FF6384','#4BC0C0','#FFCE56','#E7E9ED','#36A2EB'],label:'My dataset'}],labels:['Red','Green','Yellow','Grey','Blue']};
      var ctx=document.getElementById('canvas-6');var chart=new Chart(ctx,{type:'polarArea',data:polarData,options:{responsive:true}});
    });
