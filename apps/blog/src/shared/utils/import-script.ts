// Maps id to script
const ids = new Map<string, HTMLScriptElement>();
// Maps script to promise
const resolvers = new WeakMap<HTMLScriptElement, Promise<boolean>>();

const createScript = (url: string) => {
  const node = document.createElement('script');
  node.type = 'text/javascript';
  node.src = url;
  node.async = true;
  document.head.appendChild(node);
  return node;
};

const getScript = (url: string) => {
  const found = ids.get(url);
  if (found) {
    return found;
  }
  const script = createScript(url);
  ids.set(url, script);
  return script;
};

const importScript = (url: string): Promise<boolean> => {
  const script = getScript(url);

  const found = resolvers.get(script);

  if (found) {
    return found;
  }

  const resolved = new Promise<boolean>((resolve, reject) => {
    script.onload = () => resolve(true);
    script.onerror = reject;
    script.onabort = reject;
    script.crossOrigin = 'anonymous';
  });

  resolvers.set(script, resolved);
  return resolved;
};

export { importScript };
