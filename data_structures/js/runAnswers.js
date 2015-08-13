//graph Class constructor
function Graph() {
    this.numbers = [];
}

Graph.prototype = {
    //constructor
    constructor: Graph,

    addNumber: function(v){
        this.numbers.push(v);
    }
};

function Paper(n) {
    //this.vertices = [];
    this.graphs = [];
    // create a new graph
    var graph = new Graph();
    // add graph to the graphs array
    this.graphs.push(graph);
    // add number to graph 0 in graphs array
    this.graphs[0].addNumber(n); // <= WHY NO WORK?
}
Paper.prototype = {
    //constructor
    constructor: Paper
};

var p = new Paper(5);
console.log(p);