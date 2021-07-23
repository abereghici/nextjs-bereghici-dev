export default class InMemoryStorage implements Storage {
  storage = new Map();

  get length(): number {
    return this.storage.size;
  }

  getItem = (key: string): string | null => this.storage.get(key) ?? null;

  setItem = (key: string, value: string): void => {
    this.storage.set(key, value);
  };

  removeItem = (key: string): void => {
    this.storage.delete(key);
  };

  clear = (): void => {
    this.storage = new Map();
  };

  key = (index: number): string | null => {
    return Array.from(this.storage.keys())[index] ?? null;
  };

  // This is for compatibility with LocalStorage
  addListener = (): (() => void) => {
    return () => {};
  };
}
