import { Component } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { AboutComponent } from "../about/about.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SkillsComponent, AboutComponent]
})
export class HomeComponent {

}
