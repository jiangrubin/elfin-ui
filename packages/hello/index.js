import Hello from './hello'

/* istanbul ignore next */
Hello.install = function(Vue) {
  Vue.component(Hello.name, Hello)
}

export default Hello