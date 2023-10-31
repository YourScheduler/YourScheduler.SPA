import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthorizationService } from '../Services/authorization.service';
import { environment } from 'src/environments/environment.development';
import { AuthorizationResponse } from '../Models/authorization';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    apiUrl = `${environment.appUrl}`
    user?: AuthorizationResponse | null;
    constructor(private auth: AuthorizationService) { 
        this.auth.user$.pipe(
            tap(data => this.user = data),
            tap(data => console.log(data))
        )
        .subscribe();
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const isApiUrl = request.url.startsWith(this.apiUrl);
        console.log(this.user)
        console.log(this.apiUrl)
        if (this.user && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.user.jwtAuth}`
                }
            });
        }

        return next.handle(request);
    }
}