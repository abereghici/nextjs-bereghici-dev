export const transformObjectKeysToCSSVars = (
  obj: Record<string, unknown>
): Record<string, string> =>
  Object.keys(obj).reduce(
    (result, key) => ({
      ...result,
      [`--${key}`]: obj[key],
    }),
    {}
  );

export const replaceObjectValuesWithOwnKeysAsCSSVars = (
  obj: Record<string, unknown>
): Record<string, string> =>
  Object.keys(obj).reduce(
    (result, key) => ({
      ...result,
      [key]: `var(--${key})`,
    }),
    {}
  );
