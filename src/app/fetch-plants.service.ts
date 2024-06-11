import { Injectable } from '@angular/core';
import { PlantItem } from './plant-item';

@Injectable({
  providedIn: 'root',
})
export class FetchPlantsService {
  plants: PlantItem[] = [
    {
      name: 'Fiddle Leaf Fig',
      price: 20,
      description: 'This is a description of the plant.',
      imageURL: 'assets/fiddle-leaf-fig.jpg',
    },
    {
      name: 'Snake Plant',
      price: 25,
      description: 'This is a description of the plant.',
      imageURL: 'assets/snake-plant.jpg',
    },
    {
      name: 'Money Tree',
      price: 30,
      description: 'This is a description of the plant.',
      imageURL: 'assets/money-tree.jpg',
    },
    {
      name: 'Bird of Paradise',
      price: 35,
      description: 'This is a description of the plant.',
      imageURL: 'assets/bird-of-paradise.jpg',
    },
  ];
}
