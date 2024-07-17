import { IP } from './hostConfig';

const homeNews: NewsItem[] = [
  {
    id: '1',
    publisherName: 'CYXI',
    avatar: `http://${IP}:7002/public/imgs/small/1.jpg`,
    imgs: [
      `http://${IP}:7002/public/imgs/big/1.jpg`,
      `http://${IP}:7002/public/imgs/big/4.jpg`,
      `http://${IP}:7002/public/imgs/small/2.jpg`,
      `http://${IP}:7002/public/imgs/big/4.jpg`,
      `http://${IP}:7002/public/imgs/small/4.jpg`,
      `http://${IP}:7002/public/imgs/big/6.jpg`,
    ],
    description:
      '开头回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机结尾',
    publishTime: '刚刚',
    tags: [1, 2],
  },
  {
    id: '2',
    publisherName: 'x1',
    avatar: `http://${IP}:7002/public/imgs/small/2.jpg`,
    imgs: [
      `http://${IP}:7002/public/imgs/big/2.jpg`,
      `http://${IP}:7002/public/imgs/small/4.jpg`,
      `http://${IP}:7002/public/imgs/small/9.jpg`,
    ],
    description: '减肥黄金时代放假开始就',
    publishTime: '15分钟前',
  },
  {
    id: '3',
    publisherName: '盖世英雄',
    avatar: `http://${IP}:7002/public/imgs/small/3.jpg`,
    imgs: [
      `http://${IP}:7002/public/imgs/big/2.jpg`,
      `http://${IP}:7002/public/imgs/small/5.jpg`,
      `http://${IP}:7002/public/imgs/small/1.jpg`,
      `http://${IP}:7002/public/imgs/big/10.jpg`,
    ],
    description: '减肥黄金时代放假开始就',
    publishTime: '1小时前',
    tags: [4],
  },
  {
    id: '4',
    publisherName: 'Alibaba',
    avatar: `http://${IP}:7002/public/imgs/small/4.jpg`,
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: [`http://${IP}:7002/public/imgs/big/3.jpg`],
  },
  {
    id: '5',
    publisherName: 'ByteDance',
    avatar: `http://${IP}:7002/public/imgs/small/5.jpg`,
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 18:36:28',
  },
  {
    id: '6',
    publisherName: '呆头鹅&豆',
    avatar: `http://${IP}:7002/public/imgs/small/6.jpg`,
    description: '减肥黄金时代放假开始就aa$#@',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: [
      `http://${IP}:7002/public/imgs/big/6.jpg`,
      `http://${IP}:7002/public/imgs/big/1.jpg`,
    ],
  },
  {
    id: '7',
    publisherName: '我™️',
    avatar: `http://${IP}:7002/public/imgs/small/7.jpg`,
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 18:36:28',
  },
  {
    id: '8',
    publisherName: 'hai霸天',
    avatar: `http://${IP}:7002/public/imgs/small/8.jpg`,
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: [`http://${IP}:7002/public/imgs/small/9.jpg`],
  },
  {
    id: '9',
    publisherName: '胡*图图',
    avatar: `http://${IP}:7002/public/imgs/small/9.jpg`,
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 18:36:28',
  },
  {
    id: '10',
    publisherName: '渔夫#',
    avatar: `http://${IP}:7002/public/imgs/small/10.jpg`,
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: [`http://${IP}:7002/public/imgs/big/6.jpg`],
  },
];

export default homeNews;
