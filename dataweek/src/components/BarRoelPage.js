import BarChartRoel from "../charts/BarChartRoel";
import { stationData } from "../json/stations";
import { mondkapData } from  "../json/mondkapjes";


function BarRoelPage () {
    const routeRoel = [];
    const mondkap = mondkapData;
    let roeldata = [];
    if (mondkap[0].treinroute === "treinRoel") {
      roeldata = mondkap[0].mondkapjes;
    }
    
    stationData.forEach(element => {
        switch (element.name_long) {
            case "Heiloo":
            routeRoel.push({
                id: 0,
                Naam: element.name_long + " - Castricum",
                mondkapjes: roeldata.hei_cas
            })
            break;
            case "Castricum":
            routeRoel.push({
                id: 1,
                Naam: element.name_long + " - Zaandam",
                mondkapjes: roeldata.cas_zaa
            })
            break;
            case "Zaandam":
            routeRoel.push({
                id: 2,
                Naam: element.name_long + " - Ams Sloterdijk",
                mondkapjes: roeldata.zaa_slo
            })
            break;
            case "Amsterdam Sloterdijk":
            routeRoel.push({
                id: 3,
                Naam: element.name_long + " - Ams Centraal",
                mondkapjes: roeldata.slo_ams
            })
            break;
        
            default:
                break;
        }
    });
    routeRoel.sort( function(a, b) { 
        return a.id - b.id  ||  a.naam.localeCompare(b.naam);
      });
    console.log(routeRoel)
  return (
    <>
      <BarChartRoel data={routeRoel} />
    </>
  );
}

export default BarRoelPage;