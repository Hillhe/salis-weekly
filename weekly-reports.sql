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

 Date: 08/01/2019 15:09:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for area
-- ----------------------------
DROP TABLE IF EXISTS `area`;
CREATE TABLE `area`  (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '区域id',
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '名称',
  `createdAt` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updatedAt` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` smallint(6) NOT NULL DEFAULT 1 COMMENT '状态:0.正常  1.删除',
  `beiyong1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `beiyong2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of area
-- ----------------------------
INSERT INTO `area` VALUES (1, '陕西集', '1546855273349', '1546856462660', 0, NULL, NULL);
INSERT INTO `area` VALUES (2, '山西集', '1546855273349', '1546855273349', 0, NULL, NULL);

-- ----------------------------
-- Table structure for org
-- ----------------------------
DROP TABLE IF EXISTS `org`;
CREATE TABLE `org`  (
  `id` int(11) NOT NULL COMMENT 'id',
  `orgCode` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '机构代码',
  `orgName` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '机构名称',
  `parentId` int(10) NOT NULL COMMENT '父机构代码 -1表示无父机构',
  `dutyPerson` int(20) NULL DEFAULT NULL COMMENT '负责人id',
  `createdAt` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updatedAt` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of org
-- ----------------------------
INSERT INTO `org` VALUES (1, '1', '西北集成研发', -1, NULL, '1546912411558', '1546912411558');
INSERT INTO `org` VALUES (2, '2', '项目管理组', 1, NULL, '1546912411558', '1546912411558');
INSERT INTO `org` VALUES (3, '3', '后端开发组', 1, NULL, '1546912411558', '1546912411558');
INSERT INTO `org` VALUES (4, '4', '前端开发组', 1, NULL, '1546912411558', '1546912411558');
INSERT INTO `org` VALUES (5, '5', '移动开发组', 1, NULL, '1546912411558', '1546912411558');

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project`  (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '项目id',
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '项目名称',
  `area` smallint(6) NOT NULL COMMENT '项目所属区域',
  `prods` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '包括的产品',
  `summary` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '概要',
  `dutyPerson` int(10) NULL DEFAULT NULL COMMENT '项目负责人id',
  `createPerson` int(10) NULL DEFAULT NULL COMMENT '项目创建人id',
  `number` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目编号',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目状态',
  `wordpath` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目文档',
  `createdAt` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updatedAt` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `project_key_1`(`dutyPerson`) USING BTREE,
  CONSTRAINT `project_key_1` FOREIGN KEY (`dutyPerson`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sysconfig
-- ----------------------------
DROP TABLE IF EXISTS `sysconfig`;
CREATE TABLE `sysconfig`  (
  `key` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '键',
  `value` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '值',
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
  `createdAt` datetime(0) NULL DEFAULT NULL,
  `updatedAt` datetime(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sysconfig
-- ----------------------------
INSERT INTO `sysconfig` VALUES ('dict', '{\"PRO_SET\":{\"0\":{\"key\":0,\"value\":\"陕西集项目\"},\"1\":{\"key\":1,\"value\":\"山西集项目\"},\"2\":{\"key\":2,\"value\":\"内蒙集项目\"}},\"PRO_PERIOD\":{\"0\":{\"key\":0,\"value\":\"本周\"},\"1\":{\"key\":1,\"value\":\"下周\"}},\"PRODUCT\":{\"0\":{\"key\":0,\"value\":\"图解\"},\"1\":{\"key\":1,\"value\":\"PVD\"},\"2\":{\"key\":2,\"value\":\"PVA\"},\"3\":{\"key\":3,\"value\":\"ICP\"},\"4\":{\"key\":4,\"value\":\"超融合\"},\"5\":{\"key\":5,\"value\":\"OMS\"},\"6\":{\"key\":6,\"value\":\"VID\"},\"7\":{\"key\":7,\"value\":\"合成作战\"},\"8\":{\"key\":8,\"value\":\"人群\"},\"9\":{\"key\":9,\"value\":\"公安大数据\"},\"10\":{\"key\":10,\"value\":\"人脸\"},\"11\":{\"key\":11,\"value\":\"PSIM\"},\"12\":{\"key\":12,\"value\":\"IOD\"},\"13\":{\"key\":13,\"value\":\"其他\"}},\"PERSON_TYPE\":{\"0\":{\"key\":0,\"value\":\"RDPM\"},\"1\":{\"key\":1,\"value\":\"后端\"},\"2\":{\"key\":2,\"value\":\"前端\"},\"3\":{\"key\":3,\"value\":\"移动\"}},\"REQ_TYPE\":{\"0\":{\"key\":0,\"value\":\"新增功能\"},\"1\":{\"key\":1,\"value\":\"需求完善\"},\"2\":{\"key\":2,\"value\":\"对接第三方\"},\"3\":{\"key\":3,\"value\":\"大屏定制\"},\"4\":{\"key\":4,\"value\":\"系统融合\"}},\"PROBLEM_TYPE\":{\"0\":{\"key\":0,\"value\":\"性能\"},\"1\":{\"key\":1,\"value\":\"稳定性\"},\"2\":{\"key\":2,\"value\":\"Bug\"},\"3\":{\"key\":3,\"value\":\"交互体验\"}},\"SUPPORT_TYPE\":{\"0\":{\"key\":0,\"value\":\"安装部署\"},\"1\":{\"key\":1,\"value\":\"运维\"},\"2\":{\"key\":2,\"value\":\"问题排查\"},\"3\":{\"key\":3,\"value\":\"专项保障\"},\"4\":{\"key\":4,\"value\":\"巡检\"}},\"PRO_DELIVERYTYPE\":{\"0\":{\"key\":0,\"value\":\"现场\"},\"1\":{\"key\":1,\"value\":\"远程\"}},\"TASK_PROGRESS\":{\"0\":{\"key\":0,\"value\":\"计划中\"},\"1\":{\"key\":1,\"value\":\"进行中\"},\"2\":{\"key\":2,\"value\":\"已延期\"},\"3\":{\"key\":3,\"value\":\"已暂停\"},\"4\":{\"key\":4,\"value\":\"已完成\"},\"5\":{\"key\":5,\"value\":\"已取消\"}},\"PRO_STATUS\":{\"0\":{\"key\":0,\"value\":\"售前阶段\"},\"1\":{\"key\":1,\"value\":\"实施阶段\"},\"2\":{\"key\":2,\"value\":\"初验前期\"},\"3\":{\"key\":3,\"value\":\"终验前期\"},\"4\":{\"key\":4,\"value\":\"验收运维\"},\"5\":{\"key\":5,\"value\":\"其他阶段\"}},\"DATILY_WORK\":{\"0\":{\"key\":0,\"value\":\"沟通协调\"},\"1\":{\"key\":1,\"value\":\"会议讨论\"},\"2\":{\"key\":2,\"value\":\"出差缓解\"},\"3\":{\"key\":3,\"value\":\"请假\"},\"4\":{\"key\":4,\"value\":\"借调\"},\"5\":{\"key\":5,\"value\":\"培训学习\"},\"6\":{\"key\":6,\"value\":\"通用模块\"},\"7\":{\"key\":7,\"value\":\"重构\"},\"8\":{\"key\":8,\"value\":\"其他\"}}}', '字典', '2019-01-07 16:23:35', '2019-01-07 16:23:38');
INSERT INTO `sysconfig` VALUES ('appName', '周会管理系统', '周会管理系统', '2019-01-07 16:26:52', '2019-01-07 16:26:54');

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task`  (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '任务id',
  `pid` int(10) NULL DEFAULT NULL COMMENT '所属项目id',
  `period` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '周期',
  `target` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '目标',
  `dec` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '描述',
  `subProject` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '所属子项',
  `resType` smallint(6) NULL DEFAULT NULL COMMENT '需求类型',
  `sonType` smallint(6) NULL DEFAULT NULL COMMENT '子类型',
  `deliveryType` smallint(6) NULL DEFAULT NULL COMMENT '交付方式',
  `prod` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品',
  `version` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '版本号',
  `proDutyPerson` int(10) NULL DEFAULT NULL COMMENT '所属项目责任人id',
  `taskDutyPerson` int(10) NULL DEFAULT NULL COMMENT '任务责任人id',
  `workload` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '工作量',
  `startDate` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '开始日期',
  `endDate` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '交付日期',
  `progress` smallint(6) NULL DEFAULT NULL COMMENT '进度',
  `status` smallint(6) NULL DEFAULT NULL COMMENT '状态',
  `remark` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '备注',
  `createdAt` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updatedAt` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `task_key_1`(`pid`) USING BTREE,
  INDEX `task_key_2`(`taskDutyPerson`) USING BTREE,
  CONSTRAINT `task_key_1` FOREIGN KEY (`pid`) REFERENCES `project` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `task_key_2` FOREIGN KEY (`taskDutyPerson`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `realname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '真实名称',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  `userType` smallint(6) NULL DEFAULT 0 COMMENT '用户类型: 0.普通 1管理员',
  `status` smallint(6) NOT NULL DEFAULT 0 COMMENT '账号状态:0.正常  1.删除',
  `position` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '职务',
  `orgCode` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '工作组',
  `usualPlace` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '常驻地',
  `lastLogin` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '最后登录时间',
  `visitTimes` int(32) NULL DEFAULT 0 COMMENT '访问次数',
  `createdAt` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updatedAt` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (3, 'hewenjie', '123456', '贺文杰-test', 'hewenjie@netposa.com', '15686225261', '', 1, 0, '开发', '3', '西安', '1546931326778', 9, '1546913022013', '1546931326779');
INSERT INTO `user` VALUES (4, 'gujinlong', '123456', '谷进龙', 'gujinlong@netposa.com', '15686225261', '', 0, 0, '开发', '4', '太原', '', 0, '1546915739673', '1546915739673');

SET FOREIGN_KEY_CHECKS = 1;
