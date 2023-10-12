import { Injectable, signal, WritableSignal } from '@angular/core';
import { SEARCH_MODE } from "../../enums/search-mode.enum";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchMode: WritableSignal<SEARCH_MODE> = signal(SEARCH_MODE.DEFAULT)
  keyword = signal('');
  filters = signal({
    limit: 0,
    offset: 0
  });

  constructor() { }
}
