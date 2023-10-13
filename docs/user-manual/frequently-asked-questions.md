# Q&A

---

**Q:** 会挨鬼使黑吗

**A:** 还是那句话，怕别用 用别怕 封别叫。

**请注意网易游戏的公平协议**

:::tip

用户不得干扰网易公司正常地提供软件和服务，包括但不限于:攻击、侵入网易公司的网站服务器，或集中时间段内以超出正常用户登录需求的高频率登录或尝试登录服务器从而使网站服务器过载，破解、修改网易公司提供的网易游戏软件程序:攻击、侵入网易公司的游戏服务器/游戏服务器端程序或使游戏服务器过载，**制作、发布、传播、使用任何形式的妨碍游戏公平性的辅助工具或程序**(包括但不限于“外挂”"外挂”是指独立于游戏软件之外的，能够在游戏运行的同时影响游戏操作的所有程席，句括但不限干模拟用户操作、改变操作环境、修改数据等一切类型》。用户不得，利用程序的漏洞和错误(Bug)破坏游戏的正常进行或传播该漏洞或错误(Bug);不合理地干扰或阻碍他人使用网易公司所提供的软件和服务，通过异常或者非法的方式使用网易公司的软件(包括但不限于利用网易游戏软件登录游戏私服)，使用异常的方法登录游戏(包括但不限于使用非网易公司开发、授权或认可的第三方软件、系统登录游戏)、使用网络加速器等外挂软件或机器人程序等恶意破坏服务设施、扰乱正常服务秩序的行为，修改、翻译、注释、整理、汇编、演绎网易游戏软件，利用本软件或者线上游戏系统可能存在的技术缺陷或漏洞而以各种形式为自己及他人牟利(包括但不限于复制游戏虚拟物品等) 或者从事其他不正当行为等。

:::

---

**Q:** 模拟器/游戏客户端用哪一个版本？

**A:** 我们推荐使用最新的，不会锁版本。如果新的版本改动较大，请耐心等候几天适配。

---

**Q:** 关于模拟器多开(暂时只写了MuMu12模拟器)

**A:** 

***1***、打开MuMu多开器12，新建或复制多个模拟器，这里以两个为例子。**tip：最好是改一下不同模拟器的名字以示区分**


![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/2953b347-0063-4ba3-9903-bbf48bccac02)


***2***、启动这两个模拟器，然后在多开器页面点击ADB按钮查看对应的端口号


![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/8af64413-cf6d-4a2b-8706-d9fab692e9b1)


***3***、打开OAS，新增一个或多个用户用来控制其他模拟器


![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/61d79479-8b40-4c9d-ba3a-b0b5967b2fa2)

***4***、新建之后，打开脚本的模拟器设置页面，在模拟器Serial输入框填入之前在Mu多开器查看的端口号 **！！记得加上127.0.0.1:**

![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/f8a36176-0532-488b-82dd-114df1331ff4)


***5***、句柄Handle和截屏方案具体选择

**非windows系**:句柄Handle选择auto 截屏方案选择非windows系   **tip:我喜欢填上模拟器的名字用来区分O(∩_∩)O~**

![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/2db8dc1e-5903-46c7-96f8-8b4ccf60b627)

另一个用户的设置除了 **端口号Serial** 和 **句柄Handle**不同，其他保持一致即可

![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/b2a56035-6d77-4040-bf1a-cc144821d6e1)

然后就可以开始测试啦！回到总览，点击![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/fc04311d-8986-4cea-b2cc-c9242d272ed1)刷新一下oas的设置，并查看是否连接上

![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/51e700bf-4b43-4aa3-8d66-fd7751544334)

当两个用户都测试成功链接之后就可以愉快双开啦！！

---

**windows系**:模拟器Serial保持与之前的一致，分别查看每个ADB端口号填入即可，但是句柄Handle输入框就需要自己获取了。

**(1)**、获取当前模拟器页面的句柄号，这里以888ss举例。使用的是之前教程提供的软件 ViewWizard2.8.0。

![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/743f7774-11ac-4a7b-a18e-04a614615422)

**(2)**、复制窗口句柄，填入对应的输入框即可，然后在截屏方案选择windows系。**tip：由于没有端口名字，这里需要仔细对照以免出现错误**（比如oas用户和模拟器Handle不匹配

![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/eea85ff4-2d8e-42c9-aca9-de252e681afa)

![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/6649f9ec-673e-4835-a9bb-e8949dff3723)

**(3)**、点击刷新oas，开始测试是否可以成功链接，成功链接之后就可以双开或者多开啦！

![image](https://github.com/runhey/OnmyojiAutoScript-website/assets/94830638/49a79ade-ca6e-4faf-bfd0-6c56af8f166e)


***总结***、双开或者多开主要是搞清楚对应模拟器的ADB号和相关的窗口句柄，然后windows系在获取窗口句柄的时候要看清楚父窗标题是否为 **Desktop**，否则会报错。
  有问题欢迎交流~

  ---

**Q:** 有些时候github需要更换到dev分支

**A:** 打开deploy.yaml文件，将Branch的值改为dev，并保存和**重启**OAS

![image](https://github.com/KteLinna/OnmyojiAutoScript-website/assets/94830638/ce80de24-2144-4438-a9f5-7935d2443c59)


![image](https://github.com/KteLinna/OnmyojiAutoScript-website/assets/94830638/17cef437-8d13-4085-b3f5-31adcbdbeff5)

---

**Q:** 当出现网络请求错误的时候，需要换源。(ERROR:HTTP error 403 while getting .....)

---

![Q%0_TKN6_AYH3RHG4V F~3_tmb](https://github.com/KteLinna/OnmyojiAutoScript-website/assets/94830638/6cba5773-16de-49ba-9c9b-0edc0fcbead3)

**A:** 打开deploy.yaml文件，将PypiMirror的地址改为其他，并保存和**重启**OAS

![image](https://github.com/KteLinna/OnmyojiAutoScript-website/assets/94830638/6e9fe42a-ae15-41df-b0ff-aaee52a34440)

其他地址：

https://pypi.python.org/simple/

https://mirrors.aliyun.com/pypi/simple/

https://pypi.tuna.tsinghua.edu.cn/simple

https://pypi.mirrors.ustc.edu.cn/simple/

---
