export default function guardrail(mathFunction) {
  const wasProcessed = 'Guardrail was processed';
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(e.toString());
  }
  queue.push(wasProcessed);
  return queue;
}
