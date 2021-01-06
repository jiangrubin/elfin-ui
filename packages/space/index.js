import Space from './space';

/* istanbul ignore next */
Space.install = function(Vue) {
  Vue.component(Space.name, Space);
};

export default Space;
