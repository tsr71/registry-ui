import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {
  endpoint:string = 'http://localhost:5000/registry';

  constructor(private http: HttpClient) { }
  getServiceCatalog(): Observable<any> {
    return this.http.get(this.endpoint).pipe(
    map(this.extractData));
}
private extractData(res: Response) {
  let body = res;
  return body || { };
}
}
