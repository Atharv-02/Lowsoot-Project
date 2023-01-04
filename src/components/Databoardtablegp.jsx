export function Databoardtablegp() {
  const loo = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {false ? (
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>loading...</h1>
      ) : (
        <table className="databoardtable__table">
          <thead className="databoardtable__tablehead">
            <tr className="databoardtable__theadtr">
              <th className="databoardtable__theadth" scope="col">
                Gas
              </th>
              <th className="databoardtable__theadth" scope="col">
                GAS GWP
              </th>
              <th className="databoardtable__theadth" scope="col">
                Purchased Amount
              </th>
            </tr>
          </thead>
          <tbody className="databoardtable__tablebody">
            {[...loo].map((item, idx) => {
              return (
                <tr key={idx} className="databoardtable__tabletr">
                  <td className="databoardtable__tabletd">
                    {idx % 2 === 0 ? "SF6" : "HFC-RX"}
                  </td>
                  <td className="databoardtable__tabletd">{(idx + 1) * 100}</td>
                  <td className="databoardtable__tabletd">
                    {(idx + 1) * 1000}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
