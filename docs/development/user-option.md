# User Option

这里介绍用户选项的实现原理和使用，oas 使用[pydantic](https://docs.pydantic.dev/latest/)作为其数据接口, 同时借助自动生成文档的功能实现GUI的快速配置。

我们对于用户选项的开发进行了大量的简化，你可以非常快速的定义用户的可选项。

### 选项层级

在`./module/config/config_model.py`中定义了一个类`ConfigModel`,  这个是针对实例配置的总的接口，这个类输入的数据是`config.json`数据，它会自动的根据代码进行数据的更新。`ConfigModel`的类的变量就是任务的配置变量。

```python
class ConfigModel(BaseModel):
    config_name: str = "oas"
    script: Script = Field(default_factory=Script)
    restart: Restart = Field(default_factory=Restart)
    global_game: GlobalGame = Field(default_factory=GlobalGame)
```

上面这个例子就是针对脚本的一些任务的配置任务列表。

对于某一个具体的任务的参数选项，**必须**保证如下的层级结构：

```python
任务（task），每个任务可以包含多个选项组
----选项组（group），每个选项选项组可以包含选项。
---------选项（argument），每个选项会有自行的设置
```

:::info

所有的选项都必须遵循`pydantic`的接口

:::

### Pydantic简易使用

有如下优势：

1. 基于类型注解：Pydantic 使用 Python 的类型注解来定义数据模型，这使得代码更加清晰、易于理解和维护。
2. 数据验证：Pydantic 可以根据定义的模型对输入数据进行验证，包括类型检查、长度检查、正则表达式匹配等。它会自动检测并报告验证错误，提供了可靠的数据验证机制。
3. 数据解析和转换：Pydantic 可以自动将输入数据解析为模型对象，并进行数据类型转换。它支持从 JSON、字典、数据库查询结果等多种数据源中解析数据，并将其转换为模型对象。
4. 默认值和可选项：Pydantic 支持定义默认值和可选项，可以为模型字段指定默认值，或将字段标记为可选项，以便在解析过程中处理缺失的字段。
5. 文档生成和交互式API：Pydantic 可以根据模型定义自动生成文档，并提供交互式的 API 接口，方便开发人员查看和测试模型的属性和方法。
6. 与其他库的集成：Pydantic 可以与其他流行的 Python 库和框架集成，如 FastAPI、Starlette、Django 等，提供更加便捷和高效的数据处理和验证功能。

我们并不需要这么多的功能, 只需要简单导入两个接口

```python
from pydantic import BaseModel, Field
```

1. 继承`BaseModel`成为数据接口,  继承之后在类内即可定义参数字段

2. `Field`用于定义参数字段的所有设置，字段配置的工具类，它可以用于在模型定义中设置各种字段参数：

   以下是 `Field` 类的一些常用参数：

   - `default`: 设置字段的默认值。
   - `default_factory`: 设置字段的默认值工厂函数，可以是一个可调用对象。
   - `alias`: 设置字段的别名，用于在数据解析时匹配不同的键名。
   - `title`: 设置字段的标题，用于生成文档或其他显示目的。
   - `description`: 设置字段的描述，用于生成文档或其他显示目的。
   - `example`: 设置字段的示例值，用于生成文档或其他显示目的。
   - `const`: 设置字段的常量值，用于进行相等性验证。
   - `ge`, `gt`, `le`, `lt`: 设置字段的数值上下限，用于进行数值范围验证。
   - `regex`: 设置字段的正则表达式，用于进行匹配验证。
   - `max_length`, `min_length`: 设置字段的字符串长度上下限，用于进行长度验证。
   - `max_items`, `min_items`: 设置字段的列表或集合元素个数上下限，用于进行元素个数验证。
   - `unique_items`: 设置字段的列表或集合是否要求唯一元素。
   - `deprecated`: 设置字段是否已被废弃。

## 新增

我们先简单描述一下新增任务配置的所有的操作：

0. 阅读注意事项，这点非常重要，也许第一遍并没有明白，但是务必回头再详细看一遍

1. 首先在`./tasks/<任务名>/config.py`下建立一个任务总的配置类`<任务名+Config>`
2. 同样的路径下建立选项组
3. 对每一个选项组类进行选项的定义
4. 当你完成任务的选项配置后，可以将这一个选项加入到总的配置中: 即添加到`class ConfigModel(BaseModel)`类中
5. 为此你还需要为 这个任务添加到GUI导航菜单中
6. 将这个任务配置添加到调度器中
7. 翻译（这个不是必须的）

### （0）注意事项

1. 在正式定义用户选项之前请认真分析整个任务所需的用户选项，不提供用户选项往往更有效

1. 请你务必遵循一下命名规则：
   - 任务的命名必须以游戏官方的命名为准，**不得出现中文或者拼音**，尽量不要缩写，如果你不知道任务名如何，可以到这个[Onmyoji Wiki | Fandom](https://onmyoji.fandom.com/wiki/Onmyoji_Wiki)进行翻阅。
   - 我们约定任务的命名规则是大驼峰，一切以`./tasks/<TaskName>`为准
   - 大驼峰如 `RaidMode`,  如果出现数字请直接加在后面`RaidMode9`
   - 大驼峰使用场景：任务名、选项组类名、`Enum`名
   - 下划线如 `raid_mode`, 如果出现数字请在后面先添加一个下划线后再添加数字`raid_mode_9`
   - 下划线使用场景：变量名，参数字段，选项值

### （1）新增  任务

1. 在`./tasks/<任务名>/config.py`下建立一个任务总的配置类`<任务名+Config>`

   ```python
   from pydantic import BaseModel, Field
   from enum import Enum
   from tasks.Component.config_base import ConfigBase
   
   class RealmRaid(ConfigBase):
       pass
   ```
   
   :::info
   
   为了解决`datetime.timedelta`在pydantic的输出类型不是str这个[**问题**](https://github.com/pydantic/pydantic/discussions/5687)
   
   我们为其设定的一个解析方式，你只需要继承这个 `ConfigBase` 即可
   
   :::

### （1）新增  选项组

#### <1> 如果是自己定义的

1. 同样的路径下`./tasks/<任务名>/`新建对应的每个选项组的配置类（当然也可直接定义在步骤1中的`config.py`文件中），如`config.py`文件下的`RaidConfig(BaseModel)`类。

   ```python
   from enum import Enum
   from datetime import datetime, timedelta
   from pydantic import BaseModel, ValidationError, validator, Field
   
   class RaidConfig(BaseModel):
   	pass
   ```

2. 将这个 选项组 加入到 任务 中, 

   ```python
   # ./tasks/<任务名>/config.py 文件
   
   class RealmRaid(ConfigBase):
       raid_config: RaidConfig = Field(default_factory=RaidConfig)
   ```

#### <2>使用通用组件的选项

为了代码的复用你可以直接引入并且定义

1. 直接导入其他组件的选项组

   ```python
   from tasks.Component.config_scheduler import Scheduler
   
   class RealmRaid(ConfigBase):
       scheduler: Scheduler = Field(default_factory=Scheduler)
   ```

### （3）新增  选项

1. 对选项组依次添加选项（代码的顺序就是提供给用户显示的顺序）

   - `int`  、`float`  数字类型

     ``` python
     priority: int = Field(default=5, description='priority_help')
     
     # Field 可填参数:
     # default[必填]
     # description[必填]
     # title[可填]
     # ge[可填]
     # le[可填]
     ```

   - `str`  输入类型

     ```python
     serial: str = Field(default="auto",
                             description='serial_help')
     # Field 可填参数:
     # default[必填]
     # description[必填]
     # title[可填]
     
     ```

   - `bool` 类型

     ```python
     enable: bool = Field(default=False, description='enable_help')
     
     # Field 可填参数:
     # default[必填]
     # description[必填]
     # title[可填]    
     ```

   - `Enum` 类型

     ```python
     # 定义可选项
     from enum import Enum
     
     class AttackNumber(str, Enum):
         NINE = 'nine'
         ALL = 'all'
         
     # 定义参数字段
     attack_number: AttackNumber = Field(title='Attack Number', default=AttackNumber.ALL,
                                             description='attack_number_help')
         
     # Field 可填参数:
     # default[必填]
     # description[必填]
     # title[可填] 
     ```

   - `TimeDelta` 类型

     这个类型最后会转化为`str`供gui显示

     ```python
     success_interval: TimeDelta = Field(default=TimeDelta(days=1), description='success_interval_help')
         
     # Field 可填参数:
     # default[必填]
     # description[必填]
     # title[可填] 
     ```

2. 一个完整的`Scheduler` 示例

   ```python
   class Scheduler(ConfigBase):
       enable: bool = Field(default=False, description='enable_help')
       next_run: datetime = Field(default="2023-01-01 00:00:00", description='next_run_help')
       priority: int = Field(default=5, description='priority_help')
   
       success_interval: TimeDelta = Field(default=TimeDelta(days=1), description='success_interval_help')
       failure_interval: TimeDelta = Field(default=TimeDelta(days=1), description='failure_interval_help')
       server_update: time = Field(default=time(hour=9, minute=0, second=0), description='server_update_help')
   
   ```

### （4）加入Model

打开`./module/config/config_model.py`文件

其思路也是简单的嵌套模型

```python
# from tasks.<任务名>.config import <任务名>
from tasks.RealmRaid.config import RealmRaid


class ConfigModel(BaseModel):
    realm_raid: RealmRaid = Field(default_factory=RealmRaid)
```

### （5）添加到GUI导航菜单

这一步非常简单，打开`./module/config/config_menu.py`， 在`ConfigMenu`类的`__init__()`中加入即可

```python
# 日常的任务
  self.menu["Daily Task"] = ['AreaBoss', 'GoldYoukai', 'ExperienceYoukai', 'Nian', 'RealmRaid']
```

### （6）添加到调度器 

oas 继承了 Alas 对于任务的调度设计

修改 `config_manual.py` 中的 `SCHEDULER_PRIORITY` 值，将 `<任务名>` 插入其中。

SCHEDULER_PRIORITY 是一个过滤器，用大于号 `>` 连接任务，靠前的任务会先被调度器执行。基本的任务排序规则是：重启 > 收菜类 > 每日收获类 > 每日战斗类 > 正常出击类 > 纯消磨时间类。为防止用户盲目地把自己想运行的任务放到前面，导致收菜类任务被延迟，SCHEDULER_PRIORITY 不会暴露到 GUI 中，需要开发者手动编写。

### （7）翻译

:::info

QML的版本的翻译文件在`./module/config/i18n/{lang}.ts`, 这个文件的本质就是html文件。

:::

在接入OASX后翻译工作在UI端进行配置，这时候就是要对 [OASX](https://github.com/runhey/OASX) 进行提交一个 Pr

你需要fork一个分支，用VSCode打开（可以有一个dart语言的插件），
然后修改`./lib/comom/` 下的翻译文件，可以直接是 `I18n.dart`， 定义一个Map，然后加入到总的Map里面去。

```dart
  Map<String, String> get _cn_pets_config => {
        'pets_config': '小猫咪',
        'pets_happy': '其乐融融',
        'pets_feast': '饕餮大餐',
      };
```

```dart
    zh_CN.addAll(_cn_pets_config);
```

但是 OASX 是编译型的，并不会实时生效，所以你需要提交一个 pr，然后等待合并发布就可以了。

:::tip

你需要再次阅读一遍 注意事项

:::

## 访问选项

在整个config层级结构中，Config持有一个`ConfigModel`类型的`model`变量

```python
self.config.model.<task>.<group>.<argument>
```

当然可以这样

```python
self.config.<task>.<group>.<argument>
```

这个是因为重写了

```python
def __getattr__(self, name):
    """
    一开始是打算直接继承ConfigModel的，但是pydantic会接管所有的变量
    故而选择持有ConfigModel
    :param name:
    :return:
    """
    try:
        return getattr(self.model, name)
    except AttributeError:
        logger.error(f'can not ask this variable {name}')
        return None  # 或者抛出异常，或者返回其他默认值
```

## 隐藏选项
在选项组（group）定义里面加入`dynamic_hide('argument_name') `
举例
```
class GuildBanquetTime(BaseModel):
    run_time_1: Time = Field(default=Time(hour=19, minute=0, second=0))
    run_time_2: Time = Field(
        default=Time(hour=19, minute=0, second=0), 
        description="每周第2次运行时间设置"
    )
    hide_fileds = dynamic_hide('run_time_1', 'run_time_2')
# hide_fileds 可以随便起一个名字
# danamic_hide 可以隐藏任意数量的选项
```


