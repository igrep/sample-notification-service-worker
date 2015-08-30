'use strict';

Notification.requestPermission(function(status){
  console.log('Permission: ', status);
});

let startButton = document.getElementsByClassName('startButton')[0];

startButton.addEventListener('click', function(){
  // from http://www.html5rocks.com/ja/tutorials/service-worker/introduction/
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
});
