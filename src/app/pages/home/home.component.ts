import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredProjects = PROJECTS.filter(p => p.featured);
}
