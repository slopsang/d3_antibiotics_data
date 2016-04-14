/*
  main JavaScript file
*/

// Don't execute any code until everything is on the DOM since I am manipulating the DOM
$(document).ready(function() {
  // Use d3.csv to read in your 'data/antibiotics_data.csv' dataset to display in table
  d3.csv('data/antibiotics_data.csv', function(error, data){
    var table = $('<table></table>');
    table.addClass('table');

    Object.keys(data[0]).forEach(function(d){
      var th = $('<th>'+d+'</th>');
      table.append(th);
    });

    data.forEach(function(d) {
      var tr = $('<tr>');
      Object.keys(d).forEach(function(dd) {
        tr.append($('<td>' + d[dd] + '</td>'));
      })
      table.append(tr);
    })
    $('#dataTable').append(table)
  });

  // Use Plotly JavaScript API to create visual encodings of the data. 
  // Draw the first bar graph
  var trace1 = {
    x: ['Penicilin', 'Streptomycin', 'Neomycin'],
    y: [1, 14, 10],
    type: 'bar',
    text: ['MIC of 1 is required to prevent growth of Streptococcus hemolyticus in vitro', 
           'MIC of 14 is required to prevent growth of Streptococcus hemolyticus in vitro', 
           'MIC of 10 is required to prevent growth of Streptococcus hemolyticus in vitro'],
    marker: {
      color: 'rgb(245,84,84)',
      opacity: 0.6,
      line: {
        color: 'rbg(8,48,107)',
        width: 1.5
      }
    }
  };

  var data1 = [trace1];

  var layout1 = {
    title: 'MIC of Streptococcus hemolyticus for different antibiotics'
  };

  Plotly.newPlot('graph1', data1, layout1, {staticPlot: true});

  // Draw the second grouped-bar graph
  var trace2 = {
    type: 'bar',
    x: ['Aerobacter aerogenes', 'Brucella abortus', 'Escherichia coli', 'Klebsiella pneumoniae', 
        'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa',
        'Salmonella typhosa', 'Salmonella schottmuelleri', 'Brucella anthracis', 
        'Diplococcus pneumoniae', 'Staphylococcus albus', 'Staphylococcus aureus',
        'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'],
    y: [1, 2, 0.4, 1.2, 5, 0.1, 2, 0.4, 0.8, 0.01, 11, 0.1, 0.03, 1, 14, 10],
    mode: 'bar',
    name: 'MIC of each bacteria for Streptomycin',
    marker: {
      color: 'rgb(51,51,255)',
      width: 2
    }
  };

  var trace3 = {
    type: 'bar',
    x: ['Aerobacter aerogenes', 'Brucella abortus', 'Escherichia coli', 'Klebsiella pneumoniae', 
        'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa',
        'Salmonella typhosa', 'Salmonella schottmuelleri', 'Brucella anthracis', 
        'Diplococcus pneumoniae', 'Staphylococcus albus', 'Staphylococcus aureus',
        'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'],
    y: [1.6, 0.02, 0.1, 1, 2, 0.1, 0.4, 0.008, 0.09, 0.007, 10, 0.001, 0.001, 0.1, 10, 40],
    mode: 'bar',
    name: 'MIC of each bacteria for Neomycin',
    marker: {
      color: 'rgb(255,178,102)',
      width: 2
    }
  };

  var data2 = [trace2, trace3];

  var layout2 = {
    title: 'MIC of each bacteria for different antibiotics',
    yaxis: {          // Use Logarithmic Axes in graph
      type: 'log',
      autorange: true
    }
  };

  Plotly.newPlot('graph2', data2, layout2, {staticPlot: true});

  // Draw the third bar graph
  var trace4 = {
    type: 'bar',
    x: ['Brucella anthracis', 'Diplococcus pneumoniae', 'Staphylococcus albus', 'Staphylococcus aureus',
        'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'],
    y: [0.001, 0.005, 0.007, 0.03, 1, 1, 0.005],
    mode: 'bar',
    name: 'MIC of Gram-positive bacterias for Penicilin',
    marker: {
      color: 'rgb(159,0,255)',
      width: 2
    }
  };  

  var trace5 = {
    type: 'bar',
    x: ['Aerobacter aerogenes', 'Brucella abortus', 'Escherichia coli', 'Klebsiella pneumoniae', 
        'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa',
        'Salmonella typhosa', 'Salmonella schottmuelleri'],
    y: [870, 1, 100, 850, 800, 3, 850, 1, 10],
    mode: 'bar',
    name: 'MIC of Gram-negative bacterias for Penicilin',
    marker: {
      color: 'rgb(255,204,229)',
      width: 2
    }
  };  

  var data3 = [trace4, trace5];

  var layout3 = {
    title: 'MIC of Gram-positive and Gram-negative bacterias for Penicilin',
    yaxis: {       // Use Logarithmic Axes in graph
      type: 'log',
      autorange: true
    }
  };

  Plotly.newPlot('graph3', data3, layout3, {staticPlot: true});
});

