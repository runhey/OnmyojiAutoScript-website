# Manipulation Device

对设备游戏的操控，永远是游戏脚本最终的执行部分，为此我们将这一模块抽离成一小节，得益于 Alas 的实现，笔者对此些许认知，这些是：模拟器控制、APP控制、截屏操作、控制操作。

具体的说，多平台如Window、Liunx、Mac对各家模拟器的启动和关闭等等，我们甚至不希望用户手动的启动和关闭模拟器，基于对模拟器的进程的精确掌控，可以避开长期运行时出现的各种意外；另一方面当脚本对游戏超出控制范围时，一个稳妥的方式是直接重启游戏，关闭和启动游戏同样也是一项非常重要的基础功能。为此我们还应提供多种截屏方式和多种控制方式，以应对不同的用户的喜好，每一种实现方式都各自特点。很庆幸 Alas 几乎完美实现了所有的需求，个人非常敬佩全体 Alas 开发组，但是`device`严重依赖于`config`，我们期望后期重写`deivce`部分以一个lib形式供大家参考。



不建议直接使用 device 的API，而应该是后面更高级的接口，当然有兴趣的话可以阅读源码

## 模拟器



## APP控制



## 截屏

```python
@cached_property
def screenshot_methods(self):
    return {
        'ADB': self.screenshot_adb,
        'ADB_nc': self.screenshot_adb_nc,
        'uiautomator2': self.screenshot_uiautomator2,
        # 'aScreenCap': self.screenshot_ascreencap,
        # 'aScreenCap_nc': self.screenshot_ascreencap_nc,
        'DroidCast': self.screenshot_droidcast,
        'DroidCast_raw': self.screenshot_droidcast_raw,
        'scrcpy': self.screenshot_scrcpy,
        'window_background': self.screenshot_window_background
    }
```



## 控制

```python
@cached_property
def click_methods(self):
    return {
        'ADB': self.click_adb,
        'uiautomator2': self.click_uiautomator2,
        'minitouch': self.click_minitouch,
        'window_message': self.click_window_message
        # 'Hermit': self.click_hermit,
        # 'MaaTouch': self.click_maatouch,
    }
```

```python
@cached_property
def long_click_methods(self):
    return {
        'ADB': self.long_click_adb,
        'uiautomator2': self.long_click_uiautomator2,
        'minitouch': self.long_click_minitouch,
        'window_message': self.long_click_window_message,
        'scrcpy': self.long_click_scrcpy
        # 'Hermit': self.click_hermit,
        # 'MaaTouch': self.click_maatouch,
    }
```

还有`swipe`