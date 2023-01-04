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

  return (
    <>
      <ReactFC {...chartConfigs} />
    </>
  );
}
