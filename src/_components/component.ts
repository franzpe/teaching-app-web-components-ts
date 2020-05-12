import Store from '../_store/store';
import { LitElement } from 'lit-element';

interface Props {
  store: Store;
  element?: HTMLElement;
}

class Component extends LitElement {
  element: HTMLElement | null = null;

  constructor(props: Props) {
    super();

    props.store.events.subscribe('stateChange', () => super.update(new Map()));

    if (props.element) {
      this.element = props.element;
    }
  }
}

export default Component;
