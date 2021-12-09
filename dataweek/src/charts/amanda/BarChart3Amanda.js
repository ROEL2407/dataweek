import useD3 from "../../hooks/useD3";
import React from "react";
import * as d3 from "d3";

function BarChart2Roel({ data }) {

  const ref = useD3(
    (svg) => {
      const height = 400;
      const width = 600;
      const margin = {top: 40, bottom: 10, left: 200, right: 20 };

      const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .attr("id", "kin_diagram");
        
      const xscale = d3.scaleLinear().domain(0, 5).range([0, width]);
      const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.1);

      // Axis setup
      const xaxis = d3.axisTop().scale(xscale);
      const g_xaxis = g.append("g").attr("className", "x axis");
      const yaxis = d3.axisLeft().scale(yscale);
      const g_yaxis = g.append("g").attr("className", "y axis");

      //color scale items of wearing
      let myColor = d3.scaleOrdinal().domain(data)
      .range(["#e8ba31"])
      ///////////////////////
      update(data);
      console.log(data);

      function update(new_data) {
          console.log(new_data);
          //update the scales
          xscale.domain([0, 10]);
          yscale.domain(new_data.map((d) => d.Naam));
          //render the axis
          g_xaxis.transition().call(xaxis);
          g_yaxis.transition().call(yaxis);

          const rect = g.selectAll("rect").data(new_data, (d) => d.mondkapjes.waar.kin).join(
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

          // ENTER + UPDATE
          // both old and new elements
          rect.transition()
              .attr("height", yscale.bandwidth())
              .attr("width", (d) => xscale(d.mondkapjes.waar.kin))
              .attr("y", (d) => yscale(d.Naam))
              .attr("className", (d) => d.mondkapjes.waar.kin)
              .style('fill',  function(d){return myColor(d)})
              
      }
    },
    [data.length]
  );

  return (
      <>
      <h2>het aantal mensen die de mondkap niet of onder hun kin dragen</h2>
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
    </>
  );
}

export default BarChart2Roel;