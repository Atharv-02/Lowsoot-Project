export function Databoardtablee() {
  const lo = [1, 2, 3, 4, 5, 6];
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
              <tr key={item} className="databoardtable__tabletr">
                <td className="databoardtable__tabletd">25 Jun 2022</td>
                <td className="databoardtable__tabletd">
                  {(idx + 1) * 1000} kWh
                </td>
                <td className="databoardtable__tabletd">Coal</td>
                <td className="databoardtable__tabletd">-</td>
                <td className="databoardtable__tabletd">coming soon</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
