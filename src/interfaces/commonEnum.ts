/**
 * Storage数据索引
 */
enum STORAGE_KEYS {
  IS_LOADEDAPP = 'IS_LOADEDAPP',
  LOGIN_STATUS = 'LOGIN_STATUS',
  TOKEN = 'TOKEN',
  UID = 'UID',
  BOTTOM_SAFEAREA = 'BOTTOM_SAFEAREA',
  DEVICEID = 'DEVICEID',
  APP_INFO = 'APP_INFO',
}

/**
 * 路由映射
 */
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

export { STORAGE_KEYS, PATH };
