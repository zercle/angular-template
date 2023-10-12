import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  isLoading = signal(false);
  appHasUpdate = signal(false);
  constructor() { }

}
