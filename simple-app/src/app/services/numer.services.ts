import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";

@Injectable()
export class NumberService {

  private API = "//localhost:8080/"

  constructor(private http: HttpClient) {
  }

  generateNumbers(amount: number): Observable<any> {
    if (amount > 0) {
      return this.http.get(this.API + 'generateNumbers/' + amount);
    }
  }

  generateAverage(numbers: number[]): Observable<any> {
    return this.http.get(this.API + 'generateAverage/' + numbers);
  }
}
