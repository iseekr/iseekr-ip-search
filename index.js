var restler = require('restler');
var config = require('./config.json');

// baidu http://developer.baidu.com/map/index.php?title=webapi/ip-api
exports.query = function(ip, cb, provider) {
	if (provider === 'taobao') {
		restler.get("http://ip.taobao.com/service/getIpInfo.php?ip=" + ip).on('complete', function(data) {
			var address = JSON.parse(data).data;
			cb({
				country: address.country_id,
				province: address.region.replace('省', ''),
				city: address.city.replace('市', '')
			});
		});
	} else {
		restler.get("http://api.map.baidu.com/location/ip?ak=" + config.baidu.ak + "&ip=" + ip).on('complete', function(data) {
			data = data.address.split('|');
			cb({
				country: data[0],
				province: data[1],
				city: data[2]
			});
		});
	}
};