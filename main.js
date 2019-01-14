if('serviceWorker' in navigator){
  console.log("Sevice worker is working!");
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('Service-worker.js')
    .then(reg => console.log('Service worker Register...'))
    .catch(err => console.log(`Service worker error: Error: ${err}`))
  });

}
else {
  console.log("Service worker is not working!");
}
