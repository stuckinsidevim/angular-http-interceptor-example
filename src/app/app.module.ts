import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HttpResponseInterceptor } from "./http-errors.interceptor"; // Import the interceptor
import { TestApiComponent } from "./test-api/test-api.component";
import { ToastComponent } from "./components/toast/toast.component";

@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
