import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MyInterceptors implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req) {
            console.log(req);
        }

        const modifiedReq = req.clone();

        return next.handle(modifiedReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 404) {
                    console.error('La solicitud dio un error 404 (Not Found)');
                    // Puedes realizar acciones específicas para manejar errores 404 aquí
                } else {
                    console.error('Error en la solicitud:', error);
                }

                return throwError(() => error);
            })
        );
    }

}