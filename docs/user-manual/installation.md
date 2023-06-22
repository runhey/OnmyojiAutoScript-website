# Installation

## 自动安装
:::caution

自动安装仅仅适用于window系统，同时目前还没适配mac和liunx。

这里安装的部署方式同Alas一致，熟悉的同学可以直接上手。

:::

### 获取自动安装包

在 [Github Releases](https://github.com/runhey/OnmyojiAutoScript/releases) 下载最新的自动安装包，但不要下载源码的 zip 压缩包。

下载完成后解压安装包。完整安装将需要约 1.5 GB 的空间。



### 编辑安装设置

阅读安装配置文件 `config/deploy.yaml` 中的注释，并根据自己的情况修改。这被认作是 oas 的使用门槛。

主要是保证两处如下相同即可，其他保持默认即可。

```
Repository: 'https://e.coding.net/onmyojiautoscript/oas/OnmyojiAutoScript.git'
PypiMirror: 'https://pypi.tuna.tsinghua.edu.cn/simple'
```



### 使用启动器

确保解压无误后双击打开 `oas.exe`，自动安装程序将完成从拉取项目，安装环境到准备 ADB 的步骤。自动安装通常需要花费 2 - 3 分钟，期间请耐心等待。安装完成后，oas 桌面端将自动打开。

![image-20230619183211566](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202306191832110.png)

加载完成后自动打开oas。

![image-20230619183346877](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202306191833988.png)

### 卸载 oas

**oas** 安装包里的内容都是便携的，直接删除即完成卸载。你也可以利用这个特性，将已完成安装的 oas 复制到别的电脑上。

如果你在删除的过程中，遇到文件被占用无法删除的情况，可以尝试打开 `console.bat`，并在里面运行：

```
adb kill-server
taskkill /f /im alas.exe
taskkill /f /im python.exe
```



## 开始使用

### 配置模拟器

:::caution

在开始使用之前请确保正确设置模拟器，并且模拟器运行中（游戏运行中）

你可以参照[该章节](emulator-support.md)进行设置

:::

### 修改游戏设置

对照这个表格修改游戏内的设置，~~正常玩过游戏的都这么设置~~。

> 对着改的意思是，这是统一的标准，照着给定的内容执行，不要问为什么，不允许有不一样的。

庭院 => 庭院换肤 => 默认皮肤 

:::info

oas 使用 OCR 来识别庭院下的文字以规避不同的皮肤导致按钮的不同，但是还是建议使用默认皮肤且不打卡自动轮换

:::

庭院 => 头像设置 => 画面

![image-20230622231628610](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202306222316047.png)

![image-20230622231716712](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202306222317916.png)

庭院 => 图鉴 => 装饰： 左边

| 设置名称 | 值       |
| -------- | -------- |
| 主题     | 依始之卷 |
| 战斗场景 | 默认     |
| 签到主题 | 默认     |
| 战斗主题 | 简约主题 |
| 阴阳术   | 默认     |


### 进入 Alas

双击打开 `oas.exe`，即开始运行 oas。

oas 启动时，将自动检查更新，你不需要进行其他操作。绝大多数时候，版本更新都可以通过这个方式自动完成，但遇到与桌面端相关的大版本更新的时，你需要重新下载并安装客户端。

### 创建你的实例

点击左下角的`+`号，输入你的oas实例名称，一般保持默认即可，随后点击确认，稍等一下即可创建实例。



:::note

config名称只能字母+数字

:::



![image-20230619183952640](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202306191839668.png)

### 启动实例

点击刚刚创建的实例。与Alas不同，oas选择进入直接启动进程，而不是运行脚本时创建进程。

![image-20230619184346193](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202306191843195.png)

:::tip

如果输出日志在启动时有`ERROR`，一般是`device`设置有问题，此时可以按照下面的说明进行设置。

:::

#### 设备出错设置

![image-20230619185342079](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202306191853864.png)

然后重新启动实例，无报错即为正常

![image-20230620215625220](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202306202156374.png)

### 配置任务

1. 在侧边栏中，选择你想运行的任务。你可以同时启用多个任务，	oas 将自动调度它们。
2. 启用这个任务。
3. 修改下方的任务设置 。

### 开始运行

1. 在侧边栏中，选择 `总览`。
2. 任务队列中会显示所有你开启的任务。
3. 点击 `开始`，oas 的任务调度器就会开始运行。
