import { Databoardcontols } from "../components/Databoardcontols";
import { Databoardtable } from "../components/Databoardtable";
import { Lowsootfooter } from "../components/Lowsootfooter";
import { Databoardtablec } from "../components/Databoardtablec";
import { Databoardtablee } from "../components/Databoardtablee";
import { useDataboard } from "../contexts/Databoard";
import { Datainmodal } from "../components/Datainmodal";
import { Sidenavv3 } from "../components/sidenav/Sidenavv3";
import { Topbarv3 } from "../components/topbar/Topbarv3";
import { Databoardtablef } from "../components/Databoardtablef";
import { useParams } from "react-router-dom";
import { Databoardtableco } from "../components/Databoardtableco";
import { Databoardtables3f } from "../components/Databoardtables3f";
import { Databoardtables3e } from "../components/Databoardtables3e";
import { Databoardtablegp } from "../components/Databoardtablegp";
import { Databoardtableref } from "../components/Databoardtableref";
import { Databoardtabledel } from "../components/Databoardtabledel";
export function Databoard() {
  const { name } = useParams();
  const { databoardstate, databoarddispatch } = useDataboard();
  return (
    <>
      <div className="dcontainer">
        <Sidenavv3 />
        <div className="datamain">
          <Topbarv3 />
          <div className="databoardmaincontent">
            <h1 className="databoardheader">Data-in Board</h1>
            <div className="databoardupoptions">
              <div className="databoardupoption">
                <button
                  onClick={() =>
                    databoarddispatch({ type: "SHOW_SHEETS_MODAL" })
                  }
                  className="databoardupoption_btn"
                >
                  <span className="databoardupoption_btntxt">connect</span>
                  <img
                    className="databoardupoption_btnlogo"
                    src="https://www.gstatic.com/images/branding/product/2x/hh_sheets_64dp.png"
                    alt="Google_Sheets"
                  />
                </button>
              </div>
            </div>
            <div className="databoardtablecont">
              <div className="databoardtabletop">
                {name === "travel" && (
                  <div>
                    <h2 className="databoardtabletop__header">Travel</h2>
                    <p className="databoardtabletop__norows">6 results found</p>
                  </div>
                )}
                {name === "electricity" && (
                  <div>
                    <h2 className="databoardtabletop__header">Electricity</h2>
                    <p className="databoardtabletop__norows">6 results found</p>
                  </div>
                )}
                {name === "cargo" && (
                  <div>
                    <h2 className="databoardtabletop__header">Cargo</h2>
                    <p className="databoardtabletop__norows">6 results found</p>
                  </div>
                )}
                {name === "fuel" && (
                  <div>
                    <h2 className="databoardtabletop__header">Fuel</h2>
                    <p className="databoardtabletop__norows">6 results found</p>
                  </div>
                )}
                {name === "commute" && (
                  <div>
                    <h2 className="databoardtabletop__header">Commute</h2>
                    <p className="databoardtabletop__norows">6 results found</p>
                  </div>
                )}
                {name === "s3fuel" && (
                  <div>
                    <h2 className="databoardtabletop__header">
                      Fuel (Scope 3)
                    </h2>
                    <p className="databoardtabletop__norows">6 results found</p>
                  </div>
                )}
                {name === "s3electricity" && (
                  <div>
                    <h2 className="databoardtabletop__header">
                      Electricity (Scope 3)
                    </h2>
                    <p className="databoardtabletop__norows">6 results found</p>
                  </div>
                )}
                {name === "gaspurchase" && (
                  <div>
                    <h2 className="databoardtabletop__header">Gas Purchase</h2>
                    <p className="databoardtabletop__norows">6 results found</p>
                  </div>
                )}

                <div className="databoardtabletop__controls">
                  <Databoardcontols />
                </div>
              </div>
              <div className="databoardtable">
                {name === "travel" && <Databoardtable />}
                {name === "cargo" && <Databoardtablec />}
                {name === "electricity" && <Databoardtablee />}
                {name === "fuel" && <Databoardtablef />}
                {name === "commute" && <Databoardtableco />}
                {name === "s3fuel" && <Databoardtables3f />}
                {name === "s3electricity" && <Databoardtables3e />}
                {name === "gaspurchase" && <Databoardtablegp />}
                {name === "refrigeration" && <Databoardtableref />}
                {name === "delivery" && <Databoardtabledel />}
              </div>
            </div>
          </div>
          <Lowsootfooter />
          {databoardstate.sheetsmodal && <Datainmodal />}
        </div>
      </div>
    </>
  );
}
