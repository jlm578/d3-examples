var width = 800,
    height = 500;
    margin = 25;

var svg = d3.select("#venn-diagram")
    .append("svg:svg")
    .attr("width", width + 2*margin)
    .attr("height", height + 2*margin)
    .append('g')
    .attr('transform', 'translate('+margin+','+margin+')');

/** Define Circle 1 **/
svg.append("svg:clipPath")
    .attr("id", "circle1")
    .append("svg:circle")
    .attr('cx', 350)
    .attr('cy', 200)
    .attr('r', 180);

/* Draw Circle 1 and its clickable Area */
svg.append('svg:rect')
    .attr('width', 360)
    .attr('height', 360)
    .attr('x', 170)
    .attr('y', 20)
    .attr('rx', 15)
    .attr('ry', 15)
    .attr("clip-path", function() {return "url(#circle1)"; })
    .style("fill", "#EDCB72")
    .style("opacity", 0.5)
    //.on("click", function(){console.log("Circle 1 (Yellow) was clicked!");});
    .on("click", function(){showCircleSectionContent('circle1Content');});


/** Define Circle 2 **/
svg.append("svg:clipPath")
    .attr("id", "circle2")
    .append("svg:circle")
    .attr('cx', 550)
    .attr('cy', 200)
    .attr('r', 180);

/** Draw Circle 2 and its clickable Area **/
svg.append('svg:rect')
    .attr('width', 360)
    .attr('height', 360)
    .attr('x', 370)
    .attr('y', 20)
    .attr('rx', 15)
    .attr('ry', 15)
    .attr("clip-path", function() {return "url(#circle2)"; })
    .style("fill", "#9145A0")
    .style("opacity", 0.5)
    //.on("click", function(){console.log("Circle 2 (Purple) was clicked!");});
    .on("click", function(){showCircleSectionContent('circle2Content');});


/** Draw Intersection of Circle 1 and Circle 2 and its clickable Area **/
svg.append("g")
    .attr("id", "circle1and2intersection")
    .attr("clip-path", "url(#circle1)")
    .append("rect")
    .attr("clip-path", "url(#circle2)")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "#c493ab")
    .style("opacity", 0)
    //.on("click", function(){console.log("Intersection of Circle 1(Yellow) and Circle 2 (Purple) was clicked!");});
    .on("click", function(){showCircleSectionContent('circle1and2Content');});

/** Define Circle 3 **/
svg.append("svg:clipPath")
    .attr("id", "circle3")
    .append("svg:circle")
    .attr('cx', 450)
    .attr('cy', 300)
    .attr('r', 180);

/** Draw Circle 3 and its clickable Area **/
svg.append('svg:rect')
    .attr('width', 360)
    .attr('height', 360)
    .attr('x', 270)
    .attr('y', 120)
    .attr('rx', 15)
    .attr('ry', 15)
    .attr("clip-path", function() {return "url(#circle3)"; })
    .style("fill", "#69B59D")
    .style("opacity", 0.5)
    //.on("click", function(){console.log("Circle 3 (Green) was clicked!");});
    .on("click", function(){showCircleSectionContent('circle3Content');});

/** Draw Intersection of Circle 2 and Circle 3 and its clickable Area **/
svg.append("g")
    .attr("id", "circle2and3intersection")
    .attr("clip-path", "url(#circle2)")
    .append("rect")
    .attr("clip-path", "url(#circle3)")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "#96abb7")
    .style("opacity", 0)
    //.on("click", function(){console.log("Intersection of Circle 2 (Purple) and Circle 3 (Green) was clicked!");});
    .on("click", function(){showCircleSectionContent('circle2and3Content');});

/** Draw Intersection of Circle 1 and Circle 3 and its clickable Area **/
svg.append("g")
    .attr("id", "circle3and1intersection")
    .attr("clip-path", "url(#circle3)")
    .append("rect")
    .attr("clip-path", "url(#circle1)")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "#adcea9")
    .style("opacity", 0)
    //.on("click", function(){console.log("Intersection of Circle 3 (Green) and Circle 1 (Yellow) was clicked!");});
    .on("click", function(){showCircleSectionContent('circle1and3Content');});

/** Draw Intersection of all three circles and its clickable area **/
 svg.append("g")
     .attr("id", "circle1and2and3intersection")
     .attr("clip-path", "url(#circle3)")
     .append("g")
     .attr("clip-path", "url(#circle2)")
     .append("rect")
     .attr("clip-path", "url(#circle1)")
     .attr("width", width)
     .attr("height", height)
     .style("fill", "#95a4a4")
     .style("opacity", 0)
     //.on("click", function(){console.log("Intersection of Circle 3 (Green), Circle 2 (Purple), and Circle 1 (Yellow) was clicked!");});
    .on("click", function(){showCircleSectionContent('circle1and2and3Content');});
