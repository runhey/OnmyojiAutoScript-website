# Game Logic Reuse

## BaseTask

位于`./tasks/base_task.py`

- **self.screenshot(self):**

  封装了一层截屏是为了处理如勾协这一个突发事件

- **self.appear(self, target: RuleImage, interval: float =None, threshold: float =None):**

  判断 image 是否出现在画面中

  ```python
  interval: float =None  # 按钮出现间隔。按钮出现后的若干秒内，对这个按钮的识别返回 False。一般设置 1 或 2 秒，能避免连击。
  threshold: float =None  # 匹配的阈值 一般不填
  ```

- **self.appear_then_click()**

	判断 button 是否出现在画面中，出现了就点击

	```python
	target: RuleImage  # 
	action: Union[RuleClick, RuleLongClick]=None  # 如果点击，则按照输入的对象来进行点击
	interval: float=None  # 间隔
	threshold: float=None  # 阈值
	duration: float=None  # 如果是长按，可以输入长按的时间
	```

- **self.wait_until_appear()**

	较少使用

	```python
	target: RuleImage  # 
	skip_first_screenshot=False # 是否跳过第一次截图
	```

- **self.wait_until_appear_then_click()**

	较少使用

	```python
	target: RuleImage
	action: Union[RuleClick, RuleLongClick]=None
	```

- **self.wait_until_disappear()**

- **self.wait_until_stable()**

- **self.swipe()**

	无反馈滑动

	```python
	swipe: RuleSwipe
	interval: float =None  # 默认不使用
	```

- **self.click()**

	无反馈点击

	```python
	click: Union[RuleClick, RuleLongClick]=None
	interval: float =None
	```

- **self.ocr_appear()**

	如果target有keyword或者是keyword存在，返回是True，否则返回False
         
	但是没有指定keyword，返回的是匹配到的值，具体取决于target的mode

	```python
	target: RuleOcr 
	interval: float=None
	```

- **self.ocr_appear_click() -> bool**

	ocr识别目标，如果目标存在，则触发动作

	```python
	target: RuleOcr
	action: Union[RuleClick, RuleLongClick]=None
	interval: float=None
	duration: float = None
	```

- **self.list_find()**

  会在列表寻找目标，找到了就退出。
  如果是图片列表会一直往下找

  如果是纯文字的，会自动识别自己的位置，根据位置选择向前还是向后翻

  ```python
  ```

- **self.set_next_run()**

  设置任务的下一次运行时间

  ```python
  :param target: 可以自定义的下次运行时间
  :param server: True时会强制设置为用户的每天的定时时间
  :param success: 判断是成功的还是失败的时间间隔
  :param task: 任务名称，大驼峰的
  :param finish: 是完成任务后的时间为基准还是开始任务的时间为基准
  ```

  

## 通用战斗GeneralBattle

位于`./tasks/GeneralBattle/general_battle.py`

继承自`BaseTask`和`GeneralBattleAssets`,  你可以通过继承`GeneralBattle`来实现两个主要的功能

- **self.run_general_battle() -> bool**

  当进入战斗界面时，可以运行该方法, 

  使用场景为 单人战斗五式神一个阴阳师

- **self.run_general_battle_back() -> bool**

	进入挑战然后直接返回, 


## 游戏界面GameUi

位于`./tasks/GameUi/game_ui.py`

继承自`BaseTask`和`GameUiAssets`,  你可以通过继承`GameUi`来实现游戏页面的跳转

:::info

建立了一个游戏界面类Page,所有的界面跳转都是基于这个类来实现

具体建立的可以跳转的页面请翻阅`./tasks/GameUi/page.py`

:::

- **self.ui_get_current_page()**

  获取当前的所处的页面

  内部会修改一个`self.ui_current`

- **self.ui_goto()**

  会自动计算跳转的路由，并自动走到所需的页面

  但是要求使用前要确认自己所处的位置，可以调用`ui_get_current_page()`或者手动设置`self.ui_current`

- **dd**

  

## 加成开关GeneralBuff

位于`./tasks/Component/`

- **open_buff()**

- **close_buff()**

  上面两个是打开或者是关闭加成的总开关,要求是在庭院使用

- **gold_50（）**

- **gold_100（）**

- **exp_50（）**

- **exp_100（）**

- **awake（）**

- **soul（）**

  分别是 金币加成50%, 金币加成100%，经验加成50%， 经验加成100%， 觉醒加成，御魂加成

## 通用创建房间GeneralRoom

位于`./tasks/Component/`

在庭院-组队界面使用的，兼容所有的副本类型

- **create_room（）**

  一个操作：点击创建队伍

- **ensure_private（）**

  一个操作，点击那个私人房间

- **create_ensure（）**

  一个操作：确认创建

- **exit_team（）**

  在组队界面 退出组队的界面， 返回到庭院或者是你一开始进入的入口

## 通用邀请GeneralInvite

位于`./tasks/Component/`

作为队长可以有下面的方法

- **run_invite（）**

  队长！！身份。。。在组队界面邀请好友（ 如果开启is_first） 等待队员进入开启挑战
  请注意，返回的时候成功时是进入战斗了！！！
  如果是失败，那就是没有队友进入，然后会退出房间的界面

  ```
  :param config: InviteConfig邀请队员的配置
  :param is_first: 如果是第一次开房间的那就要邀请队员，其他情况等待队员进入
  :return:
  ```

- **is_in_room（）**

  判断是否在房间里面

- **check_and_invite（）**

  如果出现继续邀请队员，就会邀请队员（无论是战斗胜利还是失败）

  ```
  :param default_invite: 是否勾选默认邀请
  ```

作为队员身份可以有如下的方法

- **check_then_accept（）**

  判断是否出现队长的邀请，如果是就点击接受

- **wait_battle（）**

  等待队长开始战斗

  在房间等待,(要求保证在房间里面) 队长开启战斗
  
  如果队长跑路了，或者的等待了很久还没开始那就是失败的返回
  
  ```
  :return: 如果成功进入战斗（反正就是不在房间 ）返回 True
           如果失败了，（退出房间）返回 False
  ```

