import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { PlantItem } from '../plant-item';

@Component({
  selector: 'app-plant-card',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './plant-card.component.html',
  styleUrl: './plant-card.component.css'
})
export class PlantCardComponent {
  @Input() plant: PlantItem | undefined;
}
