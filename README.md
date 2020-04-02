## Titanium background app
The goal is to make a Titanium app that keeps running in the background and be able to execute code from time to time (e.g. Geo checks, HTTP requests).

### Working platforms

* [ ] Android | Current progress: foregroundNotificaion is shown all the time
* [ ] iOS | Current progress: not started yet

### Ideas/Todos

* Android: foregroundNotification, services
* Android: FCM push message to trigger the app again
* Android: RECEIVE_BOOT_COMPLETED

### Android

To check for background activity you can run `adb logcat | grep backgroundApp`.

### Community

Feel free to send in PRs or contribute through issues. Together we can get it running!

### Side note
The goal is not to produce the best optimized code! It is about the functionality and to keep the code simple, easy to read and quickly to adapt.
