# laya-ts-jasmine-unittest
Laya ts版，结合jasmine进行单元测试

# 使用说明
1. 下载，用Laya IDE 导入项目
2. 在命令行下，项目根目录，执行 npm install.
3. 编译项目，执行npm test.

# 测试用例编写
采用的是jasmine框架，配置文件为jasmine.json,可自行搜索相关资料.  
测试用例放在__tests__文件下，可参考其中的写法，记得以下三点：
1. 一定要有顶部的 reference 引入定义，防止Laya IDE报错。
2. 一定要用vm.runInThisContext引入编译好的相应js文件。
3. 一定要先编译，然后再在命令行下执行 npm test.

# 参考文档
1. [Writing unit tests in TypeScript](https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40)。
2. [nodejs vm](https://nodejs.org/api/vm.html#vm_vm_runinthiscontext_code_options)