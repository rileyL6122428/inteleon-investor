import { Injectable } from '@angular/core';

export interface CacheEntry {
  key: string;
  expiration: Date;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiCache {
  private contents = {} as Record<string, CacheEntry>;

  add(entry: CacheEntry) {
    this.contents[entry.key] = entry;
  }

  get(key: string): any {
    if (!(key in this.contents)) {
      return null;
    }

    const cachedItem = this.contents[key];
    if (cachedItem.expiration < new Date()) {
      delete this.contents[key];
      return null;
    }
    console.log(cachedItem.data);
    return cachedItem.data;
  }
}
