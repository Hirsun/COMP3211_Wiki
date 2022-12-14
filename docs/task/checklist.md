---
index: true
date: 2022-09-02
article: true
order: 3
headerDepth: 2


---

# Checklist

## 前置流程

- [ ] 获取各组员的基本联系方式和紧急联系方式
- [x] 构建 Wechat 群组 / ~~WhatsApp 群组~~
- [x] 构建 Microsoft Teams / ~~字节飞书 群组~~
- [x] 构建 项目 Wiki（Github Page)
  - [ ] 配置 编辑权限
- [ ] 构建 项目 Github 仓库
  - [ ] 配置 编辑权限
- [x] 构建 Microsoft Project
  - [ ] 配置 访问权限
- [ ] 整理建议学习材料
- [ ] 在 Blackboard 系统上注册小组

::: tip 最基本的软件工程活动

1. 软件规格说明。软件的功能以及对于软件运行的约束必须在这里进行定义。
2. 软件开发。必须开发出符合规格说明的软件。
3. 软件确认。软件必须通过确认来确保软件所做的是客户所想要的。
4. 软件演化。软件必须通过演化来满足不断变化的客户需要。

:::

## 开发前

- [x] 软件类型确定：~~企业定制软件 企业通用软件~~ 用户通用软件
- 小组会议头脑风暴
  - [ ] 介绍小组的环境和周边，引导阅读 Wiki
  - [ ] 阅读需求文档，分析项目需求
  - [ ] 拟定项目课题
  - [ ] 确定项目分工和时间段（开发、录视频、报告）
  - [ ] 赋予虚拟角色
- [ ] 制定软件过程模型（软件开发生命周期）
- [ ] 整理程序需要的框架
- [ ] 软件的体系架构设计
- [ ] 项目甘特图制作
- [ ] MS Teams 任务卡制作
- [ ] 紧急情况安排：成员因病请假等

::: tip

1. 产品交付物是软件过程活动的产出物。例如，体系结构设计活动的产出物是软件体系结构模型。
2. 角色反映了参与过程的人在其中的职责。角色的例子包括项目经理、配置经理、程序员等。
3. 前置和后置条件是指在一个过程活动执行之前和之后或者产品生产之前或之后必须满足的条件。例如在体系结构设计开始之前，一个前置条件可能是客户已经认可了所有的需求；在此活动结束之后，一个后置条件可能是描述体系结构的UML模型已经进行了评审。

:::

## 开发过程中

- [ ] 检查 BlackBoard 和 邮件 是否有任何项目需求更新
- [ ] 必要的代码注释
- [ ] Javadoc 注释
- [ ] ~~是否具有弹性重构特性（企业定制软件）~~
- [ ] 结构化编程，重复利用模块

## 需求检查

- [ ] 服务器后端
  - [ ] 可以与移动客户端进行交互
  - [ ] 可以执行应用逻辑
  - [ ] 可以管理应用程序的数据库
- [ ] 客户前端
  - [ ] 具有用户界面
  - [ ] 具有客户端应用程序逻辑
  - [ ] 具备访问移动设备的存储以进行信息保存和检索的功能
- 附加要求
  - [ ] 基于位置的服务
  - [ ] 移动性支持（网络突然断开？）
  - [ ] 安全机制
  - [ ] Azure AD（ADFS）

::: tip 软件工程：好的软件的基本属性

1. 可接受性：软件必须可理解有用，并且与用户使用的其他系统相兼容。
2. 可依赖性和信息安全性：软件可依赖性包括一系列特性，如可靠性、信息安全性、安全性。
   - 可依赖的软件即使在系统失效时也不应当导致物理或经济上的破坏。
   - 软件必须保证信息安全，使得恶意用户无法访问或破坏系统。
3. 效率：软件不应当浪费系统资源，例如存储和处理器周期。
4. 可维护性：软件应当能够通过演化满足客户变化的需求。

:::

## 开发后

### 程序本体

- 程序测试
  - [ ] 虚拟机测试
  - [ ] 实体手机测试 
- 软件系统合规性证明
  - [ ] 开源许可证、尊重版权
  - [ ] 尊重人权、没有任何歧视

### 小组 Report Document

  - 报告完整性检查
    - [ ] 系统结构
    - [ ] 系统的组成部分及其功能
    - [ ] 类图 UML
    - [ ] 数据库表
    - [ ] 使用的编程语言和工具
    - [ ] 测试策略和结果
    - [ ] 用户手册（包含在 Wiki）
    - [ ] Server 的设计思想和部署指南
    - [ ] 描述每个成员在小组中所扮演的角色
    - [ ] 每个成员对项目的贡献（百分比）的同行评议
  - [ ] 整合报告 + 排版
  - [ ] 后续补充调整 + 组长审核通过

### 项目口头报告和演示

- [ ] 组员脚本提交
- [ ] PPT 制作
  - [ ] Project Overview
  - [ ] 现场 Demo 材料准备
    - 成功执行应用程序的功能
    - 易用性
- [ ] Q&A 准备
- [ ] 组长审核通过以上材料

## 后置流程

- [ ] Wiki 英文化
- [ ] 打包需要提交的文件
- [ ] 项目组长批准最终提交版本
- [ ] 计算每一个提交文件的 SHA256，并留存
- [ ] 检查 MS Teams 文件留存情况
- [ ] 项目提交至 Blackboard

## 出分后

- [ ] 备份 MS Teams 文件
- [ ] 反思和提升
