import * as Cookies from 'js-cookie';

type Options = Cookies.CookieAttributes;

const cookieStorage = {
  set(key: string, value: string, options: Options): string | undefined {
    return Cookies.set(key, value, options);
  },

  get(key: string): string | undefined {
    return Cookies.get(key);
  },

  remove(key: string, options?: Options): void {
    return Cookies.remove(key, options);
  },
};

export default cookieStorage;
