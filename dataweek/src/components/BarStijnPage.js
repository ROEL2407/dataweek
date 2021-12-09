import BarChartStijn from "../charts/stijn/BarChartStijn";
import BarChart2Stijn from "../charts/stijn/BarChart2Stijn";
import BarChart3Stijn from "../charts/stijn/BarChart3Stijn";
import { stationData } from "../json/stations";
import { mondkapData } from "../json/mondkapjes";


function BarStijnPage() {
    const routeStijn = [];
    const mondkap = mondkapData;
    let stijndata = [];
    if (mondkap[1].treinroute === "treinStijn") {
      stijndata = mondkap[1].mondkapjes;
    }
    console.log(stijndata);
    
    stationData.forEach(element => {
        switch (element.name_long) {
            case "Almelo":
                routeStijn.push({
                id: 0,
                Naam: element.name_long + " - Deventer",
                mondkapjes: stijndata.alm_dev
            })
            break;

            case "Deventer":
                routeStijn.push({
                id: 1,
                Naam: element.name_long + " - Apeldoorn",
                mondkapjes: stijndata.dev_apl
            })
            break;

            case "Apeldoorn":
                routeStijn.push({
                id: 2,
                Naam: element.name_long + " - Amersfoort Centraal",
                mondkapjes: stijndata.apl_amf
            })
            break;

            case "Amersfoort Centraal":
                routeStijn.push({
                id: 3,
                Naam: element.name_long + " - Hilversum",
                mondkapjes: stijndata.amf_hil
            })
            break;

            case "Hilversum":
                routeStijn.push({
                id: 4,
                Naam: element.name_long + " - Ams Centraal",
                mondkapjes: stijndata.hil_ams
            })
            break;
        
            default:
                break;
        }
    });
    console.log(routeStijn);
    routeStijn.sort( function(a, b) { 
        return a.id - b.id  ||  a.naam.localeCompare(b.naam);
      });
  return (
    <>
    <BarChartStijn data={routeStijn} />
      <BarChart2Stijn data={routeStijn} />
      <BarChart3Stijn data={routeStijn} />
    </>
  );
}

export default BarStijnPage;