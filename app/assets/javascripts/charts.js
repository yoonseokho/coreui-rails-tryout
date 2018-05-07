$(
    function(){
      'use strict';
      var randomScalingFactor=function(){
        return Math.round(Math.random()*100)
      };
      var lineChartData={
        labels:['January','February','March','April','May','June','July'],
        datasets:[
          {label:'My First dataset',backgroundColor:'rgba(220,220,220,0.2)', borderColor:'rgba(220,220,220,1)',pointBackgroundColor:'rgba(220,220,220,1)',pointBorderColor:'#fff',data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]},
          {label:'My Second dataset',backgroundColor:'rgba(151,187,205,0.2)',borderColor:'rgba(151,187,205,1)',pointBackgroundColor:'rgba(151,187,205,1)',pointBorderColor:'#fff',data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]}
        ]};
      var polarData={datasets:[{data:[11,16,7,3,14],backgroundColor:['#FF6384','#4BC0C0','#FFCE56','#E7E9ED','#36A2EB'],label:'My dataset'}],labels:['Red','Green','Yellow','Grey','Blue']};
      var ctx=document.getElementById('canvas-6');var chart=new Chart(ctx,{type:'polarArea',data:polarData,options:{responsive:true}});
    });
