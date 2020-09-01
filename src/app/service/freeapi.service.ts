import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpClient: HttpClient) { }

  getData(url): Observable<any> {
    return this.httpClient.get<any>(url)
  }
}
