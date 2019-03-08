import {AzureFunction, Context} from '@azure/functions';

const timerTrigger: AzureFunction = async function(
  context: Context,
  myTimer: any
): Promise<void> {
  var timeStamp = new Date().toISOString();

  if (myTimer.isPastDue) {
    context.log('Timer function is running late!');
  }
  context.log('Timer trigger function ran!', timeStamp);

  const location = 'steam-a3';
  const id = location + '-' + timeStamp.replace(':', '.');
  const sensorTelemetry = {
    id,
    timeStamp,
    location,
    temperature: Math.random() * 30 + 50,
  };

  context.bindings.sensorTelemetry = JSON.stringify(sensorTelemetry);
};

export default timerTrigger;
