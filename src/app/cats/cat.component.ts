import { Component } from '@angular/core';
import { Cat } from '../cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {
  title = 'Cats';
  cat = { name: 'Mr. Nice' }
}
