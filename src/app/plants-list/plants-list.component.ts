import { Component, inject } from '@angular/core';
import { FetchPlantsService } from '../fetch-plants.service';
import { PlantCardComponent } from '../plant-card/plant-card.component';

@Component({
  selector: 'app-plants-list',
  standalone: true,
  imports: [PlantCardComponent],
  templateUrl: './plants-list.component.html',
  styleUrl: './plants-list.component.css'
})
export class PlantsListComponent {
  plantService = inject(FetchPlantsService);
  plants = this.plantService.plants;
}
