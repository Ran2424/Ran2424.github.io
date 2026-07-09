---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div align="center">
  <h1><strong>夏强</strong></h1>
  <p class="home-contact">
    +86 19301222623 &nbsp;|&nbsp;
    <a href="mailto:xiaqiang@tongji.edu.cn">xiaqiang@tongji.edu.cn</a> &nbsp;|&nbsp;
    <a href="https://github.com/Ran2424">github.com/Ran2424</a>
  </p>
</div>

<div class="home-intro">
  <p class="home-lead">
    我是同济大学城市交通研究院博士研究生，研究方向聚焦大语言模型、知识图谱与城市交通数据挖掘的交叉应用。
  </p>
  <p>
    近期工作关注交通知识增强、出行规划、公交投诉理解、HS 编码智能分类等任务，尝试把大模型的语义理解与可验证的规则、知识约束结合起来，服务复杂业务场景中的分析、推理与决策支持。
  </p>
</div>

## 教育背景

- 2024年至今：同济大学城市交通研究院，博士研究生，上海。
- 2020年到2024年：长安大学运输工程学院，本科，西安。


## 研究方向

- 大语言模型与交通领域任务适配
- 知识图谱与知识增强建模
- 城市交通文本数据挖掘
- 面向治理场景的智能分析与决策支持

## 最新进展

- 2026年4月：论文 *HSGraphAgent: Knowledge-Graph-Guided Large Language Models for Harmonized System Code Classification* 被 ACL 2026 Main Conference 接收。
- 2026年：论文 *CityWeave: Weaving User Needs and World Constraints for Personalized and Reliable Mobility Planning* 被 ACM KDD 2026 接收为 Oral Presentation。
- 2026年：论文 *Leveraging Large Language Models for Better Understanding Bus Passenger Complaints Based on Citizen Hotline Data Mining* 被 TRB 2026 接收。
- 2025年：参与发表《城市交通知识增强大语言模型构建及应用探索》。


## 论文发表

{% assign publications = site.publications | sort: "date" | reverse %}
{% for publication in publications %}
  {% include publication-card.html publication=publication %}
{% endfor %}

## 项目经历

### HSCODE AI 智能查询系统研发

核心研发成员，中远海运科技股份有限公司。项目面向跨境贸易中的 HSCode 编码与规则复核场景，围绕编码规则复杂、传统分类方法对细粒度规则不够敏感、人工经验依赖强等问题，构建知识图谱约束下的大语言模型推理流程。技术栈包括 Python、Neo4j、FastAPI。

- 构建 HS 编码知识图谱，显式建模层级关系、监管规则与编码约束。
- 设计“候选筛选、路径校验、动态重定向”的约束驱动推理机制，让模型在逐步决策中保留路径合法性。
- 相关成果用于 ACL 2026 主会，10 位 HS 编码准确率提升至 90%+，在复杂规则与细粒度场景下显著优于 RAG 与直接生成方法。

### 基于大模型的公交工单分析系统

核心研发成员，上海交通发展研究中心。项目面向公交治理工单文本，处理信息高度非结构化、人工分析效率低、难以形成系统性决策支持等问题，构建从文本数据到问题类型与治理变量的自动映射流程。技术栈包括 Python、vLLM、NLP。

- 基于 LLM 抽取事件类型、服务对象与问题成因，将文本转化为结构化语义表示。
- 构建“解析、归因、分类”的多阶段推理流程，模拟人工分析逻辑，提升复杂问题识别能力。
- 相关成果用于 TRB 会议，显著提升非结构化数据处理效率，降低人工分析成本，支持公交管理部门识别高频问题与服务短板。

## 竞赛经历

### 国家级

- 2025年：“城垣杯”第九届规划决策支持模型设计大赛，一等奖。
- 2024年：中国研究生数学建模竞赛，二等奖。
- 2023年：美国大学生数学建模竞赛，二等奖。
- 2022年10月：ACM-ICPC 国际大学生程序设计竞赛亚洲区域赛沈阳站，铜牌。
- 2022年5月：中国高校计算机设计大赛团队程序设计天梯赛，个人二等奖。
- 2021年7月：ACM-ICPC 国际大学生程序设计竞赛亚洲区域赛沈阳站，铜牌。
- 2021年6月：ACM-ICPC 国际大学生程序设计竞赛亚洲区域赛西安邀请赛，铜牌。
- 2020年12月：中国高校计算机设计大赛团队程序设计天梯赛，团队银奖、个人三等奖。

### 省部级

- 2023年4月：大学生交通运输科技大赛，二等奖。
- 2023年5月：蓝桥杯 Python 程序设计大学 A 组，二等奖。
- 2022年5月：蓝桥杯 C/C++ 程序设计大学 A 组，二等奖。
- 2022年5月：中国高校计算机设计大赛团队程序设计天梯赛，团队一等奖。
- 2021年5月：蓝桥杯 C/C++ 程序设计大学 A 组，一等奖。
- 2020年12月：中国高校计算机设计大赛团队程序设计天梯赛，团队一等奖。

### 校级

- 2023年4月：挑战杯全国大学生课外学术科技作品竞赛，校级一等奖。
- 2022年6月：长安大学 ACM-ICPC 程序设计竞赛，一等奖。
- 2021年6月：长安大学 ACM-ICPC 程序设计竞赛，一等奖。
- 2021年5月：长安大学“青春向党 奋斗强国”经典诵读会，三等奖。
- 2020年12月：长安大学 ACM-ICPC 程序设计竞赛新生赛，一等奖。

## 获奖荣誉

- 2022年10月：长安大学校园贡献奖。
- 2022年5月：长安大学社团工作优秀个人。
- 2021年10月：国家奖学金。
- 2021年10月：长安大学学业优秀奖。
- 2021年5月：长安大学优秀团员。
- 2021年5月：长安大学经济与管理学院每月之星。

## 校园工作经历

- 2022年7月到2023年5月：担任长安大学 ACM 集训队队长。
- 2022年6月到2023年5月：担任长安大学 ACM 协会主席。
- 2021年8月到2022年8月：担任长安大学 ACM 协会竞赛部部长。
- 2020年10月到2021年7月：担任长安大学经济与管理学院团学组织中心组织部部员。
