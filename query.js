var search = require('./index');
search.query('183.6.130.250',function(data){
	console.log('from taobao',data);
},'taobao');

search.query('183.6.130.250',function(data){
	console.log('from baidu',data);
});