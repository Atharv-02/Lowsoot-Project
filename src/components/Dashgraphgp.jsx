import { Linegraph } from "./Linegraph";
// import { Bargraph } from "./Bargraph";
import { chartarray } from "../sampledata/data";
import { Areagraph } from "./Areagraph";
import { color3 } from "../color";
import { Piegraph } from "./Piegraph";
export function Dashgraphgp() {
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">
          Gas Purchase in CO<sub>2</sub>e
        </h2>
        <div className="dashgraphline__cont">
          <Linegraph vizarray={chartarray} colorvalue={color3} />
        </div>
      </div>
      {/* <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Road Travel CO<sub>2</sub>e</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={chartarray} />
        </div>
      </div> */}
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">
          Gas Purchase in CO<sub>2</sub>e
        </h2>
        <div className="dashgraphline__cont">
          <Piegraph per1={13} name1="Gas Purchase" />
        </div>
      </div>
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">
          Gas Purchase in CO<sub>2</sub>e
        </h2>
        <div className="dashgraphline__cont">
          <Areagraph vizarray={chartarray} colorvalue={color3} />
        </div>
      </div>
    </div>
  );
}
