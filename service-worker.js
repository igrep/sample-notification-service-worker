'use strict';

var intervalSec = 0;
var timeoutId = null;

self.addEventListener('message', function(event){
  if (event.data.stop){
    clearTimeout(timeoutId);
    timeoutId = null;
    return;
  }

  intervalSec = event.data.newIntervalSec;
  console.log('Received new interval in second: ', intervalSec);
  if (timeoutId){
    clearTimeout(timeoutId);
  }
  timeoutId = keepNotifying(intervalSec);
});

function keepNotifying(intervalSec){
  return setInterval(notify, intervalSec);
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
