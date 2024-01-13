# Debugging

Alas 的入口文件有两个：调度器 `script.py` 和 `gui.py`。由于很多游戏玩法会消耗游戏帐号上的大量资源，或者消耗大量时间，甚至一些内容一天只能操作一次，调试的时候不能像平时使用一样执行完整流程。大多数时候调试都是脱离游戏，根据一张或者几张游戏截图进行的。

OAS 的调试入口比较多，顶层的有 `gui.py` 和 `server.py`， 每个示例也有自己的调试入口`script.py`, 每个任务对应都有`script_task.py`，当然你也可以单独对assets进行调试。

## 顶层调试 gui.py
还是同样的你需要确保你有pyside6这个环境
```shell
pip install pyside6==6.4.3
```
执行根目录下的 `gui.py` 即可，不过不建议怎么做

## 顶层调试 server.py

这个是新版本的顶层启动方式，你需要同 OASX 一起使用,

## 实例调试 script.py
一般由主程序来实例化`Script`对象，然后调用`loop()`方法来执行脚本，你可以单独进行启动
```python
if __name__ == "__main__":
    script = Script("oas1")
    script.loop()
```
执行 `script.py`， `Script("oas1")` 表示实例化一个配置文件为 `oas1.json` 的脚本，`script.loop()` 表示执行脚本。
不过我们也是很少用到。

## 任务调试 script_task.py
任务调试是针对单个任务的调试，这个是我们用的最多的，在每一个任务的文件下都有，比如挖土任务，在`./task/Orochi/script_task.py` 文件下有
```python
if __name__ == '__main__':
    from module.config.config import Config
    from module.device.device import Device
    c = Config('oas1')
    d = Device(c)
    t = ScriptTask(c, d)

    t.run()

```
`c = Config('oas1')` 表示实例化一个配置文件为 `oas1.json` 的配置对象，`d = Device(c)` 表示实例化一个配置文件为 `oas1.json` 的设备对象，`t = ScriptTask(c, d)` 表示实例化一个任务对象，`t.run()` 表示执行任务。是不是很简单？这个是每个任务下面都有的非常方便的调试。


## 单独调试 assets
目前只支持 调试图片和OCR。
在`./dev_tools/assets_test.py`下你可以单独进行调试。调试是脱离游戏，根据一张或者几张游戏截图进行的，也不依赖任何的配置文件。

- 调试一个 RuleImage
```python
# 图片文件路径 可以是相对路径
IMAGE_FILE = 'C:/Users/Ryland/Desktop/QQ截图20240113215243.png'
from tasks.KekkaiActivation.assets import KekkaiActivationAssets
targe = KekkaiActivationAssets.I_A_HARVEST_FISH_6
print(detect_image(IMAGE_FILE, targe))
```

- 调试一个 RuleOCR
```python
# 图片文件路径 可以是相对路径
IMAGE_FILE = 'C:/Users/Ryland/Desktop/QQ截图20240113215243.png'
from tasks.KekkaiActivation.assets import KekkaiActivationAssets
target = KekkaiActivationAssets.O_CARD_ALL_TIME
print(detect_ocr(IMAGE_FILE, target))
```

就是这么简单可以直接查看结果。
