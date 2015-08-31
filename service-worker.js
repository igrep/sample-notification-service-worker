'use strict';

var intervalSec = 0;
var started = false;

self.addEventListener('message', function(event){
  intervalSec = event.data.newIntervalSec;
  console.log('Received new interval in second: ', intervalSec);
  if (!started){
    console.log('Starting notification');
    keepNotifying();
    started = true;
  }
});

function keepNotifying(){
  setTimeout(
    function(){
      notify();
      keepNotifying();
    },
    intervalSec
  );
}

function notify(){
  if (Notification.permission === 'granted'){
    self.registration.showNotification(
      new Date().toString() + 'Yay! Successfully notified from a ServiceWorker!',
      { tag: 'sample' }
    );
  } else if (Notification.permission === 'default'){
    console.warn('Hay! The user has not granted nor denied yet! Reload the page!');
  } else {
    console.warn('OMG! The user has denied notification! Give up!');
  }
}
