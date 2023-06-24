let resolvePromise;
const openPromise = new Promise(resolve => {
  resolvePromise = resolve;
});

const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
  console.log('Connected to the signaling server');
  resolvePromise();
};

ws.onerror = err => {
  console.error(err);
};

export { ws, openPromise };
