const url ='http://127.0.0.1:5000/api/data'
//d3.json(url).then(function(data) {
//    let Chart1Data = data.filter(checkSport);
//    console.log(Chart1Data)
//});

//const data = d3.json(url).then(function(data) {console.log(data);});

// create references to chart elements by ID
const ch1 = document.getElementById('barChart');
const ch2 = document.getElementById('pieChart');
const ch3 = document.getElementById('bubbleChart');
const ch4 = document.getElementById('sportChart');

// create chart elements for usage later
barChart = new Chart(ch1, {
    type: 'bar',
        data: {
        labels: ['??? What ???'],
        datasets: [{
            label: 'Placeholder. How are you seeing this?',
            data: [12],
            borderWidth: 1
        }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Number of championships per decade'
                }
            },
    
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});

pieChart = new Chart(ch2, {
    type: 'pie',
        data: {
        labels: ['??? What ???'],
        datasets: [{
            label: 'Placeholder. How are you seeing this?',
            data: [12],
            borderWidth: 1
        }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Number of State / Province championships '
                }
            } ,  
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});

bubbleChart = new Chart(ch3, {
    type: 'pie',
        data: {
            labels: ['??? What ???'],
            datasets: [{
                label: 'Placeholder. How are you seeing this?',
                data: [12],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Championships per city'
                }
            },
            scales: { y: { beginAtZero: true }
        }    
    }
});

sportChart = new Chart(ch4, {
    type: 'pie',
    data: {
    labels: ['??? What ???'],
    datasets: [{
        label: 'Placeholder. How are you seeing this?',
        data: [12],
        borderWidth: 1
    }]
    },
    options: {
        title:{
            display: true,
            text: "Number of championships per sport"
            },
         plugins:
        { legend:{ display: false } }
    }
});

updateCharts()

// on change, update charts with new information by calling function
d3.selectAll("#refresh").on("click", updateCharts);

