import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private uService: UserService,private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = localStorage.getItem('token');
    if (token){
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      })
    }

    return next.handle(req).pipe(tap(() => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.uService.refresh_token()
          const token = localStorage.getItem("token")
          if (token) {
            req = req.clone({
              headers: req.headers.set('Authorization', `Bearer ${token}`),
            })
          }
          else{
            this.router.navigate(['login']);
          }
          // this.router.navigate(['login']);
        }
    })
    );
  }
}
