export default function createInt8TypedArray(length, position, value) {
  const d = new DataView(new ArrayBuffer(length));
  try {
    d.setInt8(position, value);
    return d;
  } catch (e) {
    if (e instanceof RangeError) { throw new Error('Position outside range'); }
    throw e;
  }
}
