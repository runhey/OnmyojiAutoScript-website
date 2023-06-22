# Game Logic Reuse

## BaseTask

位于`./tasks/base_task.py`

#### self.screenshot(self):

封装了一层截屏是为了处理如勾协这一个突发事件

#### self.appear(self, target: RuleImage, interval: float =None, threshold: float =None):

判断 image 是否出现在画面中

```python
interval: float =None  # 按钮出现间隔。按钮出现后的若干秒内，对这个按钮的识别返回 False。一般设置 1 或 2 秒，能避免连击。
threshold: float =None  # 匹配的阈值 一般不填
```

#### self.appear_then_click()

判断 button 是否出现在画面中，出现了就点击

```python
target: RuleImage  # 
action: Union[RuleClick, RuleLongClick]=None  # 如果点击，则按照输入的对象来进行点击
interval: float=None  # 间隔
threshold: float=None  # 阈值
duration: float=None  # 如果是长按，可以输入长按的时间
```

#### self.wait_until_appear()

较少使用

```python
target: RuleImage  # 
skip_first_screenshot=False # 是否跳过第一次截图
```

#### self.wait_until_appear_then_click()

较少使用

```python
target: RuleImage
action: Union[RuleClick, RuleLongClick]=None
```

#### self.wait_until_disappear()

较少使用

#### self.wait_until_stable()

较少使用

#### self.swipe()

无反馈滑动

```python
swipe: RuleSwipe
interval: float =None  # 默认不使用
```

#### self.click()

无反馈点击

```python
click: Union[RuleClick, RuleLongClick]=None
interval: float =None
```

#### self.ocr_appear()

如果target有keyword或者是keyword存在，返回是True，否则返回False
         

但是没有指定keyword，返回的是匹配到的值，具体取决于target的mode

```python
target: RuleOcr 
interval: float=None
```

#### self.ocr_appear_click() -> bool

ocr识别目标，如果目标存在，则触发动作

```python
target: RuleOcr
action: Union[RuleClick, RuleLongClick]=None
interval: float=None
duration: float = None
```



## 通用战斗GeneralBattle

位于`./tasks/GeneralBattle/general_battle.py`

继承自`BaseTask`和`GeneralBattleAssets`,  你可以通过继承`GeneralBattle`来实现两个主要的功能

#### self.run_general_battle() -> bool

当进入战斗界面时，可以运行该方法, 

使用场景为 单人战斗五式神一个阴阳师

- config: GeneralBattleConfig类型的输入
- return:  赢得胜利为True

#### self.run_general_battle_back() -> bool

进入挑战然后直接返回, 

- config: GeneralBattleConfig类型的输入
- return:  成功退出返回True

## 游戏界面GameUi

位于`./tasks/GameUi/game_ui.py`

继承自`BaseTask`和`GameUiAssets`,  你可以通过继承`GameUi`来实现游戏页面的跳转

方法较多请自行翻阅





