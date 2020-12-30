import React, { PureComponent } from "react";
import Highcharts from "highcharts";


interface IOptions{

}

export default class PieChart extends PureComponent {
  instance:any;

  options:IOptions = {
    chart: {
      type: "pie"
    },
    title: {
      text: "Pie Chart"
    },
    series: [{
        name: 'Players',
        colorByPoint: true,
        data: [{
          name: 'Dota 2',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Leage of Legends',
          y: 11.84
        }, {
          name: 'CS GO',
          y: 10.85
        }, {
          name: 'Pubg',
          y: 4.67
        }, {
          name: 'Cod',
          y: 4.18
        },]
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            plotOptions: {
              series: {
                dataLabels: {
                  format: '<b>{point.name}</b>'
                }
              }
            }
          }
        }]
      }
  };

  componentDidMount() {
    this.instance = Highcharts.chart("dummy-id", this.options);
  }

  render() {
    return (
      <div>
        <div id="dummy-id"/>
      </div>
    );
  }
}
