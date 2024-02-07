import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export type ToastType = 'success' | 'error';

export interface ToastState {
  show: boolean;
  message: string;
  type: ToastType;
}

@Injectable({
  providedIn: "root",
})
export class ToastService {
  private _toastState = new BehaviorSubject<ToastState>({
    show: false,
    message: "",
    type: "success",
  });
  public readonly toastState = this._toastState.asObservable();

  constructor() {}

  showToast(message: string, type: ToastType) {
    this._toastState.next({ show: true, message, type });

    setTimeout(() => this.hideToast(), 3000);
  }

  hideToast() {
    this._toastState.next({ ...this._toastState.value, show: false });
  }
}
