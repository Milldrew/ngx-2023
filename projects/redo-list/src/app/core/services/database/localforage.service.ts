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
  setItem(key: string, value: any) {
    localforage.setItem(key, value).then(console.log).catch(console.log);
  }
  async getItem<T>(key: string): Promise<T | null> {
    return localforage.getItem<T>(key);
  }
}
