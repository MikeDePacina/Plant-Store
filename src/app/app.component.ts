import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlantsListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plant-store';
}
