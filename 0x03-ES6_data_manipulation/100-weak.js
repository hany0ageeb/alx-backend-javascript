export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let current = weakMap.get(endpoint);
  if (current === undefined) { current = 0; }
  if (current === 4) { throw new Error('Endpoint load is high'); }
  weakMap.set(endpoint, current + 1);
}
