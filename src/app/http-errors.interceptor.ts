import { Injectable } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ToastService } from "./components/toast/toast.service";

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            this.toastService.showToast("Operation successful", "success");
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.toastService.showToast(error.message, "error");
          return throwError(() => error);
        }),
      );
  }
}
