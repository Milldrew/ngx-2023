import { Injectable } from '@angular/core';
import * as localforage from 'localforage';
const localforageOptions: LocalForageOptions = {
  name: 'Redo List',
};

@Injectable({
  providedIn: 'root',
})
export class LocalforageService {
  constructor() {
    localforage.config(localforageOptions);
  }
  setItem(key: string, value: unknown) {
    localforage.setItem(key, value).then(console.log).catch(console.log);
  }
  getItem(key: string) {
    return localforage.getItem(key);
  }
}
