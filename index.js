var restler = require('restler');

exports.query = function(ip, cb) {
	restler.get("http://ip.taobao.com/service/getIpInfo.php?ip=" + ip).on('complete', function(data) {
		cb(JSON.parse(data).data);
	});
};