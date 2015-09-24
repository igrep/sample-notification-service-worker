# sample-notification-service-worker

Sample of Web Notification from a Service Worker.

# Important Notice

Currently, this app does **NOT** use Service Worker properly.  
The spawned service worker gets eventually **killed** by the browser
because the worker runs in an infinite loop.

# (Perhaps) easiest way to run this sample

```bash
$ git clone https://github.com/igrep/sample-notification-service-worker.git
$ cd sample-notification-service-worker
$ python3 -m http.server
  # or if you are a Python 2 user
$ python -m SimpleHTTPServer
```

Then open http://localhost:8000/ with a browser able to run
[Web Notification](http://www.w3.org/TR/2015/CR-notifications-20150519/) on a
[Service Worker](http://www.w3.org/TR/service-workers/).
