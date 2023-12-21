/* eslint-disable no-unused-vars */
// APP版本号
const appVersion = {
  major: 1,
  minor: 0,
  patch: 0,
};

// API版本号
const apiVersion = {
  major: 1,
  minor: 0,
  patch: 0,
};

enum PATH {
  MAIN_SCREEN = 'MAIN_SCREEN', // 主页底部导航栏路由BottomTabs
  WELCOME_SCREEN = 'WELCOME_SCREEN', //欢迎页
  LOGIN_SCREEN = 'LOGIN_SCREEN', // 登录页
  HOME_SCREEN = 'HOME_SCREEN', // 首页
  MARKET_SCREEN = 'MARKET_SCREEN', // 集市
  CIRCLE_SCREEN = 'CIRCLE_SCREEN', // 圈子
  MINE_SCREEN = 'MINE_SCREEN', // 我的
  NEWS_TYPE_CHOOSE_SCREEN = 'NEWS_TYPE_CHOOSE_SCREEN', // 消息发布类型选择
  PUBLISH_SCREEN = 'PUBLISH_SCREEN', // 发布页
}

export { appVersion, apiVersion, PATH };
