# lwxmini

一套简单使用的小程序组件。

#### 开始

1. ```npm```下载

    ```cmd
    git clone https://github.com/lotency/lwxmini.git
    ```
1. 预览所有组件

    在开发者工具添加预览项目。

1. 使用

    将```dist``文件夹复制到项目目录下
    
    - 添加需要的组件。在页面的json配置：
        ```json
        {
            "usingComponents": {
                "l-cell-group": "../../dist/cell-group/index",
                "l-cell": "../../dist/cell/index"
            }
        }
        ```
    - 在页面文件wxml中使用组件：
        ```html
        <l-cell-group title="常用">
            <l-cell title="Icon" url="../icon/index" is-link>图标</l-cell>
            <l-cell title="Cell" url="../cell/index" is-link>菜单</l-cell>
            <l-cell title="Tab" url="../tab/index" is-link>选项卡</l-cell>
        </l-cell-group>
        ```
    详细预览项目。






















