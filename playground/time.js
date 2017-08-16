// Jan 1st 1970 00:00:00 am
var moment = require('moment');


var date = moment();
//date.subtract(9, 'months');
console.log(date.format('h:mm a'));

new Date().getTime();
var someTimeStamp = moment().valueOf()
console.log(someTimeStamp);



