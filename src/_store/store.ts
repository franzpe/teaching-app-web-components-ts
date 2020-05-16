import PubSub from '../_libs/pubSub';
import state, { ApplicationState } from './state';

type Params = {
  actions?: Object;
  mutations?: Object;
  state?: ApplicationState;
};

export default class Store {
  actions: Object;
  mutations: Object;
  state: ApplicationState;
  status: String;
  events: PubSub;

  constructor(params: Params) {
    this.actions = {};
    this.mutations = {};
    this.state = params.state || state;
    this.status = 'resting';
    this.events = new PubSub();

    if (params.actions) {
      this.actions = params.actions;
    }

    if (params.mutations) {
      this.mutations = params.mutations;
    }

    this.state = new Proxy<ApplicationState>(this.state, {
      set: (state, key: string, value) => {
        if (state[key] === value) return true;

        state[key] = value;

        console.log(`stateChange: ${key}: ${value}`);

        this.events.publish('stateChange', this.state, key);

        if (this.status !== 'mutation') {
          console.warn(`You should use a mutation to set ${key}`);
        }

        this.status = 'resting';
        return true;
      }
    });
  }

  dispatch(actionKey, payload) {
    if (typeof this.actions[actionKey] !== 'function') {
      console.error(`Action "${actionKey} doesn't exist.`);
      return false;
    }

    console.groupCollapsed(`ACTION: ${actionKey}`);

    this.status = 'action';

    this.actions[actionKey](this, payload);

    console.groupEnd();

    return true;
  }

  commit(mutationKey, payload) {
    if (typeof this.mutations[mutationKey] !== 'function') {
      console.log(`Mutation "${mutationKey}" doesn't exist`);
      return false;
    }

    this.status = 'mutation';

    console.log(mutationKey);
    let newState = this.mutations[mutationKey](this.state, payload);

    this.state = Object.assign(this.state, newState);

    return true;
  }
}
