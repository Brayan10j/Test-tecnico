const app = require('./server');
const CronJob = require('cron').CronJob;
const Ctrl = require('./controllers');

//Job 7 AM
const job = new CronJob('00 00 7 * * 1-5', function() {
	Ctrl.addPrice
});
job.start()

// Server is listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});