import { Injectable } from '@angular/core';

/**
 * This is for managing the redo lists state
 *
 */
@Injectable({
  providedIn: 'root',
  redoList: RedoList;
})
export class CurrentListService {
  
  constructor() {}
}

type RedoList = {
  name: 'Redo List';

}

