/* eslint-disable no-console */
import InMemoryStorage from './in-memory-storage';

interface IStorage {
  get<T>(key: string): T | null;
  set(key: string, value: unknown): void;
  remove(key: string): void;
}

export const canUseSessionStorage = (): boolean => {
  try {
    const testKey = '@bereghici/storage/test';
    const testVal = 'test';

    window.sessionStorage.setItem(testKey, testVal);

    const isAvailable = window.sessionStorage.getItem(testKey) === testVal;

    window.sessionStorage.removeItem(testKey);

    return isAvailable;
  } catch (e: unknown) {
    return false;
  }
};

class SessionStorage implements IStorage {
  storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  get<T>(key: string): T | null {
    try {
      return JSON.parse(this.storage.getItem(key) ?? 'null') as T | null;
    } catch (e: unknown) {
      console.error(e);
      return null;
    }
  }

  set(key: string, value: unknown): void {
    try {
      this.storage.setItem(key, JSON.stringify(value));
    } catch (e: unknown) {
      console.error(e);
    }
  }

  remove(key: string): void {
    try {
      this.storage.removeItem(key);
    } catch (e: unknown) {
      console.error(e);
    }
  }
}

const sessionStorage = new SessionStorage(
  canUseSessionStorage() ? window.sessionStorage : new InMemoryStorage()
);

export default sessionStorage;
