import schedule from 'node-schedule';
//frm url= https://github.com/node-schedule/node-schedule

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── date (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)

// 1：确定时间

// 		例如：2014年2月14日，15:40执行


var date = new Date(2014,2,14,15,40,0);

var j1 = schedule.scheduleJob(date, function(){

　　　　console.log("执行任务");

　 });

// 取消任务
// j1.cancel();



// 2：每小时的固定时间

// 　　例如：每小时的40分钟执行

　　var rule2 = new schedule.RecurrenceRule();

　　rule2.minute = 40;

　　var j2 = schedule.scheduleJob(rule2, function(){

　　　　console.log("执行任务");

　　});

// 3：一个星期中的某些天的某个时刻执行，

// 　　例如：周一到周日的20点执行

　　var rule3 = new schedule.RecurrenceRule();

　　rule3.dayOfWeek = [0, new schedule.Range(1, 6)];

　　rule3.hour = 20;

　　rule3.minute = 0;

　　var j3 = schedule.scheduleJob(rule3, function(){

　　　　console.log("执行任务");

　　});

// 4：每秒执行

　　var rule4 = new schedule.RecurrenceRule();

　　var times = [];

　　for(var i=1; i<60; i++){

　　　　times.push(i);

　　}

　　rule4.second = times;

　　var c=0;
　　var j4 = schedule.scheduleJob(rule4, function(){
 　　 c++;
  　　console.log("执行任务",c);
　　});