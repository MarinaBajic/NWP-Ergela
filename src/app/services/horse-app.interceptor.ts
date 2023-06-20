import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http'
import { AuthService } from './auth.service';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HorseAppInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.authToken) {
            // http headeri su immutable - zato ga kloniramo
            const authReq = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    this.authService.authToken
                ).append('Access-Control-Allow-Origin', '*')
            });
            console.log('Making an authorized request');
            req = authReq;
        }
        return next.handle(req).pipe(
            tap({
                next: (event: HttpEvent<any>) => this.handleResponse(req, event),
                error: (error: HttpErrorResponse) => this.handleError(req, error)
            }));
    }

    handleResponse(req: HttpRequest<any>, event: HttpEvent<any>) {
        console.log('Handling response for ', req.url, event);
        if (event instanceof HttpResponse) {
            console.log('Request for ', req.url,
                ' Response Status ', event.status,
                ' With body ', event.body);
        }
    }

    handleError(req: HttpRequest<any>, event: HttpErrorResponse) {
        console.error('Request for ', req.url,
            ' Response Status ', event.status,
            ' With error ', event.error);
    }
}