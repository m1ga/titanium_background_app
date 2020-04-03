var service = null;
var intent = null;

var TAG = "backgroundApp";

function onClickStart(e) {
	intent = Ti.Android.createServiceIntent({
		url: 'backgroundService.js'
	});
	// intent.putExtra("interval", 10000); // will stop the fg service after 10 sec

	service = Ti.Android.createService(intent);
	service.start();
}

function onClickStop(e) {
	if (service) {
		service.foregroundCancel();
		Ti.Android.stopService(intent);
		console.log(TAG, "will stop in some seconds...");
	}
}

function onOpen(e) {
	console.log(TAG, "app opened");
}

$.index.open();

function onClose(e) {
	console.log(TAG, "app closed");
}
