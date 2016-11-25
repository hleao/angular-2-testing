import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const BASE_URL = '/api';

export type IAPIRecord = {
  content: string,
  title: string
};

export type IQuote = {
  text: string,
  attribution: string
};

@Injectable()
export class SessionEpics {
  constructor(private http: Http) {}

  // login = (action$: Observable<IPayloadAction>) => {
  //   return this.http.post(`${BASE_URL}/auth/login`, payload)
  //         .map(result => ({
  //           type: SessionActions.LOGIN_USER_SUCCESS,
  //           payload: result.json().meta
  //         }))
  //       });
  // }

  getRemoteQuote(): Observable<IQuote> {
    return this.http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand')
      .map<IAPIRecord[]>(response => response.json())
      .map<IAPIRecord>(records => records[0])
      .map<IQuote>(record => {
        return {
          text: record.content,
          attribution: record.title
        };
      });
  }
}
