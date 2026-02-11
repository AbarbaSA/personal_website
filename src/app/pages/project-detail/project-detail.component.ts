import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  project: Project | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = PROJECTS.find(p => p.id === id);

    if (!this.project) {
      this.router.navigate(['/projects']);
    }
  }
}
