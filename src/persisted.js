import { ConnectedRouter, push } from 'react-router-redux';

class PersistedConnectedRouter extends ConnectedRouter {
  componentWillMount() {
    const { store: propsStore, history, isSSR } = this.props;
    this.store = propsStore || this.context.store;

    if (!isSSR) {
      this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
    }

    //this is the tweak which will prefer persisted route instead of that in url:
    const location = this.store.getState().router.location || {};
    if (location.pathname !== history.location.pathname) {
      this.store.dispatch(push(location.pathname));
    }
    this.handleLocationChange(history.location);
    // --
  }
}

export default PersistedConnectedRouter;