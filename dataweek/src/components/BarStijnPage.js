import BarChartStijn from "../charts/BarChartStijn";
import { stationData } from "../json/stations";


function BarStijnPage () {
    const routeStijn = [];
    
    stationData.forEach(element => {
        switch (element.name_long) {
            case "Almelo":
                routeStijn.push({
                id: 0,
                Naam: element.name_long + " - Deventer"
            })
            break;

            case "Deventer":
                routeStijn.push({
                id: 1,
                Naam: element.name_long + " - Apeldoorn"
            })
            break;

            case "Apeldoorn":
                routeStijn.push({
                id: 2,
                Naam: element.name_long + " - Amersfoort Centraal"
            })
            break;

            case "Amersfoort Centraal":
                routeStijn.push({
                id: 3,
                Naam: element.name_long + " - Ams Centraal"
            })
            break;
        
            default:
                break;
        }
    });
    routeStijn.sort( function(a, b) { 
        return a.id - b.id  ||  a.naam.localeCompare(b.naam);
      });
    console.log(routeStijn);
  return (
    <>
      <BarChartStijn data={routeStijn} />
    </>
  );
}

export default BarStijnPage;