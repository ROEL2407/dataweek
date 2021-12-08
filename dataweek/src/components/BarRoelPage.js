import BarChartRoel from "../charts/BarChartRoel";
import { stationData } from "../json/stations";


function BarRoelPage () {
    const routeRoel = [];
    
    stationData.forEach(element => {
        switch (element.name_long) {
            case "Heiloo":
            routeRoel.push({
                id: 0,
                Naam: element.name_long + " - Castricum"
            })
            break;
            case "Castricum":
            routeRoel.push({
                id: 1,
                Naam: element.name_long + " - Zaandam"
            })
            break;
            case "Zaandam":
            routeRoel.push({
                id: 2,
                Naam: element.name_long + " - Ams Sloterdijk"
            })
            break;
            case "Amsterdam Sloterdijk":
            routeRoel.push({
                id: 3,
                Naam: element.name_long + " - Ams Centraal"
            })
            break;
        
            default:
                break;
        }
    });
    routeRoel.sort( function(a, b) { 
        return a.id - b.id  ||  a.naam.localeCompare(b.naam);
      });
    console.log(routeRoel);
  return (
    <>
      <BarChartRoel data={stationData} />
    </>
  );
}

export default BarRoelPage;