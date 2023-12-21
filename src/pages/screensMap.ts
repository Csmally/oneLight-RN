import { PATH } from '@/common/consts';
import WelcomeScreen from './welcomeScreen';
import LoginScreen from './loginScreen';
import HomeScreen from './homeScreen';
import MineScreen from './mineScreen';
import MarketScreen from './marketScreen';
import CircleScreen from './circleScreen';
import TestScreen from './testScreen';
import TestScreen1 from './testScreen1';
import AddNewsScreen from './newsTypeChooseScreen';

const AppPaths: Route[] = [
  {
    path: PATH.WELCOME_SCREEN,
    component: WelcomeScreen,
    title: '欢迎',
    headerShown: false,
  },
  {
    path: PATH.LOGIN_SCREEN,
    component: LoginScreen,
    title: '登录',
    presentation: 'modal',
  },
  {
    path: PATH.NEWS_TYPE_CHOOSE_SCREEN,
    component: AddNewsScreen,
    title: '类型',
    headerShown: false,
    animation: 'fade',
  },
  {
    path: 'Test',
    component: TestScreen,
    title: '测试1',
    animation: 'slide_from_bottom',
  },
  {
    path: 'Test2',
    component: TestScreen1,
    title: '测试2',
  },
];

const RootMainPaths = [
  {
    path: PATH.HOME_SCREEN,
    component: HomeScreen,
    title: '首页',
  },
  {
    path: PATH.MARKET_SCREEN,
    component: MarketScreen,
    title: '集市',
  },
  {
    path: PATH.CIRCLE_SCREEN,
    component: CircleScreen,
    title: '圈子',
  },
  {
    path: PATH.MINE_SCREEN,
    component: MineScreen,
    title: '我的',
  },
];

export { RootMainPaths, AppPaths };
