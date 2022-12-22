import { Component } from '@angular/core';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent {
  categories = [
    ['Sun', 'brightness_5'],
    ['Moon', 'brightness_1'],
    ['Hotel', 'hotel'],
    ['Beach', 'beach_access'],
    ['Spa', 'spa'],
    ['Sun', 'brightness_5'],
    ['Moon', 'brightness_1'],
    ['Hotel', 'hotel'],
    ['Beach', 'beach_access'],
    ['Spa', 'spa']
  ]
}
