import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Load {
  loadNumber: string;
  commodity: string;
  randomValue: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoadsService {

  constructor(private readonly http: HttpClient) { }

  getLoads(): Observable<Load[]> {
    return this.http.get<Object[]>('/assets/mock-loads.json').pipe(map((loads: Object[]) => this.addRandomValue(loads)))
  }

  addRandomValue(objects: Object[]): Load[] {
    return objects.map((object: any) => ({...object, randomValue: Math.random()} as Load))
  }

  getLoadNumbers() {
    return this.getLoads().pipe(map((loads: Load[]) => this.extractLoadNumbers(loads)))
  }

  extractLoadNumbers(loads: Load[]) {
    return loads.map(load => load.loadNumber)
  }
}
