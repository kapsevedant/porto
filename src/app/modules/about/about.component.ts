import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  harImg:string = './assets/harrier.png'
  locImg:string='./assets/locationguru1.jpg'
   company=[
     {
       img:this.harImg,
       name:'Harrier Information Systems',
       des:'Software Engineer',
       dur:'Jan/2025 - Present',
       desc:'As a Software Developer at Harrier, I developed scalable web applications using Angular, collaborating with the backend team to integrate REST APIs, optimize performance, and ensure seamless data flow between the frontend and backend systems.'
     },
     {
       img:this.locImg,
       name:'LocationGuru Solutions Pvt. Ltd.',
       des:'Frontend Engineer (Intern)',
       dur:'Feb/2024 - Aug/2023',
       desc:'During my internship at LocationGuru, I gained hands-on experience in Angular development. I contributed to multiple projects, focusing on creating responsive user interfaces and integrating APIs for dynamic data.'
     }
   ]
}
