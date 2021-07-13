## Grid
网格布局

### Grid 和 Flex区别
Flex布局是 「轴线布局」，只能指定“项目”针对轴线的位置，可以看作是「一维布局」。Grid布局则是将容器划分成“行”和“列”，产生单元格，然后指定“项目所在”的单元格，可以看作是「二维布局」。

- grid-template-rows 设置行高
- gird-template-columns 设置列宽
- repeat() 第一个参数重复的次数，第二个参数是所要重复的值。
    - repeat(2, 100px 200px 300px) 重复某种模式 1 2 3
- auto-fill 自动填充
- fr 片段 如果两列宽度分别为1fr和2fr，就表示后者是前者的两倍。
- minmax() 函数产生一个长度范围，表示长度就在这个范围当中。接收两个参数，分别为最小值和最大值。
- auto 关键字 表示浏览器自己决定长度
- row-gap 属性设置行间距
- column-gap 属性设置列间距
- gap: <grid-row-gap> <grid-column-gap>; 二者的简写
- grid-template-areas 定义区域  某些区域不需要利用使用“.”表示。
>注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为区域名-start，终止网格线自动命名为区域名-end。

>比如，区域名为header，则起始位置的水平网格线和垂直网格线叫做header-start，终止位置的水平网格线和垂直网格线叫做header-end。
- grid-auto-flow 改变顺序 默认值是row，“先行后列”。