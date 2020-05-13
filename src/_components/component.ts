import Store from '../_store/store';
import { LitElement } from 'lit-element';
import { ApplicationState } from '../_store/state';

interface Props {
  store: Store;
  mapState?: (state: ApplicationState) => any;
}

class Component<T> extends LitElement {
  private _store: Store;
  props: T;

  constructor(props: Props) {
    super();

    this._store = props.store;
    this.props = props.mapState ? props.mapState(props.store.state) : {};

    props.store.events.subscribe('stateChange', (_, keyChanged) => {
      if (Object.keys(this.props).indexOf(keyChanged) > -1) {
        super.update(new Map());
      }
    });
  }

  dispatch = (actionKey: string, payload: any) => this._store.dispatch(actionKey, payload);
}

export default Component;
