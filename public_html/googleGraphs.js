/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Reading Comprehension');
        data.addColumn('string', 'Reading title');
        data.addColumn('string', 'Reading text');
        data.addColumn('number', 'Reading Instruction');
        data.addColumn('string', 'Reading text1');
        data.addColumn('number', 'Reading Frustration');
        data.addColumn('string', 'Reading title');
        data.addColumn('string', 'Reading text');
                
data.addRows([
          [new Date(2008, 2, 15), 6, undefined, undefined,
                                  7, undefined, undefined,
	                        	  6, undefined, undefined],
    
          [new Date(2009, 2, 16), 5, undefined, undefined,
                                  4, undefined, undefined,
			                      5, undefined, undefined]
    
          [new Date(2010, 2, 17), 8, undefined, undefined,
                                  7, undefined, undefined,
			                      6, undefined, undefined],

          [new Date(2011, 2, 18), 5, undefined, undefined,
                                  4, undefined, undefined,
			                      8, undefined, undefined],

          [new Date(2012, 2, 19), 6, undefined, undefined,
                                  5, undefined, undefined,
			                      4, undefined, undefined],

          [new Date(2013, 2, 20), 9, undefined, undefined,
                                  6, undefined, undefined,
		                          8, undefined, undefined],

        ]);

        var chart = new google.visualization.AnnotationChart(document.getElementById('chart_div'));

        var options = {
          displayAnnotations: false
        };

        chart.draw(data, options);
      }

