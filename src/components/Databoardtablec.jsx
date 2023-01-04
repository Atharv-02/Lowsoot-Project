export function Databoardtablec() {
  const lo = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {false ? (
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>loading...</h1>
      ) : (
        <table className="databoardtable__table">
          <thead className="databoardtable__tablehead">
            <tr className="databoardtable__theadtr">
              <th className="databoardtable__theadth" scope="col">
                date
              </th>
              <th className="databoardtable__theadth" scope="col">
                cargo
              </th>
              <th className="databoardtable__theadth" scope="col">
                weight
              </th>
              <th className="databoardtable__theadth" scope="col">
                distance
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
                <tr key={item} className="databoardtable__tabletr">
                  <td className="databoardtable__tabletd">25 Jul 2022</td>
                  <td className="databoardtable__tabletd">
                    {idx % 2 === 0 ? "Road" : "Air"}
                  </td>
                  <td className="databoardtable__tabletd">{idx * 10} kgs</td>
                  <td className="databoardtable__tabletd">{idx * 100} kms</td>
                  <td className="databoardtable__tabletd">
                    {idx % 2 === 0 ? "Automobile" : "Domestic"}
                  </td>
                  <td className="databoardtable__tabletd">-</td>
                  <td className="databoardtable__tabletd">coming soon</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
