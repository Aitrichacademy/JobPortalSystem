import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


export interface Detail {
  name: string;
  age: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  companies = [
    {
      name: 'Stark  Industries',
      image: 'assets/images/stark-indus.jpg',
      description: 'Stark Industries is a fictional multi-national conglomerate appearing in American comic books published by Marvel Comics.'
    },
    {
      name: 'Daily Bugle',
      image: 'assets/images/daily-bugle.jpg',
      description: 'The Daily Bugle is a regular fixture in the Marvel Universe, most prominently in Spider-Man '
    },
    {
      name: 'Wayne Technologies',
      image: 'assets/images/wayne-enter.webp',
      description: 'Wayne Technologies is the biggest division of Wayne Enterprises. It is involved in the retrieval and research of alien technology. '
    }
  ];


  constructor() { }

  ngOnInit(): void {
    this.createLineChart();
    // Graph
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',

      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Hiring Percent',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: 'dodgerblue',
          tension: 0.1
        }]
      }
    });

    // Pie Chart
    const pieCtx = document.getElementById('myPieChart') as HTMLCanvasElement;
    new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['Registrations', 'Premium', 'Free'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
    });
  }


  createLineChart() {
    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
        datasets: [
          {
            label: 'New Registrations',
            data: [50, 60, 120, 140],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: 'blue',
            pointBorderColor: 'white',
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'blue',
            pointHoverBorderColor: 'white'
          }
        ]
      },
    })
  }

  applicationsCount = 700;
  shortlistedCount = 414;
  onHoldCount = 177;
  blockedCount = 109;

  totalCount = this.applicationsCount + this.shortlistedCount + this.onHoldCount;

  applicationsProgress = Math.round((this.applicationsCount / this.totalCount) * 100);
  shortlistedProgress = Math.round((this.shortlistedCount / this.totalCount) * 100);
  onHoldProgress = Math.round((this.onHoldCount / this.totalCount) * 100);
  blockedProgress = Math.round((this.blockedCount / this.totalCount) * 100);
}