class PubSub {
  private _events: Object;

  constructor() {
    this._events = {};
  }

  subscribe(event: string, callback: Function) {
    if (!this._events.hasOwnProperty(event)) {
      this._events[event] = [];
    }

    return this._events[event].push(callback);
  }

  publish(event: string, data = {}) {
    if (!this._events.hasOwnProperty(event)) {
      return [];
    }

    return this._events[event].map(callback => callback(data));
  }
}

export default PubSub;
