import { Component } from '@angular/core';
import { Load } from './loads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-training-presentation';

  loads: Load[] = [];
  loadNumbers: string[] = [];

  setLoads(loads: Load[]) {
    this.loads = loads;
  }

  setLoadNumbers(loadNumbers: string[]) {
    this.loadNumbers = loadNumbers;
  }
}
