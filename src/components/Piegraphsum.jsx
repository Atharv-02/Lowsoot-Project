//import { ResponsiveContainer, PieChart, Pie } from 'recharts';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
  {
    label: 'Travel',
    value: '23',
  },
  {
    label: 'Cargo',
    value: '25',
  },
  {
    label: 'Electricity',
    value: '17',
  },
  {
    label: 'Refrigeration',
    value: '17',
  },
  {
    label: 'Delivery',
    value: '18',
  },
];

const chartConfigs = {
  type: 'pie2d', // The chart type
  width: '100%', // Width of the chart
  height: '100%', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: 'Distribution Of CO<sub>2</sub>',
      bgColor: '#ffffff',
    },
    // Chart Data
    data: chartData,
  },
};

// export function Piegraphsumblock() {
//   const datax = [
//     { name: 'Travel', value: 23, fill: '#0088fe' },
//     { name: 'Cargo', value: 25, fill: '#00c49f' },
//     { name: 'Electricity', value: 17, fill: '#00049f' },
//     // { name: "Fuel", value: 22, fill: "#ff0000" },
//     { name: 'Refrigeration', value: 17, fill: '#ff8042' },
//     { name: 'Delivery', value: 18, fill: '#8884d8' },
//   ];

//   return (
//     <>
//       <div className='dashgraphbarcont'>
//         <h2 className='dashgraph__header'>
//           Distribution of CO<sub>2</sub>e
//         </h2>
//         <div className='dashgraphbar__cont'>
//           <ResponsiveContainer width='100%' height='100%'>
//             <PieChart height={250}>
//               <Pie
//                 data={datax}
//                 cx='50%'
//                 cy='50%'
//                 outerRadius={100}
//                 fill='#8884d8'
//                 dataKey='value'
//                 label={({
//                   cx,
//                   cy,
//                   midAngle,
//                   innerRadius,
//                   outerRadius,
//                   value,
//                   index,
//                 }) => {
//                   console.log('handling label?');
//                   const RADIAN = Math.PI / 180;
//                   const radius = 25 + innerRadius + (outerRadius - innerRadius);
//                   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//                   const y = cy + radius * Math.sin(-midAngle * RADIAN);
//                   return (
//                     <text
//                       x={x}
//                       y={y}
//                       textAnchor={x > cx ? 'start' : 'end'}
//                       dominantBaseline='central'
//                     >
//                       {datax[index].name} ({value})
//                     </text>
//                   );
//                 }}
//               />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </>
//   );
// }
const Piegraphsum = () => {
  return (
    <>
      <ReactFC {...chartConfigs} />
    </>
  );
};

export default Piegraphsum;
