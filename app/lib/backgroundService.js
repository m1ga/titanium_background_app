console.log("Start background service");

var TAG = "backgroundApp";
var channel = null;

setInterval(function() {
	console.log(TAG, new Date(), "----function from background service----");
}, 10000)


if (Ti.Platform.Android.API_LEVEL >= 26) {
	channel = Ti.Android.NotificationManager.createNotificationChannel({
		id: "channel_id",
		name: "Background Channel",
		importance: Ti.Android.IMPORTANCE_LOW
	});
}

Ti.Android.currentService.foregroundNotify(
	123,
	Ti.Android.createNotification({
		contentTitle: "Background app",
		contentText: "Keep the app running...",
		channelId: channel ? channel.id : null,
		contentIntent: Ti.Android.createPendingIntent({
			intent: Ti.App.Android.launchIntent || Ti.Android.createIntent(),
		})
	})
);
