const Job = require('./Job.js');

function handle(raw, renderers, BotCmd, srcBot, dstBot) {
  var jobs = srcBot
    .handle(raw)
    .map(botrequest => new Job(botrequest, renderers, BotCmd, dstBot));

  return Promise.all(jobs.map(j => j.exec()));
}

module.exports = {handle};
