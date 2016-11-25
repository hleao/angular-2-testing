import {
  fakeAsync,
  inject,
  TestBed,
} from '@angular/core/testing';
import {
  HttpModule,
  XHRBackend,
  ResponseOptions,
  Response
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing/mock_backend';
import {configureTests} from '../tests.configure';

import {SessionEpics, IQuote, IAPIRecord } from './session.epics';

describe('SessionEpics', () => {
  beforeEach(done => {
    const configure = (testBed: TestBed) => {
      testBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          {
            provide: XHRBackend,
            useClass: MockBackend
          },
          SessionEpics
        ]
      });
    };

    configureTests(configure).then(done);
  });

  it(
    'should process a successful login',
    fakeAsync(
      inject([
        XHRBackend,
        SessionEpics
      ], (mockBackend, sessionEpics) => {
        mockBackend.connections.subscribe(
          (connection: MockConnection) => {
                    let mockResponseBody: IAPIRecord[] = [{
                      title: 'Me',
                      content: 'Testing is a good thing'
                    }];

                    let response = new ResponseOptions({body: JSON.stringify(mockResponseBody)});
                    connection.mockRespond(new Response(response));
          });


                const parsedQuote$ = sessionEpics.getRemoteQuote()
                  .subscribe(quote => {
                    expect(quote.text).toEqual('Testing is a good thing');
                    expect(quote.attribution).toEqual('Me');
                  });

      })));
});
