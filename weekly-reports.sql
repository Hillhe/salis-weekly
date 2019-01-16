/*
 Navicat Premium Data Transfer

 Source Server         : 192.168.60.152
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : 192.168.60.152:3306
 Source Schema         : weekly-reports

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 15/01/2019 11:21:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for area
-- ----------------------------
DROP TABLE IF EXISTS `area`;
CREATE TABLE `area`  (
  `id` int(32) NOT NULL AUTO_INCREMENT COMMENT '区域id',
  `areaname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '名称',
  `status` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1' COMMENT '状态:0.正常  1.删除',
  `createdAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updatedAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `beiyong1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `beiyong2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of area
-- ----------------------------
INSERT INTO `area` VALUES (1, '陕西区域', '0', '1546855273349', '1547015769476', NULL, NULL);
INSERT INTO `area` VALUES (2, '山西区域', '0', '1546855273349', '1546855273349', NULL, NULL);
INSERT INTO `area` VALUES (3, '内蒙区域', '0', '1546855273349', '1546855273349', NULL, NULL);
INSERT INTO `area` VALUES (4, '甘青宁区域', '0', '1547015078909', '1547453390146', NULL, NULL);
INSERT INTO `area` VALUES (5, '部门日常工作', '0', '1546855273349', '1546855273349', NULL, NULL);

-- ----------------------------
-- Table structure for org
-- ----------------------------
DROP TABLE IF EXISTS `org`;
CREATE TABLE `org`  (
  `id` int(32) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `orgCode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '机构代码',
  `orgName` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '机构名称',
  `parentId` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '父机构代码 -1表示无父机构',
  `dutyPerson` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '负责人id',
  `createdAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updatedAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of org
-- ----------------------------
INSERT INTO `org` VALUES (1, '1', '西北集成研发', '-1', '1', '1546912411558', '1546912411558');
INSERT INTO `org` VALUES (2, '2', '项目管理组', '1', '1', '1546912411558', '1546912411558');
INSERT INTO `org` VALUES (3, '3', '后端开发组', '1', '1', '1546912411558', '1546912411558');
INSERT INTO `org` VALUES (4, '4', '前端开发组', '1', '1', '1546912411558', '1546912411558');
INSERT INTO `org` VALUES (5, '5', '移动开发组', '1', '1', '1546912411558', '1546912411558');

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project`  (
  `id` int(32) NOT NULL AUTO_INCREMENT COMMENT '项目id',
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '项目名称',
  `area` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '项目所属区域',
  `prods` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '包括的产品',
  `summary` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '任务概要',
  `dutyPerson` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '项目负责人id',
  `createPerson` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目创建人id',
  `number` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目编号',
  `prostatus` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目状态',
  `wordpath` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目文档',
  `remark` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '备注',
  `status` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '状态',
  `createdAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updatedAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `project_key_1`(`dutyPerson`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of project
-- ----------------------------
INSERT INTO `project` VALUES (6, '榆林-市局项目', '1', '1,3,4,5', '接入：3801路视频，578路卡口，20路人脸抓拍机，视频结构化20路，结构化能力160路。日均数据量约为500万+。', '3', '3', '4231231', '1', '', '备注', '0', '1547090354807', '1547090354807');
INSERT INTO `project` VALUES (8, '山西-太原-万柏林', '2', '1,2,3', '', '3', '3', '00001', '2', '', '备注', '0', '1547018321469', '1547089668538');
INSERT INTO `project` VALUES (9, '陕西咸阳', '1', '1', '', '5', '3', '00001', '2', '', '备注', '0', '1547108430177', '1547108430177');
INSERT INTO `project` VALUES (10, '蒙古', '3', '1', '', '5', '3', '00001', '2', '', '备注', '0', '1547108448673', '1547108448673');
INSERT INTO `project` VALUES (11, '甘青宁区域', '6', '1', '', '5', '3', '00001', '2', '', '备注', '0', '1547108466799', '1547108466799');
INSERT INTO `project` VALUES (12, '部门日常工作', '5', '1', '', '5', '3', '00001', '2', '', '备注', '0', '1547108475256', '1547108475256');
INSERT INTO `project` VALUES (13, '部门日常工作2', '5', '1', '', '5', '3', '00001', '2', '', '', '', '1547200019009', '1547200019009');
INSERT INTO `project` VALUES (14, '部门日常工作3', '5', '1', '', '5', '3', '00001', '2', '', '', '', '1547200315897', '1547200315897');

-- ----------------------------
-- Table structure for sysconfig
-- ----------------------------
DROP TABLE IF EXISTS `sysconfig`;
CREATE TABLE `sysconfig`  (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `key` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '键',
  `value` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '值',
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
  `createdAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updatedAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sysconfig
-- ----------------------------
INSERT INTO `sysconfig` VALUES (1, 'dict', '{\"PRODUCTS\":{\"0\":{\"key\":0,\"value\":\"全部\"},\"1\":{\"key\":1,\"value\":\"图解\"},\"2\":{\"key\":2,\"value\":\"PVD\"},\"3\":{\"key\":3,\"value\":\"PVA\"},\"4\":{\"key\":4,\"value\":\"ICP\"},\"5\":{\"key\":5,\"value\":\"超融合\"},\"6\":{\"key\":6,\"value\":\"OMS\"},\"7\":{\"key\":7,\"value\":\"VID\"},\"8\":{\"key\":8,\"value\":\"合成作战\"},\"9\":{\"key\":9,\"value\":\"人群\"},\"10\":{\"key\":10,\"value\":\"公安大数据\"},\"11\":{\"key\":11,\"value\":\"人脸\"},\"12\":{\"key\":12,\"value\":\"PSIM\"},\"13\":{\"key\":13,\"value\":\"IOD\"},\"14\":{\"key\":14,\"value\":\"其他\"}},\"POSITION_TYPE\":{\"0\":{\"key\":0,\"value\":\"全部\"},\"1\":{\"key\":1,\"value\":\"部门负责人\"},\"2\":{\"key\":2,\"value\":\"项目经理\"},\"3\":{\"key\":3,\"value\":\"研发工程师\"}},\"TASK_PERIOD\":{\"0\":{\"key\":0,\"value\":\"本周\"},\"1\":{\"key\":1,\"value\":\"下周\"},\"2\":{\"key\":2,\"value\":\"上周\"}},\"TASK_TYPE\":{\"0\":{\"key\":0,\"value\":\"全部\"},\"1\":{\"key\":1,\"value\":\"新增功能\"},\"2\":{\"key\":2,\"value\":\"需求完善\"},\"3\":{\"key\":3,\"value\":\"对接第三方\"},\"4\":{\"key\":4,\"value\":\"大屏定制\"},\"5\":{\"key\":5,\"value\":\"系统融合\"}},\"TASK_PROGRESS\":{\"0\":{\"key\":0,\"value\":\"全部\"},\"1\":{\"key\":1,\"value\":\"计划中\"},\"2\":{\"key\":2,\"value\":\"进行中\"},\"3\":{\"key\":3,\"value\":\"已延期\"},\"4\":{\"key\":4,\"value\":\"已暂停\"},\"5\":{\"key\":5,\"value\":\"已完成\"},\"6\":{\"key\":6,\"value\":\"已取消\"}},\"PROBLEM_TYPE\":{\"0\":{\"key\":0,\"value\":\"全部\"},\"1\":{\"key\":1,\"value\":\"性能\"},\"2\":{\"key\":2,\"value\":\"稳定性\"},\"3\":{\"key\":3,\"value\":\"Bug\"},\"4\":{\"key\":4,\"value\":\"交互体验\"}},\"SUPPORT_TYPE\":{\"0\":{\"key\":0,\"value\":\"全部\"},\"1\":{\"key\":1,\"value\":\"安装部署\"},\"2\":{\"key\":2,\"value\":\"运维\"},\"3\":{\"key\":3,\"value\":\"问题排查\"},\"4\":{\"key\":4,\"value\":\"专项保障\"},\"5\":{\"key\":5,\"value\":\"巡检\"}},\"DELIVERY_TYPE\":{\"0\":{\"key\":0,\"value\":\"全部\"},\"1\":{\"key\":1,\"value\":\"现场\"},\"2\":{\"key\":2,\"value\":\"远程\"}},\"PRO_STATUS\":{\"0\":{\"key\":0,\"value\":\"全部\"},\"1\":{\"key\":1,\"value\":\"售前阶段\"},\"2\":{\"key\":2,\"value\":\"实施阶段\"},\"3\":{\"key\":3,\"value\":\"初验前期\"},\"4\":{\"key\":4,\"value\":\"终验前期\"},\"5\":{\"key\":5,\"value\":\"验收运维\"},\"6\":{\"key\":6,\"value\":\"其他阶段\"}},\"DATILY_WORK\":{\"0\":{\"key\":0,\"value\":\"全部\"},\"1\":{\"key\":1,\"value\":\"沟通协调\"},\"2\":{\"key\":2,\"value\":\"会议讨论\"},\"3\":{\"key\":3,\"value\":\"出差缓解\"},\"4\":{\"key\":4,\"value\":\"请假\"},\"5\":{\"key\":5,\"value\":\"借调\"},\"6\":{\"key\":6,\"value\":\"培训学习\"},\"7\":{\"key\":7,\"value\":\"通用模块\"},\"8\":{\"key\":8,\"value\":\"重构\"},\"9\":{\"key\":9,\"value\":\"其他\"}},\"WORK_GROUP\":{\"0\":{\"key\":0,\"value\":\"全部\"},\"1\":{\"key\":1,\"value\":\"项目管理组\"},\"2\":{\"key\":2,\"value\":\"后端开发组\"},\"3\":{\"key\":3,\"value\":\"前端开发组\"},\"4\":{\"key\":3,\"value\":\"移动开发组\"}}}', '字典', '2019-01-07 16:23:35', '2019-01-07 16:23:38');
INSERT INTO `sysconfig` VALUES (2, 'appName', '周会管理系统', '周会管理系统', '2019-01-07 16:26:52', '2019-01-07 16:26:54');

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task`  (
  `id` int(32) NOT NULL AUTO_INCREMENT COMMENT '任务id',
  `pid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '所属项目id',
  `areaId` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '区域id',
  `period` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '周期',
  `target` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '目标',
  `dec` mediumtext CHARACTER SET utf16le COLLATE utf16le_general_ci NULL COMMENT '描述',
  `subProject` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '所属子项',
  `taskType` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '需求类型',
  `sonType` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '子类型',
  `deliveryType` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '交付方式',
  `level` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '优先级',
  `prods` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '所属产品',
  `version` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '版本号',
  `proDutyPerson` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '所属项目责任人id',
  `taskDutyPerson` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务责任人id',
  `workload` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '工作量',
  `startDate` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '开始日期',
  `endDate` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '交付日期',
  `progress` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '进度',
  `taskStatus` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务状态',
  `status` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '状态',
  `remark` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '备注',
  `createdAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updatedAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `task_key_1`(`pid`) USING BTREE,
  INDEX `task_key_2`(`taskDutyPerson`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES (8, '6', '1', '0', '功能融合', '将三原县原PVA，PVD和视频结构化平台单独运行，客户表示将结构化平台单独登录太繁琐，且平台数据没有拉通，需要PVA/PVD和结构化整合。', '三原', '1', '', '', '0', '1,2', '', '4', '5', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');
INSERT INTO `task` VALUES (9, '8', '2', '0', '功能融合', '将三原县原PVA，PVD和视频结构化平台单独运行，客户表示将结构化平台单独登录太繁琐，且平台数据没有拉通，需要PVA/PVD和结构化整合。', '三原', '1', '', '', '0', '1,2', '', '4', '3', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');
INSERT INTO `task` VALUES (10, '9', '3', '1', '更新2', '更新', '四原', '1', '', '', '0', '1,2', '', '4', '5', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546790400001', '1551667150540');
INSERT INTO `task` VALUES (11, '10', '4', '0', '功能融合', '将三原县原PVA，PVD和视频结构化平台单独运行，客户表示将结构化平台单独登录太繁琐，且平台数据没有拉通，需要PVA/PVD和结构化整合。', '三原', '1', '', '', '0', '1,2,5', '', '3', '5', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');
INSERT INTO `task` VALUES (12, '11', '1', '0', '功能融合', '将三原县原PVA，PVD和视频结构化平台单独运行，客户表示将结构化平台单独登录太繁琐，且平台数据没有拉通，需要PVA/PVD和结构化整合。', '三原', '1', '', '', '0', '1,2', '', '4', '3', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');
INSERT INTO `task` VALUES (13, '12', '2', '1', '功能融合', '将三原县原PVA，PVD和视频结构化平台单独运行，客户表示将结构化平台单独登录太繁琐，且平台数据没有拉通，需要PVA/PVD和结构化整合。', '三原', '1', '', '', '0', '1,2', '', '3', '5', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');
INSERT INTO `task` VALUES (14, '6', '3', '0', '更新', '更新1', '三原', '1', '', '', '0', '1,2,4', '', '4', '5', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');
INSERT INTO `task` VALUES (15, '8', '4', '1', '功能融合', '将三原县原PVA，PVD和视频结构化平台单独运行，客户表示将结构化平台单独登录太繁琐，且平台数据没有拉通，需要PVA/PVD和结构化整合。', '三原', '1', '', '', '0', '1,2', '', '3', '3', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');
INSERT INTO `task` VALUES (16, '9', '1', '0', '功能融合', '将三原县原PVA，PVD和视频结构化平台单独运行，客户表示将结构化平台单独登录太繁琐，且平台数据没有拉通，需要PVA/PVD和结构化整合。', '三原', '1', '', '', '0', '1', '', '4', '5', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');
INSERT INTO `task` VALUES (17, '10', '2', '0', '更新', '更新', '三原', '1', '', '', '0', '1', '', '1', '5', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');
INSERT INTO `task` VALUES (18, '11', '3', '1', '更新', '更新', '三原', '1', '', '', '0', '1', '', '4', '5', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');
INSERT INTO `task` VALUES (19, '12', '4', '0', '更新', '更新1', '三原', '1', '', '', '0', '1', '', '4', '5', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');
INSERT INTO `task` VALUES (20, '6', '1', '0', '更新2', '更新', '四原', '1', '', '', '0', '6', '', '4', '5', '5', '1547395200001', '1547999999998', '0', '0', '0', '备注', '1546223891180', '1551667150540');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(32) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `realname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '真实名称',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  `userType` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '用户类型: 0.普通 1管理员',
  `status` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '账号状态:0.正常  1.删除',
  `position` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '职务',
  `orgCode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '工作组',
  `usualPlace` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '常驻地',
  `lastLogin` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '最后登录时间',
  `visitTimes` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '访问次数',
  `createdAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updatedAt` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (3, 'hewenjie', 'e10adc3949ba59abbe56e057f20f883e', '贺文杰', 'hewenjie@netposa.com', '15686225261', '', '1', '0', '3', '4', '西安', '1547522434985', '69', '1546913022013', '1547522434987');
INSERT INTO `user` VALUES (5, 'gujinlong', '123456', '谷进龙', 'gujinlong@netposa.com', '15686225261', '', '0', '0', '3', '4', '山西太原', '1547452188244', '2', '1547012443323', '1547452188247');
INSERT INTO `user` VALUES (8, 'wangpengyue', 'e10adc3949ba59abbe56e057f20f883e', '王鹏越', 'wangpengyue@netposa.com', '15686225261', '', '0', '0', '3', '4', '西安', '', '', '1547453016968', '1547453016968');
INSERT INTO `user` VALUES (9, 'zhangliang', 'e10adc3949ba59abbe56e057f20f883e', '张亮', 'zhangliang@netposa.com', '15686225261', '', '0', '0', '3', '4', '西安', '', '', '1547521410506', '1547521410506');

SET FOREIGN_KEY_CHECKS = 1;
