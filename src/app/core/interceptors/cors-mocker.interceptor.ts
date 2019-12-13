import {Inject, inject, Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import {config, Observable} from 'rxjs';
import {APP_CONFIG, IAppConfig} from '../../app.config';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class CorsMocker implements HttpInterceptor {

  constructor(
    @Inject(APP_CONFIG) private conf: IAppConfig
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const mock = {
      url: `${this.conf.mockCORSServer}${encodeURIComponent(request.url)}`,
      urlWithParams: `${this.conf.mockCORSServer}${encodeURIComponent(request.urlWithParams)}`,
    };
    request = Object.assign(request, mock);

    return next.handle(request).pipe(
      map(evt => {
        if (evt instanceof HttpResponse) {
          const extractBody = {
            body: JSON.parse(evt.body.contents)
          };
          evt = Object.assign(evt, extractBody);
        }
        return evt;
      })
    );
  }
}
