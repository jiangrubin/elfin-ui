import Hello from './hello'

const components = [
  Hello
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export {
  Hello
}

export default {
  version: '1.0.0',
  install
}