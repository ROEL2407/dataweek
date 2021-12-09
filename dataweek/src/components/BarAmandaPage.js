import BarChartAmanda from "../charts/amanda/BarChartAmanda";
import BarChart2Amanda from "../charts/amanda/BarChart2Amanda";
import BarChart3Amanda from "../charts/amanda/BarChart3Amanda";
import { stationData } from "../json/stations";
import { mondkapData } from  "../json/mondkapjes";


function BarAmandaPage () {
    const routeAmanda = [];
    const mondkap = mondkapData;
    let amandadata = [];
    if (mondkap[2].treinroute === "treinAmanda") {
      amandadata = mondkap[2].mondkapjes;
    }
    
    stationData.forEach(element => {
        switch (element.name_long) {
            case "Hoofddorp":
            routeAmanda.push({
                id: 0,
                Naam: element.name_long + " - Schiphol Airport",
                mondkapjes: amandadata.hoo_sch
            })
            break;
            case "Schiphol Airport":
            routeAmanda.push({
                id: 1,
                Naam: element.name_long + " - Ams Zuid",
                mondkapjes: amandadata.sch_zui
            })
            break;
        
            default:
                break;
        }
    });
    routeAmanda.sort( function(a, b) { 
        return a.id - b.id  ||  a.naam.localeCompare(b.naam);
      });
    console.log(routeAmanda);
  return (
    <>
    <BarChartAmanda data={routeAmanda} />
      <BarChart2Amanda data={routeAmanda} />
      <BarChart3Amanda data={routeAmanda} />
    </>
  );
}

export default BarAmandaPage;