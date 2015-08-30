'use strict';

function notify(){
  if (Notification.permission === 'granted'){
    console.log('Calling new Notification() from ServiceWorker... Doki doki!');
    self.registration.showNotification(
      'Yay! Successfully notified from a ServiceWorker!',
      { tag: 'sample' }
    );
  } else if (Notification.permission === 'default'){
    console.warn('Hay! The user has not granted nor denied yet! Reload the page!');
  } else {
    console.warn('OMG! The user has denied notification! Give up!');
  }
}
setInterval(notify, 3000);
