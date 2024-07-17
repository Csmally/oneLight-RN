import { IP } from './hostConfig';

const homeTabs = [
  {
    title: '全部',
    img: `http://${IP}:7002/public/appAssets/homePageTabs/all.png`,
    id: '0',
  },
  {
    title: '美食',
    img: `http://${IP}:7002/public/appAssets/homePageTabs/food.png`,
    id: '1',
  },
  {
    title: '快递',
    img: `http://${IP}:7002/public/appAssets/homePageTabs/express.png`,
    id: '2',
  },
  {
    title: 'Replace',
    img: `http://${IP}:7002/public/appAssets/homePageTabs/class.png`,
    id: '3',
  },
  {
    title: '兼职',
    img: `http://${IP}:7002/public/appAssets/homePageTabs/job.png`,
    id: '4',
  },
];

export default homeTabs;
