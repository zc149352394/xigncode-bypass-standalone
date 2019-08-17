# xigncode-bypass for TERA by Caali

Standalone version. It is recommended to use the version with proxy integration instead, because it will be automatically updated. FAQ, help, etc. here: https://discord.gg/dUNDDtw

# Installation

> 1).Extract everything into an empty folder

> 2).Make sure that the latest (v10.4) version of Node.JS is installed on your system (https://nodejs.org/en/)

> 3).Make sure that the Microsoft Visual C++ Redistributables are installed on your system (both x86 and x64, for both 2015 and 2017).

# Usage

> 1).Run `XigncodeBypass.bat` as administrator and leave it running

> 2).Run the game client

> 3).After closing the game client, close the bypass

# xigncode-bypass 独立运行版

无需运行TERA-Proxy环境 依旧实现 bypass

# 安装说明

> 0).请删除客户端 \TERA\Binaries\XIGNCODE 中"垃圾文件"避免自动上传, 仅需保留以下4个文件即可

- x3.xem

- xcorona.xem

- xcorona_x64.xem

- xnina.xem

> 1).建议将此代码库中所有内容提取到 非中文 路径

> 2).确保您的系统上安装了最新版本的 Noode.js(v11.4 以上) (https://nodejs.org/en/download/current/)

> 3).确保 Microsoft Visual C++ Redistributables 安装在您的系统上 (X86和X64，分别为2015和2017)

# 使用说明

> 1).以管理员身份运行'XigncodeBypassSandalone.bat'，并使其保持运行状态

> 2).运行 TERA Online 游戏客户端

> 3).直到 TERA Online 正常关闭游戏客户端后, 再关闭 Xigncode-Bypass-Standalone

# 工作原理

在Xigncode-Bypass-Standalone运行时, 监听Windows全部进程间隔500ms(config.json中可修改)

扫描到新增TERA.exe进程时, 备份且替换 [x3.xem] -> [x3.xem.bak] , [xcorona.xem] -> [xcorona.xem.bak]

![screenshot](https://github.com/zc149352394/xigncode-bypass-standalone/blob/master/screenshot/01.png)

扫描到移除TERA.exe进程时, 删除且恢复 [x3.xem] <- [x3.xem.bak] , [xcorona.xem] <- [xcorona.xem.bak]

![screenshot](https://github.com/zc149352394/xigncode-bypass-standalone/blob/master/screenshot/02.png)

# 修复bug:

增加对[*.bak]文件, 是否存在的判定从而解决

当存在TERA.exe进程时(即已经启动了TERA游戏)

第2次启动[Bypass]会造成重复备份[*.bak]

最终导致[结束TERA]时恢复错误的[*.bak]数据

# 更新支持版本:

- Node.js 11.4.0 到 11.15.0 (NODE_MODULE_VERSION: x32_67 x64_67)

- Node.js 12.0.0 到 12.8.1 (NODE_MODULE_VERSION: x32_72 x64_72)

- Electron v4.0 到 4.2.9 (NODE_MODULE_VERSION: x32_64 x64_64)

- Electron v5.0 到 5.0.9 (NODE_MODULE_VERSION: x32_70 x64_70)

