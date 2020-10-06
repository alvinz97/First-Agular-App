import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  // tslint:disable-next-line: adjacent-overload-signatures
  // tslint:disable-next-line: typedef
  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
