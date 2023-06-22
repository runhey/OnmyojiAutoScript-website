# Emulator Support

*注意*：这是一个不完全列表，欢迎补充信息。

| 模拟器                                               | 推荐指数 | 经过测试 | 兼容 Hyper-V | 备注 |
| ---------------------------------------------------- | -------- | -------- | ------------ | ---- |
| [MuMu 模拟器（12）](https://mumu.163.com/index.html) | 👍👍👍👍👍    |          |              |      |
| MuMu 模拟器（6）                                     | 👍👍👍      | ✅        |              |      |
| [雷电模拟器（9）](https://www.ldmnq.com/)            |          | ✅        |              |      |
| 雷电模拟器（5）                                      |          |          |              |      |
| 雷电模拟器（4）                                      |          |          |              |      |
| [Bluestacks （5）](https://www.bluestacks.cn/)       |          |          | ✅ (HCS)      |      |
| [夜神模拟器（Nox）（7）](https://www.yeshen.com/)    |          |          |              |      |
| [逍遥模拟器（MEmu）](https://www.xyaz.cn/)           |          |          |              |      |
| Windows Subsystem for Android                        |          |          |              |      |

:::caution

所有的模拟器分辨率设置为`1280x720`, 平板型

:::

### MuMu模拟器（12）

我给他起了个称号**`宇宙最强`模拟器**

- 端口Serial:  [MuMu模拟器12如何连接adb](https://mumu.163.com/help/20230214/35047_1073151.html#a3)
- 句柄Handle: `MuMu模拟器`
- 截屏方式ScreenshotMethod:  (截至6.20) 我只测试好了`window_background`
- 控制方式ControlMethod:  (截至6.20) 

- 设置: 
- 其他: **MuMu系列如果使用window方式进行控制要求控制的进程必须为管理员身份**

## ✅MuMu 模拟器（6）

这个是我主要使用的模拟器

- 端口Serial:`127.0.0.1:7555`
- 句柄Handle:
- 截屏方式ScreenshotMethod: (截至6.20) 我只测试好了`window_background`
- 控制方式ControlMethod: (截至6.20) 我只测试了`window_message`

:::caution

雷电系列的模拟器可能会导致画面撕裂

:::

## ✅雷电模拟器（9）

- 端口Serial: emulator-5554 或 127.0.0.1:5555
- 句柄Handle:
- 截屏方式ScreenshotMethod: (截至6.20) 我只测试好了`window_background`
- 控制方式ControlMethod: (截至6.20) 我只测试了`window_message`
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



