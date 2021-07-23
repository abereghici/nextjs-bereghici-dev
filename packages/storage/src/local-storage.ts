/* eslint-disable no-console */
import InMemoryStorage from './in-memory-storage';

interface IStorage {
  get<T>(key: string): T | null;
  set(key: string, value: unknown): void;
  remove(key: string): void;
  addListener<T>(
    key: string,
    listener: (newItem: T | null, oldItem: T | null) => void
  ): () => void;
}

export const canUseLocalStorage = (): boolean => {
  try {
    const testKey = '@bereghici/storage/test';
    const testVal = 'test';

    window.localStorage.setItem(testKey, testVal);

    const isAvailable = window.localStorage.getItem(testKey) === testVal;

    window.localStorage.removeItem(testKey);

    return isAvailable;
  } catch (e: unknown) {
    return false;
  }
};

class LocalStorage implements IStorage {
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

  addListener<T>(
    key: string,
    listener: (newItem: T | null, oldItem: T | null) => void
  ): () => void {
    if (canUseLocalStorage()) {
      const onStorageChange = (event: StorageEvent) => {
        if (event.key === key && event.storageArea === window.localStorage) {
          try {
            const newItem = event.newValue
              ? <T>JSON.parse(event.newValue)
              : null;
            const oldItem = event.oldValue
              ? <T>JSON.parse(event.oldValue)
              : null;
            listener(newItem, oldItem);
          } catch (e: unknown) {
            console.error(e);
          }
        }
      };
      window.addEventListener('storage', onStorageChange, false);

      return () => {
        window.removeEventListener('storage', onStorageChange, false);
      };
    }
    return () => {};
  }
}

const localStorage = new LocalStorage(
  canUseLocalStorage() ? window.localStorage : new InMemoryStorage()
);

export default localStorage;
