<<<<<<< HEAD
import { ResponsiveContainer, PieChart, Pie } from "recharts";
export function Piegraphsumblock() {
  const datax = [
    { name: "Travel", value: 23, fill: "#0088fe" },
    { name: "Cargo", value: 25, fill: "#00c49f" },
    { name: "Electricity", value: 17, fill: "#00049f" },
    // { name: "Fuel", value: 22, fill: "#ff0000" },
    { name: "Refrigeration", value: 17, fill: "#ff8042" },
    { name: "Delivery", value: 18, fill: "#8884d8" },
  ];

  return (
    <>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">
          Distribution of CO<sub>2</sub>e
        </h2>
        <div className="dashgraphbar__cont">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart height={250}>
              <Pie
                data={datax}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
=======
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

export function Piegraphsumblock() {
  const datax = [
    { name: 'Travel', value: 23, fill: '#0088fe' },
    { name: 'Cargo', value: 25, fill: '#00c49f' },
    { name: 'Electricity', value: 17, fill: '#00049f' },
    // { name: "Fuel", value: 22, fill: "#ff0000" },
    { name: 'Refrigeration', value: 17, fill: '#ff8042' },
    { name: 'Delivery', value: 18, fill: '#8884d8' },
  ];

  return (
    <>
      <div className='dashgraphbarcont'>
        <h2 className='dashgraph__header'>
          Distribution of CO<sub>2</sub>e
        </h2>
        <div className='dashgraphbar__cont'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart height={250}>
              <Pie
                data={datax}
                cx='50%'
                cy='50%'
                outerRadius={100}
                fill='#8884d8'
                dataKey='value'
>>>>>>> dcbe1ce800c35e3f7c92fdfc0c37f7e95c8557b0
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
<<<<<<< HEAD
                  console.log("handling label?");
=======
                  console.log('handling label?');
>>>>>>> dcbe1ce800c35e3f7c92fdfc0c37f7e95c8557b0
                  const RADIAN = Math.PI / 180;
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text
                      x={x}
                      y={y}
<<<<<<< HEAD
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
=======
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline='central'
>>>>>>> dcbe1ce800c35e3f7c92fdfc0c37f7e95c8557b0
                    >
                      {datax[index].name} ({value})
                    </text>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
