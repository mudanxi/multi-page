const path = require('path');
const glob = require('glob');
const catalog = require('./base.catalog.js');
const configEntry = {};

const options = {
  cwd: catalog.containerRoot, // 在container目录里找
  sync: true, // 这里不能异步，只能同步
};
const globInstance = new glob.Glob('!(_)*/!(_)**', options); // 考虑到多个页面共用HTML等资源的情况，跳过以'_'开头的目录

const catalogArr = globInstance.found.map((f, i) => {
  if (f.indexOf('.js') > 0 || f.indexOf('.scss') > 0) {
    f = `${f.split('/')[0]}` // 过滤数组 [ login/index.js ]
  }
  return f
})

catalogArr.forEach((page) => {
  configEntry[page] = path.resolve(`${catalog.containerRoot}`, `${page}`);
});

module.exports = configEntry;
