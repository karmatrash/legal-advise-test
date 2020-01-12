import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiRestService {
  constructor(private http: HttpClient) { }

  public get(url: string, options?: {
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    responseType?: 'json';
  }): Observable<any> {

    const defOptions = {};

    return this.http.get(environment.BASE_API_URL + url, { ...defOptions, ...options })
      .pipe(catchError((error: HttpErrorResponse) => throwError(error || 'Server error')));
  }

  public post(url: string, body?: any): Observable<any> {
    return this.http.post(environment.BASE_API_URL + url, body)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error || 'Server error')));
  }

  public put(url: string, body?: any, options?: any): Observable<any> {
    return this.http.put(environment.BASE_API_URL + url, body, options)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error || 'Server error')))
      .pipe(tap((res) => {
        return res;
      }));
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(environment.BASE_API_URL + url)
      .pipe(catchError((error: HttpErrorResponse) => {
        return throwError(error || 'Server error');
      }));
  }
}
