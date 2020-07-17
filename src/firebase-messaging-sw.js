importScripts('https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.3.0/firebase-messaging.js');
firebase.initializeApp({
  'messagingSenderId': '653973346329'
});

const messaging = firebase.messaging();
// code to handle notification data when app is in background
messaging.setBackgroundMessageHandler(function (payload) {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.content,
    icon: 'https://www.movr.in/favicon.ico',
    data: {
      url: payload.data.url
    }
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);

});

self.addEventListener('notificationclick', function (event) {
  const clickedNotification = event.notification;
  clickedNotification.close();
  const destinationUrlParts = String(event.notification.data.url).split('/');

  const promiseChain = clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  })
    .then((windowClients) => {
      let matchingClient = null;

      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        const windowClientParts = String(windowClient.url).split('/');
        if (windowClientParts[2] === destinationUrlParts[2]) {
          matchingClient = windowClient;
          break;
        }
      }

      if (matchingClient) {
        return matchingClient.focus();
      } else {
        return clients.openWindow(event.notification.data.url);
      }
    });

  event.waitUntil(promiseChain);

});