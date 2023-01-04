import { border, borderRadius, color } from "@mui/system";
import { useState } from "react";

export function Databoardtablee() {

  const [showInput, setShowInput] = useState(false);
  const [energy, setEnergy] = useState("");
  const [dates, setDate] = useState('');

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const [lo, setLo] = useState([
    {"date": "Jun 25, 2022", "energy": 1000},
    {"date": "Jun 25, 2022", "energy": 1000},
    {"date": "Jun 26, 2022", "energy": 2000},
    {"date": "Jun 27, 2022", "energy": 3000},
    {"date": "Jun 28, 2022", "energy": 4000},

  ]);

  return (
    <>
      <table className="databoardtable__table">
        <thead className="databoardtable__tablehead">
          <tr className="databoardtable__theadtr">
            {/* <th className="databoardtable__theadth" scope="col">
                <span className="blank__letters">check</span>
              </th> */}
            <th className="databoardtable__theadth" scope="col">
              date
            </th>
            <th className="databoardtable__theadth" scope="col">
              Energy
            </th>
            <th className="databoardtable__theadth" scope="col">
              Type
            </th>
            <th className="databoardtable__theadth" scope="col">
              Source
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
                <td className="databoardtable__tabletd">{item.date}</td>
                <td className="databoardtable__tabletd">
                  {item.energy} kWh
                </td>
                <td className="databoardtable__tabletd">{item.type}</td>
                <td className="databoardtable__tabletd">-</td>
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
            <div style={{fontSize: "14px"}}>
              Enter Date
              <input
                type="date"
                value={dates}
                onChange={handleChange}
                style={{
                  appearance: 'none',
                  border: 'solid 0.5px',
                  borderRadius: '4px',
                  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                  padding: '8px',
                  margin: '0px 8px 16px 8px',
                }}
              />
              Enter No. of Units 
              <input type={"number"} value={energy} style={{
                appearance: 'none',
                border: 'solid 0.5px',
                padding:"8px",
                margin: "0px 8px 16px 8px",
                borderRadius: "4px",
                height: "30px"
              }} required={true} onChange = {(e) => {
                const value = parseInt(e.target.value)  ;
                if(value > -1){
                  setEnergy(value)
                }
                else if(e.target.value === ""){
                  setEnergy("")
                }
                
              }}/> 
            
            <button id="addButton" style={{
              padding:"8px",
              borderRadius: "4px",
              color: "white",
              backgroundColor: "#4d7cfe",
              }}
              onClick={() => {
                /*const change = document.querySelector(".databoardtable__tablebody")
                change.innerHTML = change.innerHTML + `
                <tr class="databoardtable__tabletr">
                <td class="databoardtable__tabletd">25 Jun 2022</td>
                <td class="databoardtable__tabletd">
                ${energy} kWh
                </td>
                <td class="databoardtable__tabletd">Coal</td>
                <td class="databoardtable__tabletd">-</td>
                <td class="databoardtable__tabletd">coming soon</td>
              </tr>
                `*/
                if(energy > -1 && energy !== "" && dates !== ""){
                  const dateString = dates;
                  const date = new Date(dateString);
                  const options = {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  };
                  
                  const formattedDate = date.toLocaleDateString("en-US", options);
                  setLo([...lo,{"date": formattedDate, "energy": energy}]);
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
