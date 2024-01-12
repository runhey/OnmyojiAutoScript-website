# Q&A

---

### **Q:** 会挨鬼使黑吗

**A:** 还是那句话，怕别用 用别怕 封别叫。

**请注意网易游戏的公平协议**

:::tip

用户不得干扰网易公司正常地提供软件和服务，包括但不限于:攻击、侵入网易公司的网站服务器，或集中时间段内以超出正常用户登录需求的高频率登录或尝试登录服务器从而使网站服务器过载，破解、修改网易公司提供的网易游戏软件程序:攻击、侵入网易公司的游戏服务器/游戏服务器端程序或使游戏服务器过载，**制作、发布、传播、使用任何形式的妨碍游戏公平性的辅助工具或程序**(包括但不限于“外挂”"外挂”是指独立于游戏软件之外的，能够在游戏运行的同时影响游戏操作的所有程席，句括但不限干模拟用户操作、改变操作环境、修改数据等一切类型》。用户不得，利用程序的漏洞和错误(Bug)破坏游戏的正常进行或传播该漏洞或错误(Bug);不合理地干扰或阻碍他人使用网易公司所提供的软件和服务，通过异常或者非法的方式使用网易公司的软件(包括但不限于利用网易游戏软件登录游戏私服)，使用异常的方法登录游戏(包括但不限于使用非网易公司开发、授权或认可的第三方软件、系统登录游戏)、使用网络加速器等外挂软件或机器人程序等恶意破坏服务设施、扰乱正常服务秩序的行为，修改、翻译、注释、整理、汇编、演绎网易游戏软件，利用本软件或者线上游戏系统可能存在的技术缺陷或漏洞而以各种形式为自己及他人牟利(包括但不限于复制游戏虚拟物品等) 或者从事其他不正当行为等。

:::

---

### **Q:** 模拟器/游戏客户端用哪一个版本？

**A:** 我们推荐使用最新的，不会锁版本。如果新的版本改动较大，请耐心等候几天适配。

---

### **Q:** 模拟器如何多开?

<details>
<summary>Answer</summary>

![image](/picture/multiple_play.png)

***1***、打开MuMu多开器12，新建或复制多个模拟器，这里以两个为例子。**tip：最好是改一下不同模拟器的名字以示区分**


***2***、启动这两个模拟器，然后在多开器页面点击ADB按钮查看对应的端口号

***3***、打开OAS，新增一个或多个用户用来控制其他模拟器

***4***、新建之后，打开脚本的模拟器设置页面，在模拟器Serial输入框填入之前在Mu多开器查看的端口号 **！！记得加上127.0.0.1:**


***5***、句柄Handle和截屏方案具体选择，看图，照图的来理解填

当两个用户都测试成功链接之后就可以愉快双开啦！！

***总结***、双开或者多开主要是搞清楚对应模拟器的ADB号和相关的窗口句柄，然后windows系在获取窗口句柄的时候要看清楚父窗标题是否为 **Desktop**，否则会报错。有问题欢迎交流~

</details>

---

### **Q:** 切换到dev分支(也称测试分支)

**A:** 打开deploy.yaml文件，将Branch的值改为dev，并保存和**重启**OAS

![image](https://github.com/KteLinna/OnmyojiAutoScript-website/assets/94830638/ce80de24-2144-4438-a9f5-7935d2443c59)


![image](https://github.com/KteLinna/OnmyojiAutoScript-website/assets/94830638/17cef437-8d13-4085-b3f5-31adcbdbeff5)

---

### **Q:** 启动当出现网络请求错误的时候(ERROR:HTTP error 403 while getting .....)

<details>
<summary>Answer</summary>

需要换源。

![Q%0_TKN6_AYH3RHG4V F~3_tmb](https://github.com/KteLinna/OnmyojiAutoScript-website/assets/94830638/6cba5773-16de-49ba-9c9b-0edc0fcbead3)

**A:** 打开deploy.yaml文件，将PypiMirror的地址改为其他，并保存和**重启**OAS

![image](https://github.com/KteLinna/OnmyojiAutoScript-website/assets/94830638/6e9fe42a-ae15-41df-b0ff-aaee52a34440)

其他地址：

https://pypi.python.org/simple/

https://mirrors.aliyun.com/pypi/simple/

https://pypi.tuna.tsinghua.edu.cn/simple

https://pypi.mirrors.ustc.edu.cn/simple/

</details>

---
