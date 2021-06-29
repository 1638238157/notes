## file类型的input支持下列属性：
1. accept 描述允许的文件类型
2. capture 捕获图像或视频数据的源
    - camera 相机
    - camcorder 摄像机
    - microphone 录音
3. files FileList 列出了已选择的文件
4. multiple 布尔值，如果出现，则表示用户可以选择多个文件
## 获取已选择文件信息
被选择的文件以 HTMLInputElement.files 属性返回，它是一个包含一列 File 对象的 FileList 对象。FileList 的行为像一个数组，所以你可以检查 length 属性来获得已选择文件的数量。
- 每个File包含下列信息：
    - name 文件名
    - lastModified 一个数字，指定文件最后一次修改的日期和时间，以 UNIX 新纪元（1970年1月1日午夜）以来的毫秒数表示。
    - size 以字节为单位的文件大小
    - type 文件MIME类型