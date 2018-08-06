

class Job {
  constructor(botrequest, renderers, BotCmd, dstBot) {
    this._dstBot = dstBot;
    this._botCmd = new BotCmd(botrequest);
    this._renderer = renderers[this.cmd];
  }

  get cmd() {
    return this._botCmd.cmd;
  }

  get tokens() {
    return this._botCmd.tokens;
  }

  init() {
    return this._renderer.init(this);
  }

  query() {
    return this._renderer.query(this);
  }

  get formatter() {
    return this._renderer.formatBody.bind(this._renderer);
  }

  get renderer() {
    return this._renderer.render.bind(this._renderer);
  }

  get response() {
    return this._dstBot.response;
  }

  exec() {
    return this.init()
      .query()
      .then(this.formatter)
      .then(this.renderer)
      .then(this.response);
  }
}

module.exports = Job;
