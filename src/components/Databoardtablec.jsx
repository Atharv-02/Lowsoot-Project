import { useState } from "react";
export function Databoardtablec() {
  const [showInput, setShowInput] = useState(false);
  const [energy, setEnergy] = useState("");
  const [lo, setLo] = useState([1000, 2000, 3000, 4000, 5000, 6000]);
  return (
    <>
        <table className="databoardtable__table">
          <thead className="databoardtable__tablehead">
            <tr className="databoardtable__theadtr">
              {/* <th className="databoardtable__theadth" scope="col">
                <span className="blank__letters">check</span>
              </th> */}
              <th className="databoardtable__theadth" scope="col">
                Date
              </th>
              <th className="databoardtable__theadth" scope="col">
                Type of fuel used
              </th>
              <th className="databoardtable__theadth" scope="col">
                Type of vehicle used
              </th>
              <th className="databoardtable__theadth" scope="col">
                Amount of distance travelled
              </th>
            </tr>
          </thead>
          <tbody className="databoardtable__tablebody">
            {[...lo].map((item, idx) => {
              // key={item._id}
              return (
                <tr key={idx} className="databoardtable__tabletr">
                  {/* <td>
                    <div className="databoardtable__tablecheck">
                      <input type="checkbox" defaultChecked />
                    </div>
                  </td> */}
                  <td className="databoardtable__tabletd">25 May 2022</td>
                  <td className="databoardtable__tabletd">
                    {idx % 2 === 0 ? "Road" : "Air"}
                  </td>
                  <td className="databoardtable__tabletd">{idx * 2}</td>
                  <td className="databoardtable__tabletd">{item} Kms</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding:"8px",
        }}>{
          showInput ? (
            <div style={{
              fontSize: "14px"
            }}> Enter No. of Units 
              <input type={"number"} value={energy} style={{
              padding:"8px",
              margin: "0px 8px",
              borderRadius: "4px",
              height: "30px"
              }} required={true} onChange = {(e) => {
                const value = parseInt(e.target.value)  ;
                if(value > -1){setEnergy(value)}
                else if(e.target.value === ""){setEnergy("")}
                
              }}/> 
            
            <button id="addButton" style={{
              padding:"8px",
              borderRadius: "4px",
              color: "white",
              backgroundColor: "#4d7cfe",
              }}
              onClick={() => {
                if(energy > -1 && energy !== ""){
                  setLo([...lo,energy])
                  setShowInput(false)
                }
              }}
              >Add Row</button></div>
          ) : (
            <button id="addButton" style={{
            padding:"8px",
            borderRadius: "4px",
            color: "white",
            backgroundColor: "#4d7cfe",
            display: "hidden"
            }}
            onClick={() => setShowInput(true)}
            >Add Row</button>)}
        </div>
        
    </>
  );
}
