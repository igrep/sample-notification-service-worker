'use strict';

function notify(){
  if (Notification.permission === 'granted'){
    console.log('Calling new Notification() from ServiceWorker... Doki doki!');
    let n = new Notification('Yay! Successfully notified from a ServiceWorker!');
    n.onshow = function () {
      setTimeout(n.close, 5000);
    }
  } else if (Notification.permission === 'default'){
    console.warn('Hay! The user has not granted nor denied yet! Reload the page!');
  } else {
    console.warn('OMG! The user has denied notification! Give up!');
  }
}
setInterval(notify, 1000);
