console.log('starting app');

setTimeout(()=>{console.log('Inside of callback')},2000);
setTimeout(()=>{console.log('Inside of callback2')},3000);

console.log('finishing app');