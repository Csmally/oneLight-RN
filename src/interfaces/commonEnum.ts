/* eslint-disable no-unused-vars */
/**
 * 基础屏幕尺寸
 * 以iPhone6为基准
 */
enum BASE_SCREEN_SIZE {
  BASE_WIN_WIDTH = 375,
  BASE_WIN_HEIGHT = 667,
}

/**
 * 字符串常量
 */
enum CONSTS_VALUE {
  STATUSBAR_HEIGHT = 'STATUSBAR_HEIGHT',
  BOTTOMTABS_HEIGHT = 'BOTTOMTABS_HEIGHT',
}
/**
 * Storage数据索引
 */
enum STORAGE_KEYS {
  IS_LOADEDAPP = 'IS_LOADEDAPP',
  LOGIN_STATUS = 'LOGIN_STATUS',
  TOKEN = 'TOKEN',
  UID = 'UID',
}

export {BASE_SCREEN_SIZE, CONSTS_VALUE, STORAGE_KEYS};
