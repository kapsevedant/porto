import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  harImg:string = './assets/harrier.png'
  locImg:string='./assets/locationguru1.jpg'
  projects=[
    {
      logo:this.harImg,
      name:'NStar',
      desc:'At Harrier, I worked on NStar, a scalable web application built with Angular. I collaborated with the backend team to integrate REST APIs for seamless data flow and optimized performance for a smooth user experience.'
    },
    {
      logo: this.locImg,
      name: 'Teampilot UI',
      desc:'During my internship at LocationGuru, I contributed to building the Teampilot UI using Angular, focusing on creating responsive and interactive user interfaces. I worked on integrating API calls and optimizing frontend performance.'
    },
    {
      logo: this.locImg,
      name: 'Smart Track',
      desc:'At LocationGuru, I was involved in the development of Smart Track, an application built with Angular to track user data and provide insights. I integrated API calls and ensured responsive design for an enhanced user experience.'
    }
  ]
}
