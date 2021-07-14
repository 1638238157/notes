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

- grid-auto-flow 改变顺序 默认值是row，“先行后列”。 column “先列后行”。
    - row dense
    - column dense
> dense 密集的  （尽量填满，不要出现空格）

- justify-items: start | end | center | stretch; 属性设置单元格的水平位置。
- align-items: 参数同上   设置单元格内容的垂直位置
    - start 对齐单元格的起始边缘
    - end 对齐单元格的结束边缘
    - center 单元格内部居中
    - stretch 拉抻，沾满单元格的整个宽度（默认值）；
- place-items: <align-items> <justify-items>;

- justify-content 整个内容区域在容器里面的水平位置
- align-content 整个内容区域的垂直位置
    - start 对齐容器的其实边框
    - end 对齐容器的结束边框
    - center 容器内部居中
    - stretch 项目大小没有指定时，拉伸占据整个网格容器。
    - space-around 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
    - space-between 项目与项目的间隔相等，项目与容器边框之间没有间隔。
    - space-evenly 项目与项目的间隔相等，项目与容器边框之间也是同样的间隔
- place-content: <align-content> <justify-content>;