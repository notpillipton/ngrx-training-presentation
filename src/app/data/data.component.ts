import { Component, Input } from '@angular/core';
import { Load } from '../loads/loads.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
@Input() loads: Load[] = [];
@Input() loadNumbers: string[] = [];

}
