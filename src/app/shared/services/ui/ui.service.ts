import { inject, Injectable, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  #breakpointObserver = inject(BreakpointObserver);

  isLoading = signal(false);
  appHasUpdate = signal(false);
  isHandset = signal(false);
  constructor() { }

}
