import useD3 from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";

function BarChartAmanda({ data }) {

  const ref = useD3(
    (svg) => {
      const height = 400;
      const width = 600;
      const margin = {top: 40, bottom: 10, left: 120, right: 20 };

      const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .attr("id", "diagram");

      const xscale = d3.scaleLinear().domain([d3.min(data), d3.max(data)]).range([0, width]);
      const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.1);

      // Axis setup
      const xaxis = d3.axisTop().scale(xscale);
      const g_xaxis = g.append("g").attr("className", "x axis");
      const yaxis = d3.axisLeft().scale(yscale);
      const g_yaxis = g.append("g").attr("className", "y axis");

      //color scale items of types
      let grass = d3.scaleLinear().domain([1, 3]).range(["lightgreen", "darkgreen"]);
      let fire = d3.scaleLinear().domain([1, 3]).range(["red", "darkred"]);
      let water = d3.scaleLinear().domain([1, 3]).range(["lightblue", "darkblue"]);
      ///////////////////////
      update(data);
      console.log(data);

      function update(new_data) {
          //update the scales
          xscale.domain([300, d3.max(new_data, (d) => d.totaal)]);
          yscale.domain(new_data.map((d) => d.Naam));
          //render the axis
          g_xaxis.transition().call(xaxis);
          g_yaxis.transition().call(yaxis);

          const rect = g.selectAll("rect").data(new_data, (d) => d.totaal).join(
                  // ENTER 
                  // new elements
                  (enter) => {
                      const rect_enter = enter.append("rect").attr("x", 1);
                      rect_enter.append("title");
                      return rect_enter;
                  },
                  // UPDATE
                  // update existing elements
                  (update) => update,
                  // EXIT
                  // elements that aren't associated with data
                  (exit) => exit.remove()
              )
              .on('mouseover', onMouseOver)
              .on('mousemove', onMouseOver) // Mousemove returnt constant de coördinaten van de muis
              .on('mouseout', onMouseOut);

          // ENTER + UPDATE
          // both old and new elements
          rect.transition()
              .attr("height", yscale.bandwidth())
              .attr("width", (d) => xscale(d.totaal))
              .attr("y", (d) => yscale(d.naam))
              .attr("className", (d) => d.type)
              .style('fill', (d) => {
                  return d.type === 'grass' ? grass(d.evo) : d.type === 'fire' ? fire(d.evo) : water(d.evo)
              })
              
      }

      

      function onMouseOver(d, data) {
          // Gives the position of the mouse
          const xPos = d.clientX;
          const yPos = d.clientY;

          // give tooltip display block if mouse is over a bar
          d3.select(this).attr('className', 'block');
          d3.select('#toolTip').classed('hidden', false);
          d3.select('#toolTip')
              // take position of mouse for position of tooltip
              .style('left', xPos + 'px')
              .style('top', yPos + 'px');
          //give data to tooltip
          d3.select('#type').text(`Type: ${data.type}`);
          d3.select('#value').text(`Total base stats: ${data.totaal}`);
      }

      function onMouseOut() {
          // remove display of tooltip when mouse isn't over a bar
          d3.select('#toolTip').classed('hidden', true);
      }
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px"
      }}
      className="starterStats" 
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}

export default BarChartAmanda;