import {inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  #auth = inject(AuthService);

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('/v1/login')) {
      return next.handle(request);
    } else {
      const accessToken = this.#auth.accessToken();
      if (!!accessToken) {
        const newRequest = request.clone({
          setHeaders: {Authorization: `Bearer ${accessToken}`}
        });
        return next.handle(newRequest);
      } else {
        return next.handle(request);
      }
    }
  }
}
