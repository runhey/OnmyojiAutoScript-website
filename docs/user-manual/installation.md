# Installation

## 自动安装
:::caution

自动安装仅仅适用于window系统，同时目前还没适配mac和liunx。

这里安装的部署方式同Alas一致，熟悉的同学可以直接上手。

:::

:::danger

我们打算在2024.1.1全面切换新到GUI: [仓库详细说明](https://github.com/runhey/OASX)
:::
### 理解拆分架构
<img src="https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202311182129682.png" alt="架构图"  />

在早先的设计中是不拆分前后端的，由于设计上的需要我们将其拆离出来，这样有如下的优势，但不再详细阐述：

- **可维护性和可扩展性**
- **跨平台和跨设备支持**
- **性能优化**

特别提一下，OASX 将会支持 Window、Liunx、macOS、Android这些系统支持。

而OAS将会支持 Window、Liunx、macOS（正常人不会用苹果打游戏吧）。

至于模拟器端，可以使用 ADB 就行的。

再提一嘴，如果是第一次使用，那么你应该将这三端在同一个Window机器使用，

✔🔥👍😍😍😍强烈推荐的：模拟器(Windows) + OAS(Windows) + OASX(Windows)


## 一、安装使用 OAS

### 1.获取自动安装包

在 [Github Releases](https://github.com/runhey/OnmyojiAutoScript/releases) 下载最新的自动安装包，但不要下载源码的 zip 压缩包。

下载完成后解压安装包。完整安装将需要约 1 GB 的空间。

### 2.编辑安装设置

阅读安装配置文件 `config/deploy.yaml` 中的注释，并根据自己的情况修改。这被认作是 oas 的使用门槛。

主要是保证两处如下相同即可，其他保持默认即可。

:::danger

在2024.1.1全面切换新到GUI之前，你应当编辑 `Branch` 分支为 dev  而不是master

:::

```
Repository: 'https://e.coding.net/onmyojiautoscript/oas/OnmyojiAutoScript.git'
PypiMirror: 'https://pypi.tuna.tsinghua.edu.cn/simple'
```
### 3.使用启动器

##### 第一种启动方式: oas.exe

确保解压无误后双击打开 `oas.exe`，自动安装程序将完成从拉取项目，安装环境到准备 ADB 的步骤。自动安装通常需要花费 2 - 3 分钟，期间请耐心等待，安装完成后，oas 服务端将启动完毕，记住这个`0.0.0.0: 22288`。

![image-20230619183211566](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202306191832110.png)

![image-20231206213228384](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202312062132714.png)

##### 第二种启动方式：oas-backend.bat
这个是因为前一种启动会留下一个黑框，当你希望启动后无感使用oas的话，你可以使用这一种启动方式，(首次使用不可行)，但是这一启动并不会更新你的oas代码。

### 4.卸载 oas

**oas** 安装包里的内容都是便携的，直接删除即完成卸载。你也可以利用这个特性，将已完成安装的 oas 复制到别的电脑上。

如果你在删除的过程中，遇到文件被占用无法删除的情况，可以尝试打开 `console.bat`，并在里面运行：

```
adb kill-server
taskkill /f /im oas.exe
taskkill /f /im python.exe
```
或者是从 OASX 关闭 OAS 任务来关闭。


## 二、安装使用 OASX

### 1.获取构建好的安装包

在 [Github Releases](https://github.com/runhey/OASX/releases) 下载最新的安装包，首次使用推荐是 windows。

### 2.登录你的OAS

记住你上一步的端口号,添入 IP+PORT，但是不要填 `Username` 和 `Password`,  点击 登录 。如果能进去就OK

![image-20231206214747821](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202312062147692.png)



**但是如果你的 OAS  和 OASX 不是同一个设备下的**。那你就不应该填入IP `127.0.0.1` 而是你运行 OAS 机器的 IP 地址。

## 三、开始使用

### 1.配置模拟器

:::caution

在开始使用之前请确保正确设置模拟器，并且模拟器运行中

你可以参照[该章节](emulator-support.md)进行设置

:::

### 2.修改游戏设置

对照这个表格修改游戏内的设置，~~正常玩过游戏的都这么设置~~。

> 对着改的意思是，这是统一的标准，照着给定的内容执行，不要问为什么，不允许有不一样的。

庭院 => 庭院换肤 => 默认皮肤 

:::info

oas 在早期设计中使用 OCR 来识别庭院下的文字以规避不同的皮肤导致按钮的不同

但是在实际过程中我们发现，某些庭院皮肤宽度过长需要左右滑动才可以识别出别的元素

对此的支持会引入很大的工作量，为此决定暂时不兼容庭院皮肤

:::

庭院 => 头像设置 => 画面

![image-20230622231628610](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202306222316047.png)

![image-20230622231716712](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202306222317916.png)

庭院 => 头像设置 => 交互 => 战斗设置 => 关闭个性结算

![image-20230714233151907](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202307142331743.png)

庭院 => 图鉴 => 装饰： 左边

| 设置名称 | 值       |
| -------- | -------- |
| 主题     | 依始之卷 |
| 战斗场景 | 默认     |
| 签到主题 | 默认     |
| 战斗主题 | 简约主题 |
| 阴阳术   | 默认     |

### 3.配置你的OAS

初次进入，你应当配置好脚本设置，几个重要的如 `模拟器Serial`、`句柄Handle`、`截屏方案`、 `控制方案`。可能会出错，这需要你根据不同设备进行选择，一般默认 auto 即可。

![image-20231206220048788](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202312062200546.png)

![image-20231206220124401](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202312062201616.png)

### 4.配置你所需要的任务

对于你需要的任务，勾选 `启用该功能` 以及 `下一次运行时间`， 亦是根据说明配置好相应的选项。

### 5.启动你的脚本

点击开关按钮即可启动，然后就可以愉快地玩耍啦，若配置不对将以日志形式告知你。

![image-20231206220812821](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202312062208133.png)


## 四、使用旧版 OAS

xxx















