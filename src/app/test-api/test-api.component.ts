import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-test-api",
  template: `
    <button (click)="callApiSuccess()">Call Successful API</button>
    <button (click)="callApiError()">Call Error API</button>
    <!-- No changes are required in the template -->
  `,
})
export class TestApiComponent {
  constructor(private http: HttpClient) {}

  callApiSuccess() {
    this.http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe({
      next: (response) => {
        console.log("Success response:", response);
      },
      error: (error) => {
        console.log("Error: ", error);
      },
    });
  }

  callApiError() {
    this.http.get("https://jsonplaceholder.typicode.com/invalidUrl").subscribe({
      next: (response) => {
        console.log("Success response:", response);
      },
      error: (error) => {
        console.log("Error: ", error);
      },
    });
  }
}