// function for updating chart contents when dropdown changes
function updateCharts(){
    d3.json(url).then(function(data) {
        let Chart1Data = data.filter(checkSport).filter(checkState).filter(checkYear);
        barChart.destroy();
        pieChart.destroy();
        bubbleChart.destroy();
        sportChart.destroy();
        // get breakdown of sports types within current dataset
        var occurences = Chart1Data.reduce(function (r, row) {
            r[row.ProSport] = ++r[row.ProSport] || 1;
            return r;
        }, {});
        var sportlist = Object.keys(occurences).map(function (key) {
            return { key: key, value: occurences[key] };
        });
        // get titles per state within current dataset
        occurences = Chart1Data.reduce(function (r, row) {
            r[row.State] = ++r[row.State] || 1;
            return r;
        }, {});
        var statelist = Object.keys(occurences).map(function (key) {
            return { key: key, value: occurences[key] };
        });
        // get breakdown by city within current dataset
        occurences = Chart1Data.reduce(function (r, row) {
            r[row.City] = ++r[row.City] || 1;
            return r;
        }, {});
        var citylist = Object.keys(occurences).map(function (key) {
            return { key: key, value: occurences[key] };
        });

        // handles creating the by-decade list - create array with type string and int, fill int by iterating through current dataset and iterating if within bracket, inclusive of the top of bracket
        let yeardata = [ [ "1958-1968","1968-1978","1978-1988","1988-1998","1998-2008","2008-2018"], [0,0,0,0,0,0]];
        for (element of Chart1Data){
            if (element.Year > 1958 && element.Year <= 1968){yeardata[1][0]++;}
            if (element.Year > 1968 && element.Year <= 1978){yeardata[1][1]++;}
            if (element.Year > 1978 && element.Year <= 1988){yeardata[1][2]++;}
            if (element.Year > 1988 && element.Year <= 1998){yeardata[1][3]++;}
            if (element.Year > 1998 && element.Year <= 2008){yeardata[1][4]++;}
            if (element.Year > 2008 && element.Year <= 2018){yeardata[1][5]++;}
        }
        // create array for sport
        let sportdata = [[],[]];
        i = 0;
        for (element of sportlist){ // iterate through list and get state and number
            sportdata[0][i] = element.key;
            sportdata[1][i] = element.value;
            i++;
        }
        // create array for statedata
        let statedata = [[],[]];
        i = 0;
        for (element of statelist){ // iterate through list and get state and number
            statedata[0][i] = element.key;
            statedata[1][i] = element.value;
            i++;
        }
        // create array for citydata
        let citydata = [[],[]];
        i = 0;
        for (element of citylist){ // iterate through list and get city and number
            citydata[0][i] = element.key;
            citydata[1][i] = element.value;
            i++;
        }
        // create charts again - instead of updating, we complete destroy and remake charts as needed
        // this is probably a bad solution but it works
        // efficiency? never heard of it

        // I should also say, in retrospect, this data is useless
        // given that a title is literally given out once per year, unless there are edge cases or cancellations (or new sports) this is constant
        // this is reflected in the data by the top-ended nature of the chart - MLS didn't exist pre-1996 and thus skews things
        barChart = new Chart(ch1, {
            type: 'line',
            data: {
            labels: yeardata[0],
            datasets: [{
                label: '# of titles',
                data: yeardata[1],
                borderWidth: 1
            }]
            },
            options: {
                scales: {
                    y: {
                    beginAtZero: true
                    }
                },
                plugins:{
                    title:{
                        display: true,
                        text: 'Number championships per decade',
                        },
                
            }
        }
        });

        // these charts kinda look dumb ngl
        // we'll touch on this at the meeting. if you are reading these comments something has gone wrong, unknown marker
        pieChart = new Chart(ch2, {
            type: 'pie',
            title: 'States',
            data: {
            labels: statedata[0],
        
            datasets: [{
                label: '# of titles',
                data: statedata[1],
                borderWidth: 1
            }]
            },
            options: { 
                
                plugins:{
                    title:{
                        display: true,
                        text: 'Number championships per State/Province',
                        },
                     legend:{ display: false } } }
        });

        // see the above comment
        bubbleChart = new Chart(ch3, {
            type: 'bar',
            data: {
            labels: citydata[0],
            datasets: [{
                label: '# of titles',
                data: citydata[1],
                borderWidth: 1
            }]
            },
            options: { 
                plugins:{
                title:{
                    display: true,
                    text: 'Number championships per city',
                    },
                }
            }
        });

        // chart for sport type - is definitely a missing datapoint, felt necessary to add
        sportChart = new Chart(ch4, {
            type: 'pie',
            data: {
            labels: sportdata[0],
            datasets: [{
                label: '# of titles',
                data: sportdata[1],
                borderWidth: 1
            }]
            }
        });
    });
    if(document.getElementById("debugcheck").checked){
        console.log("Successful chart update.");
        console.log(d3.select("#selSport").property("value"));
        console.log(d3.select("#selState").property("value"));
        console.log(d3.select("#StartYear").property("value"));
        console.log(d3.select("#EndYear").property("value"));
    }
    
}

// function for checking sport title - used for filtering
function checkSport(title){
    let dropdown = d3.select("#selSport").property("value");
    if (title.ProSport == dropdown) {
        return(true);
    }
    else if (dropdown == "All"){
        return(true);
    }
    else {
        return(false);
    }
}

// function for checking state - used for filtering
function checkState(title){
    let dropdown = d3.select("#selState").property("value");
    if (title.State == dropdown) {
        return(true);
    }
    else if (dropdown == "All"){
        return(true);
    }
    else {
        return(false);
    }
}

// function for checking year - used for filtering
function checkYear(title){
    let start = d3.select("#StartYear").property("value");
    let stop = d3.select("#EndYear").property("value");
    if (start == "" && stop == "") {
        return(true);
    }
    else if (start != "" && stop == ""){
        if(title.Year >= start) { return(true); } else { return(false); }
    }
    else if (start == "" && stop != ""){
        if(title.Year <= stop) { return(true); } else { return(false); }
    }
    else if (start != "" && stop != ""){
        if(title.Year >= start && title.Year <= stop) { return(true); } else { return(false); }
    }
}