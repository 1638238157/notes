## 概述
如果一个目录下存在一个tsconfig.json文件，那么它意味着这个目录是TypeScript项目的根目录。
tsconfig.json文件中指定了用来编译这个项目的根文件和编译选项。
## 使用tsconfig.json
- 不带任何输入文件的情况下调用tsc，编译器会从当前目录开始去查找tsconfig.json文件，逐级向上搜索父目录。
- 不带任何输入文件的情况下调用tsc，且使用命令行参数--project（或-p）指定一个包含tsconfig.json文件目录。
> 当命令行指定了输入文件时，tsconfig.json 文件会被忽略。

## compilerOptions 编译选项
files 需要编译的文件列表
include 可以指定要编译的路径列表
exclude 要排除，不编译的文件
target 用于指定编译之后的版本目录
module 用来指定要使用的模板标准
strict 用于指定是否启动所有类型检查，默认为false
jsx 指定jsx代码用于的开发环境：'preserve','react-native','react'
importHelpers 从tslib导入辅助工具函数（__extends，__rest等）
moduleResolution 用于选择模块解析策略，有“node”和“classic”两种类型，后者是默认类型
skipLibCheck 忽略所有声明文件（*.d.ts）的类型检查
esModuleInterop 通过导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性。
allowSyntheticDefaultImports 允许从没有设置默认导出的模块导入。这并不影响代码的输出，仅为了类型检查。
sourceMap 生成相应的.map文件
baseUrl 用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响
paths 用于设置模块名到基于baseUrl的路径映射
lib 用于指定要包含在编译中的库文件