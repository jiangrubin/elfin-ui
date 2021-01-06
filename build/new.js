process.on('exit', () => {})

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name')
  process.exit(1)
}

const fs = require('fs')
const path = require('path')
const fileSave = require('file-save')
const upperCamelCase = require('uppercamelcase')

const componentName = process.argv[2]
const chineseName = process.argv[3] || componentName
const ComponentName = upperCamelCase(componentName)
const packagePath = path.resolve(__dirname, '../packages', componentName)
const Files = [
  {
    filename: 'index.js',
    content: `import ${ComponentName} from './${componentName}';

/* istanbul ignore next */
${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName});
};

export default ${ComponentName};`
  },
  {
    filename: `${componentName}.vue`,
    content: `<template>
  <div class="el-${componentName}"></div>
</template>

<script>
export default {
  name: 'El${ComponentName}'
};
</script>`
  }
]

Files.forEach(file => {
  fileSave(path.join(packagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});