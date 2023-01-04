import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
// import { chart1data } from "../mockdata";
// import { useVisuals } from "../contexts/Visualcontext";
import { chartarray } from "../sampledata/data";
import { Areagraph } from "./Areagraph";
import { color1 } from "../color";
import { Piegraph } from "./Piegraph";
export function Dashgraphc() {
  // const { visualstate } = useVisuals();
  // console.log({ cargowale: visualstate.cargo });
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">
          Air Cargo CO<sub>2</sub>e
        </h2>
        <div className="dashgraphline__cont">
          <Linegraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">
          Cargo in CO<sub>2</sub>e
        </h2>
        <div className="dashgraphline__cont">
          <Piegraph per1={13} name1="Cargo" />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">
          Road Cargo CO<sub>2</sub>e
        </h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">
          Air Cargo in CO<sub>2</sub>e
        </h2>
        <div className="dashgraphline__cont">
          <Areagraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
    </div>
  );
}
