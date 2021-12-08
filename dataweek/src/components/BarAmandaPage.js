import BarChartAmanda from "../charts/BarChartAmanda";
import { stationData } from "../json/stations";


function BarAmandaPage () {
    const routeAmanda = [];
    
    stationData.forEach(element => {
        switch (element.name_long) {
            case "Hoofddorp":
            routeAmanda.push({
                id: 0,
                Naam: element.name_long + " - Schiphol Airport"
            })
            break;
            case "Schiphol Airport":
            routeAmanda.push({
                id: 1,
                Naam: element.name_long + " - Ams Centraal"
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
    </>
  );
}

export default BarAmandaPage;