# 拉取请求

### 流程简述

1. 打开本项目[主仓库](https://github.com/runhey/OnmyojiAutoScript/tree/master), 点击右上角的 `Fork`，然后点击下面绿色的 `Create fork`

2. 进入自己账号下的 oas仓库，并 `clone` 其中的 `dev` 分支到本地

   ```bash
   git clone <你的仓库 git 链接> -b dev
   ```

3. 下载[最新环境包](https://github.com/runhey/OnmyojiAutoScript/releases), 解压复制`toolkit`，`deploy`两个文件夹和`console.bat`到本地的仓库根目录，`toolkit`里面包含python最小环境、git环境和GUI启动环境。

4. 安装pip库, 安装后你可以执行`gui.py`启动进行测试

   ```bash
   ./toolkit/python.exe -m pip install -r requirements.txt 
   ```

5. 此时你可以进行 ~~瞎 JB 改~~ 开发了，建议每一定数量提交一个 `commit`，再提交 `commit`, 别忘了按照下面的 `统一格式` 写上 `message`

   ```bash
   git commit -m 'message'
   ```

   > `message`的统一格式
   >
   > ```bash
   > doc(your part): your changes
   > feat(module name): your add
   > fix(module name): your fix
   > ```

6. 完成开发后，推送本地分支到自己的仓库

   ```bash
   git push -u origin
   ```

   > 第一次 `push` 代码需要按照提示设置上传流(`--set-upstream`)

7. 打开 [主仓库](https://github.com/runhey/OnmyojiAutoScript/tree/master)。提交一个 `pull request` (会自动携带你 `commit` 的信息)，等待管理员通过。注意：要提交到 `dev` 分支上，别提交到 `master` 分支去了

8. 当 oas 原仓库出现更改（别人做的），你可能需要把这些更改同步到你的分支

   1. 关联 oas 原仓库

      ```bash
      git remote add upstream https://github.com/runhey/OnmyojiAutoScript.git
      ```

   2. 从 oas 原仓库拉取更新

      ```bash
      git fetch upstream
      ```

   3. 变基（推荐）或者合并修改

      ```bash
      git rebase upstream/dev # 变基
      ```

      或者

      ```bash
      git merge # 合并
      ```

   4. 重复上述 5, 6, 7 中的操作

### 推荐IDE

:::info

- Pycharm:  

- QtCreator: 用于qml开发
- Linguist: Qt家的翻译器

:::



### 牛牛专区

