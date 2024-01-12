# 

## 自动安装
:::caution

自动安装仅仅适用于window系统，同时目前还没适配mac和liunx。

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

再提一嘴，如果是第一次使用，那么你应该将这三端在同一个Windows机器使用，

✔🔥👍😍😍😍强烈推荐的：模拟器(Windows) + OAS(Windows) + OASX(Windows)


## 一、下载安装包

### 1.下载 OASX
在 [Github Releases](https://github.com/runhey/OASX/releases) 下载最新的安装包，首次使用推荐是 windows。

### 2.下载 OAS
在 [Github Releases](https://github.com/runhey/OnmyojiAutoScript/releases) 下载最新的自动安装包，但不要下载源码的 zip 压缩包。

### 3.解压文件夹
将下载的安装包解压到你需要的位置，你应当将 OASX 和 OAS 这两个区分开，这两个本质上是不同的程序。

OAS仅仅下载一个简易的启动包，完整安装将需要约 600 MB 的空间。


### 3.卸载 OAS

**OAS** 安装包里的内容都是便携的，直接删除即完成卸载。你也可以利用这个特性，将已完成安装的 oas 复制到别的电脑上。
如果你在删除的过程中，遇到文件被占用无法删除的情况，可以从 OASX 关闭 OAS 任务来关闭。

## 二、启动OAS

### 1.编辑 OAS 启动配置
阅读安装配置文件 `./config/deploy.yaml` 中的注释，并根据自己的情况修改。这被认作是 OAS 的使用门槛。
当然你也是可以通过 OASX 来进行修改，详细点击[此处](#1从-oasx-启动)。
![](/picture/3a8c1d5affa551f8f029acb00e1eebc3.png)

:::danger

在2024.1.1全面切换新到GUI之前，你应当编辑 `Branch` 分支为 dev  而不是master

:::

主要是保证两处如下相同即可，其他保持默认即可。

```
Repository: 'https://e.coding.net/onmyojiautoscript/oas/OnmyojiAutoScript.git'
PypiMirror: 'https://pypi.tuna.tsinghua.edu.cn/simple'
```
### 2.启动 OAS
启动 OAS 的本质就是使用 python 执行两个文件 `deploy/install.py` 和 `server.py`。

前者将完成从拉取项目，安装环境到准备 ADB 的步骤。首次安装通常需要花费 2 - 3 分钟，期间请耐心等待，安装完成后将会正式执行 OAS 服务。启动成功后日志将会显示
```
<<< LAUNCHER CONFIG >>>
[Host] 0.0.0.0 
[Port] 22288
[Reload] False
OAS web service startup done
```
记住这个 `[Port]` 后面的数字，登录时候用到。这里将会告诉你三种启动 OAS 的方法，当然本质都是一样的。

##### （1）从 OASX 启动
点击登录页右下角服务按钮，将进入 OAS 服务页面，这个时候你需要配置你的 OAS 文件夹路径,如何识别为正确的文件夹路径将会给你显示右下角的启动按钮，当然在此之前你应当确保你已经正确配置了 `deploy.yaml` 文件，这个非常重要。如果没有问题你可以再次点击右下角的启动按钮。
这会输出启动日志。
![](/picture/3a8c1d5affa551f8f029acb00e1eebc3.png)

##### （2）使用 oas.exe 启动
执行 `oas.exe` 程序，同样会输出启动日志, 值得一提的是这将会存留一个黑框，当你关闭时候同样意味着结束 OAS 服务。
![](/picture/2023-12-29-212742.png)
![](/picture/2023-12-29-212712.png)

##### （3）使用命令行启动
打开 `console.dat` 执行
```shell
python  -m deploy.installer
```
```shell
python server.py
```

### 3.登录 OAS
记住你所配置的端口号, 添入 `IP:Port`，但是不要填 `Username` 和 `Password`,  点击登录。

**但是如果你的 OAS  和 OASX 不是同一个设备下的**。那你就不应该填入IP `127.0.0.1` 而是你运行 OAS 机器的 IP 地址。
![](/picture/bd5b4e1afac32a722521a595b6b50ceb.png)

### 4.结束 OAS 服务
首先说明 OAS 服务是运行在后台的，很多时候你不应该关掉，即使你可能没有执行任务，而相反的 OASX 仅仅是一个控制台界面而已，想叉掉就叉掉。
##### （1）从 OASX 关闭
点击左下角的设置，然后在点击 `结束OAS服务`
![](/picture/02ddaa1b7bea319255186da633473af1.png)


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

![image-20231206220048788](/picture/153bd4e8ea95a9e3f1a05e8ee2360e7a.png)

![image-20231206220124401](/picture/309ad438dedebc09efcbe9a8790a3a2c.png)

### 4.配置你所需要的任务

对于你需要的任务，勾选 `启用该功能` 以及 `下一次运行时间`， 亦是根据说明配置好相应的选项。

### 5.启动你的脚本

点击开关按钮即可启动，然后就可以愉快地玩耍啦，若配置不对将以日志形式告知你。

![image-20231206220812821](/picture/3f34707bb17b9fde61493c04fb023514.png)


## 四、使用旧版 OAS

### 1.下载旧版 OAS
[下载链接v0.0.3](https://github.com/runhey/OnmyojiAutoScript/releases)， 不要下载跟OASX对接的版本。

你需要单独安装 pyside6

```shell
pip install pyside6==6.4.3
```

### 2.启动

同上方一致, 本质是启动 `gui.py`

![image-20231207231056648](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202312072310056.png)













