	/*readingCompArray is the parameter for the reading comp scores */
        $(function (readingCompArray) {
          /* var readingCompTest = [33, 40, 45, 65, 70, 75, 85, 90, 91, 95]; */
        $('#container4').highcharts({
	        title: {
	            text: 'Reading Comprehension',
	            x: -20 //center
	        },
	        subtitle: {
	            text: 'Source: Utah Schools',
	            x: -20
	        },
	        xAxis: {
	            categories: ['2nd Grade', '3rd Grade', '4th Grade', '5th Grade', '6th Grade',
	                '7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade']
	        },
	        yAxis: {
	            title: {
	                text: 'Reading Comprehension Score(0-100)'
	            },
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }]
	        },
	        tooltip: {
	            valueSuffix: '%'
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'middle',
	            borderWidth: 0
	        },
	        series: [{
	            name: 'High Range',
	            data: [50, 59, 73, 76, 82, 84, 87, 89, 90, 93]
	        }, {
	            name: 'Student Score',
	            data: readingCompArray
	        }, {
	            name: 'Low Range',
	            data: [32, 42, 55, 55, 63, 66, 69, 71, 73, 74]
	        }]
	    });
	});
        /*   These are the parameters for the students scores that will be 
         * passed into the graphs (mathScore, scienceScore, artsScore)     */
        $(function  (mathScore, scienceScore, artsScore) {
        Highcharts.Renderer.prototype.symbols.line = function(x, y, width, height) {
    return ['M',x ,y + width / 2,'L',x+height,y + width / 2];
};
//-------------------------------------------------------
Highcharts.setOptions({
    chart:{
        type:'bar',
        margin:[5,15,10,100],
    },
    credits:{enabled:false},
    exporting:{enabled:false},
    legend:{enabled:false},
    title:{text:''},
    xAxis:{
        tickLength:0,
        lineColor:'#999',
        lineWidth:1,
        labels:{style:{fontWeight:'bold'}}        
    },
    yAxis:{
        min:0,
        minPadding:0,
        maxPadding:0,
        tickColor:'#ccc',
        tickWidth:1,
        tickLength:3,
        gridLineWidth:0,
        endOnTick:true,
        title:{text: ''},
        labels:{
            y:10,
            style:{
                fontSize:'8px'
            },
            formatter:function(){
                if (this.isLast){
                    return this.value + ' %';
                }
                else{
                    return this.value;
                }
            }
        }
    },
    tooltip:{
        enabled:true,
        backgroundColor:'rgba(255, 255, 255, .85)',
        borderWidth:0,
        shadow:true,
        style:{fontSize:'10px',padding:2},
        formatter:function() {
           return this.series.name + ": <strong>" + Highcharts.numberFormat(this.y,2) + "</strong>";
        }
    },
    plotOptions:{
        bar:{
            color:'#000',
            shadow:false,
            borderWidth:0,
        },
        scatter:{
            marker:{
                symbol:'line',
                lineWidth:3,
                radius:8,
                lineColor:'#000'
            }
        }
    }
});

//-------------------------------------------------------
var chart1 = new Highcharts.Chart({
    chart:{renderTo:'container1'},
    xAxis:{categories:['Math']},
    yAxis:{
        max:100,
        labels:{y:10,style:{fontSize:'8px'}},    
        plotBands:[{from:0,to:60,color: 'rgba(103,103,103,.55)'},
                   {from:60,to:100,color: 'rgba(204,204,204,.55)'},
                   {from:85,to:100,color: 'rgba(204,204,204,0)'}]
    },
    /* mathScore is the variable for the students math score */
            series:[{name:'Measure',pointWidth:10,data:mathScore},
            {name:'Target',type: 'scatter',data:[80],}]
});

//-------------------------------------------------------
var chart2 = new Highcharts.Chart({
    chart:{renderTo:'container2'},
    xAxis:{categories:['Science']},
    yAxis:{
        max:100,
        labels:{y:10,style:{fontSize:'8px'}},   
        plotBands:[{from:0,to:75,color: 'rgba(103,103,103,.35)'},
                   {from:75,to:90,color: 'rgba(153,153,153,.35)'},
                   {from:90,to:100,color: 'rgba(204,204,204,.35)'}]
    },
    /* scienceScore is the variable for the students science score */
    series:[{name:'Measure',pointWidth:10,data:scienceScore},
            {name:'Target',type: 'scatter',data:[95],}]
});

//-------------------------------------------------------
var chart3 = new Highcharts.Chart({
    chart:{renderTo:'container3'},
    xAxis:{categories:['Arts']},
    yAxis:{
        max:100,
        labels:{y:10,style:{fontSize:'8px'}},   
        plotBands:[{from:0,to:50,color: 'rgba(103,103,103,.35)'},
                   {from:50,to:75,color: 'rgba(153,153,153,.35)'},
                   {from:75,to:100,color: 'rgba(204,204,204,.35)'}]
    },
    /* artsScore is the variable for the students arts score */
    series:[{name:'Measure',pointWidth:10,data:artsScore},
            {name:'Target',type: 'scatter',data:[75],}]
});



        });
