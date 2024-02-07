import { Component, OnDestroy, OnInit } from "@angular/core";
import { ToastService, ToastState } from "./toast.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-toast",
  template:
    `<div *ngIf="toast.show" class="toast" [class.success]="toast.type === 'success'" [class.error]="toast.type === 'error'">{{ toast.message }}</div>`,
  styles: [`
    .toast { padding: 20px; margin-bottom: 15px; border: 1px solid transparent; border-radius: 4px; }
    .success { background-color: #dff0d8; border-color: #d6e9c6; color: #3c763d; }
    .error { background-color: #f2dede; border-color: #ebccd1; color: #a94442; }
  `],
})
export class ToastComponent implements OnInit, OnDestroy {
  toast: ToastState = { show: false, message: "", type: "success" };
  private subscription: Subscription = new Subscription();

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.subscription = this.toastService.toastState.subscribe((state) => {
      this.toast = state;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
