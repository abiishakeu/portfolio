import { Component, Input } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';
import { CertCardComponent } from "../cert-card/cert-card.component";


@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css',
    imports: [ProjectCardComponent, CommonModule, CertCardComponent]
})
export class PortfolioComponent {

   
}
