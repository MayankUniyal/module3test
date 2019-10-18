/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log('\nData Size: ' + data);
  console.time('Web Worker');
  let response = 'a';
  for (let k = 0; k <= 10; k++) {
    response = 'a';
    for (let i = 0; i <= data; i++) {
      response += 'a';
    }
  }
  console.timeEnd('Web Worker');
  postMessage(response);
});

