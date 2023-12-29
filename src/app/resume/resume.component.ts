import { Component, Renderer2 } from '@angular/core';
import { EducationComponent } from "../education/education.component";
import { ExperienceComponent } from "../experience/experience.component";
import { AchComponent } from "../ach/ach.component";


@Component({
    selector: 'app-resume',
    standalone: true,
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.css',
    imports: [EducationComponent, ExperienceComponent, AchComponent]
})
export class ResumeComponent {
  
  constructor(private renderer: Renderer2){}

  DownloadFile() {
     const link = this.renderer.createElement('a');
     link.setAttribute('target', '_blank');
     link.setAttribute('href', '../../assets/Resume.pdf');
     link.setAttribute('download', 'Resume.pdf');
     link.click();
     link.remove();

  }


  }


