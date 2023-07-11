# Emulator Support

*注意*：这是一个不完全列表，欢迎补充信息。

| 模拟器                                               | 推荐指数 | 经过测试 | 兼容 Hyper-V | 备注     |
| ---------------------------------------------------- | -------- | -------- | ------------ | -------- |
| [MuMu 模拟器（12）](https://mumu.163.com/index.html) | 👍👍👍👍👍    | ✅        |              | 宇宙no.1 |
| MuMu 模拟器（6）                                     | 👍👍👍      | ✅        |              |          |
| [雷电模拟器（9）](https://www.ldmnq.com/)            |          | ✅        |              |          |
| 雷电模拟器（5）                                      |          |          |              |          |
| 雷电模拟器（4）                                      |          |          |              |          |
| [Bluestacks （5）](https://www.bluestacks.cn/)       |          |          | ✅ (HCS)      |          |
| [夜神模拟器（Nox）（7）](https://www.yeshen.com/)    |          |          |              |          |
| [逍遥模拟器（MEmu）](https://www.xyaz.cn/)           |          |          |              |          |
| Windows Subsystem for Android                        |          |          |              |          |

:::caution

所有的模拟器分辨率设置为`1280x720`, 平板型

都要求开启ADB权限（有些模拟器默认开启了）

:::
## 连接模拟器的本质上的两种方式

### 句柄Handle
这个是Window操作系统提供的一个接口，表示和访问各种系统资源，例如窗口、文件、进程、线程、设备等。
脚本通过使用这一个接口获取模拟器的当前画面（截屏），或者是向其发送消息（鼠标按下、弹起、移动...）来模拟人的行为。
要使用这一方式来控制模拟器必须要知道当前的模拟器的句柄。

打开 `./dev_tools/ViewWizard2/ViewWizard2.exe`

![image-20230711133427660](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202307111334717.png)

拖拽这个放大镜到模拟器的菜单栏上面，保证覆盖整个模拟器

:::info

在Winodw中，窗口句柄以一个句柄树的形式存在，`Desktop`表示桌面上显示的所有的窗口。

每一家模拟器甚至同一家不同的模拟器的句柄树结构是不同的

:::

![image-20230711133825785](https://runhey-img-stg1.oss-cn-chengdu.aliyuncs.com/img2/202307111338473.png)

要求所拖拽识别的窗口 父窗口标题必须是 `Desktop`，这时的句柄号和句柄标题才是我们所需要的，随后你可以将上方的`窗口句柄` 或者 `窗口标题` 填入 oas 的 句柄Handle 中

### 端口Serial
ADB（Android Debug Bridge）是用于与安卓设备通信和调试的命令行工具。它提供了一种在计算机和安卓设备之间进行通信的桥梁，允许开发者在开发、调试和测试过程中与设备进行交互。
使用端口都是基于ADB来进行操作的

### MuMu模拟器（12）

🔥🔥**最丝滑**，目前的使用

- 端口Serial:  [MuMu模拟器12如何连接adb](https://mumu.163.com/help/20230214/35047_1073151.html#a3)
- 句柄Handle: `MuMu模拟器`
- 设置: 
- 其他: **MuMu系列如果使用window方式进行控制要求控制的进程必须为管理员身份**

## ✅MuMu 模拟器（6）

这个是以前使用的模拟器

- 端口Serial:`127.0.0.1:7555`
- 句柄Handle:

:::caution

雷电系列的模拟器可能会导致画面撕裂

:::

## ✅雷电模拟器（9）

- 端口Serial: emulator-5554 或 127.0.0.1:5555
- 句柄Handle:
- 设置：开启ADB

### 雷电模拟器（5）

- 端口Serial:
- 句柄Handle:
- 截屏方式ScreenshotMethod:
- 控制方式ControlMethod:

### 雷电模拟器（4）

- 端口Serial:
- 句柄Handle:
- 截屏方式ScreenshotMethod:
- 控制方式ControlMethod:

### Bluestacks  (Hyper-V)

- 端口Serial:
- 句柄Handle:
- 截屏方式ScreenshotMethod:
- 控制方式ControlMethod:

### Bluestacks (VirtualBox)

- 端口Serial:
- 句柄Handle:
- 截屏方式ScreenshotMethod:
- 控制方式ControlMethod:

### 夜神模拟器（Nox）

- 端口Serial:
- 句柄Handle:
- 截屏方式ScreenshotMethod:
- 控制方式ControlMethod:

### 逍遥模拟器（MEmu）

- 端口Serial:
- 句柄Handle:
- 截屏方式ScreenshotMethod:
- 控制方式ControlMethod:

### Windows Subsystem for Android



