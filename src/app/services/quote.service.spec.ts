// import {
//   ResponseOptions,
//   Response,
//   Http,
//   BaseRequestOptions,
//   RequestMethod
// } from '@angular/http';
//
// import
// {
//     fakeAsync,
//     inject,
//     TestBed,
//     async
// } from '@angular/core/testing';
//
// import
// {
//     MockBackend,
//     MockConnection
// } from '@angular/http/testing/mock_backend';
//
// import { QuoteService, IQuote, IAPIRecord } from './quote.service';
// import { RandomNumberService } from './random-number.service';
//
// class StubRandomNumberService {
//   pick: (min: number, max: number) => number;
// }
//
// const mockHttpProvider = {
//   deps: [ MockBackend, BaseRequestOptions ],
//   useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
//     return new Http(backend, defaultOptions);
//   }
// }
//
// describe('QuoteService', () => {
//
//   beforeEach(() => {
//     // return [
//     //   QuoteService,
//     //   provide(RandomNumberService, {useClass: StubRandomNumberService}),
//     //   provide('QUOTE_DATA', { useValue: [ {
//     //     text: 'Testing is a good thing',
//     //     attribution: 'Me'
//     //   }]}),
//     //   MockBackend,
//     //   BaseRequestOptions,
//     //   provide(Http, mockHttpProvider)
//     // ];
//
//     TestBed.configureTestingModule({
//     // imports: [HttpModule],
//     providers: [
//       QuoteService,
//         {
//             provide: RandomNumberService,
//             useClass: StubRandomNumberService
//         },
//         {
//             provide: 'QUOTE_DATA',
//             useValue: [ {
//                 text: 'Testing is a good thing',
//                 attribution: 'Me'
//               }]
//         },
//         MockBackend,
//         BaseRequestOptions,
//         {
//             provide: Http,
//             useClass: mockHttpProvider
//         }
//     ]
// });
//   });
//
//   it('should use RandomNumberService to choose a quote',
//   inject(
//     [],
//     () => {
//
//     // stubRandomNumberService.pick = jasmine.createSpy(
//     //   'pick').and.returnValue(0);
//     //
//     // quoteService.getRandomQuote();
//     // expect(stubRandomNumberService.pick).toHaveBeenCalledWith(0, 1);
//   }));
//   //
//   // it('should use an HTTP call to obtain a remote quote',
//   //   inject(
//   //     [QuoteService, MockBackend],
//   //     fakeAsync((service: QuoteService, backend: MockBackend) => {
//   //       backend.connections.subscribe((connection: MockConnection) => {
//   //
//   //         expect(connection.request.method).toBe(RequestMethod.Get);
//   //         expect(connection.request.url).toBe(
//   //           'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand');
//   //       });
//   //
//   //       service.getRemoteQuote();
//   //     })));
//   //
//   // it('should parse the remote quote server response correctly', inject(
//   //   [QuoteService, MockBackend],
//   //   fakeAsync((service: QuoteService, backend: MockBackend) => {
//   //     backend.connections.subscribe((connection: MockConnection) => {
//   //
//   //       let mockResponseBody: IAPIRecord[] = [{
//   //         title: 'Me',
//   //         content: 'Testing is a good thing'
//   //       }];
//   //
//   //       let response = new ResponseOptions({body: JSON.stringify(mockResponseBody)});
//   //       connection.mockRespond(new Response(response));
//   //     });
//   //
//   //     const parsedQuote$ = service.getRemoteQuote()
//   //       .subscribe(quote => {
//   //         expect(quote.text).toEqual('Testing is a good thing');
//   //         expect(quote.attribution).toEqual('Me');
//   //       });
//   //   })));
// });
