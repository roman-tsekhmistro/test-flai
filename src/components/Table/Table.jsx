/** @format */

import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

Chart.register(BarElement, CategoryScale, LinearScale, Legend, ChartDataLabels);

const StyledTableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  height: 295;

  & canvas {
    height: 295px;
    width: 874px;
  }
`;

const Table = () => {
  const data = {
    labels: [
      'MO',
      'TU',
      'WE',
      'TH',
      'FR',
      'SA',
      `SU 03.04`,
      'MO',
      'TU',
      'WE',
      'TH',
      'FR',
    ],
    datasets: [
      {
        label: 'Growth',
        data: [50000, 70000, 100000, 120000, 180000],
        backgroundColor: '#C704FE',
      },
      {
        label: 'AI Prediction',
        data: [...[...Array(3)].fill(null), 30000, 20000],
        backgroundColor: '#D1FD0A',
      },
      {
        data: [
          ...[...Array(5)].fill(null),
          250000,
          240000,
          320000,
          380000,
          500000,
          500000,
        ],
        backgroundColor: '#d1fd0a',
      },
      {
        data: [...[...Array(5)].fill(null), 30000, 60000],
        backgroundColor: '#C704FE',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        display: true,
        title: {
          display: true,
          text: 'Posts, AI Prediction',
          color: '#8e8f92',
          font: {
            fontFamily: 'Montserrat',
            size: 12,
            weight: 600,
            lineHeight: 1.67,
          },
          margin: { bottom: 3 },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',

        labels: {
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          fontSize: '12px',
          height: '167%',
          color: '#fff',
          filter: function (item, data = data) {
            if (item.text !== undefined) {
              return { display: false };
            }
          },
        },
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: function (value, context) {
          value != null || undefined ? value + 'K' : null;

          if (value <= 300000) {
            context.chart._plugins._cache[1].options.anchor = 'center';
            context.chart._plugins._cache[1].options.align = 'center';
          }
        },
        labels: {
          title: {
            fontWeight: 700,
            fontSize: 10,
            lineHeight: '200%',
            color: '#fff',
          },
        },
      },
    },
  };

  return (
    <StyledTableWrapper>
      <Bar data={data} options={options} />
    </StyledTableWrapper>
  );
};

export default Table;
