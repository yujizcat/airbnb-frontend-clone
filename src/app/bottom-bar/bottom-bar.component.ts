import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent {
   bottoms = [
    ['Explore', 'search'],
    ['Wishlists','favorite_border'],
    ['Trips', "train"],
    ['Inbox',"inbox"],
    ['Profile',"account_circle"]
]
}
