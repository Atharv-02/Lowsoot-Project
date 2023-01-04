
import { useState } from "react";

export function Databoardtablee() {

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
              No of Unit
            </th>
            <th className="databoardtable__theadth" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="databoardtable__tablebody"> 
          {[...lo].map((item, idx) => {
            return (
              <tr key={idx} className="databoardtable__tabletr">
                <td className="databoardtable__tabletd">25 Jun 2022</td>
                <td className="databoardtable__tabletd">
                  {item}
                </td>
                <td className="databoardtable__tabletd">coming soon</td>
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
