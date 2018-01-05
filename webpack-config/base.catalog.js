const path = require('path');
const fileCatalog = {}

//源文件目录

fileCatalog.staticRoot = path.resolve(__dirname, '../');        // 项目根目录

fileCatalog.srcRoot = path.resolve(fileCatalog.staticRoot, './src');        //项目业务代码目录

fileCatalog.buildRoot = path.resolve(fileCatalog.staticRoot, './build'); // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

fileCatalog.containerRoot = path.resolve(fileCatalog.srcRoot, './container');      //存放业务模块独有的部分，如入口文件
fileCatalog.imagesRoot = path.resolve(fileCatalog.srcRoot, './images');
fileCatalog.componentsRoot = path.resolve(fileCatalog.srcRoot, './components'); // 存放公用组件
fileCatalog.configRoot = path.resolve(fileCatalog.srcRoot, './config'); // 存放各种配置文件
fileCatalog.layoutRoot = path.resolve(fileCatalog.srcRoot, './layout'); // 存放UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路

module.exports = fileCatalog;
