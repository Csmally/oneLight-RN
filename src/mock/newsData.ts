const newsData: NewsItem[] = [
  {
    id: '1',
    publisherName: 'CYXI',
    avatar: 'https://ice.frostsky.com/2024/07/11/1d190b1cfccfe56dde78dc1ddc5a6de8.jpeg',
    imgs: [
      'https://ice.frostsky.com/2024/07/11/d6c223fbdbdd6389e6fed43678b58e38.jpeg',
      'https://ice.frostsky.com/2024/07/11/7c341cdaaea092720b37871d62e13ac2.jpeg',
      'https://ice.frostsky.com/2024/07/11/dccfe3a7fef579f2cd22fd5155783836.jpeg',
      'https://ice.frostsky.com/2024/07/11/2eda9c06e437f3647c992dfa1e908e0a.jpeg',
      'https://ice.frostsky.com/2024/07/11/e540200219e55fd05efcf5a5d377ed82.jpeg'
    ],
    description:
      '开头回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机回家啊健身房公交卡是否更加快速的风景还能可贵飞机结尾',
    publishTime: '刚刚',
    tags: [1, 2],
  },
  {
    id: '2',
    publisherName: 'x1',
    avatar: 'https://ice.frostsky.com/2024/07/11/0b06d1367f529f6abcfec6690cf5dcb7.jpeg',
    imgs: [
      'https://ice.frostsky.com/2024/07/11/2eda9c06e437f3647c992dfa1e908e0a.jpeg',
      'https://ice.frostsky.com/2024/07/11/61b1d659060e9c9b4c9f3761a6ef36b2.jpeg',
      'https://ice.frostsky.com/2024/07/11/7c341cdaaea092720b37871d62e13ac2.jpeg'
    ],
    description: '减肥黄金时代放假开始就',
    publishTime: '15分钟前',
  },
  {
    id: '3',
    publisherName: '盖世英雄',
    avatar: 'https://ice.frostsky.com/2024/07/11/4f51c7be812c1cafcbe07b045d4ba229.jpeg',
    imgs: [
      'https://ice.frostsky.com/2024/07/11/12ce3a136c1a9fdeb470c83ffccbf276.jpeg',
      'https://ice.frostsky.com/2024/07/11/aa3edc725bda2f6bbf6b8e4b3ee47a0a.jpeg',
      'https://ice.frostsky.com/2024/07/11/a0679e9ab7822ad467452aa3afd0bf11.jpeg',
      'https://ice.frostsky.com/2024/07/11/40dc0f4b7303ff272fa4b7f42b532874.jpeg'
    ],
    description: '减肥黄金时代放假开始就',
    publishTime: '1小时前',
    tags: [4],
  },
  {
    id: '4',
    publisherName: 'Alibaba',
    avatar: 'https://ice.frostsky.com/2024/07/11/a0679e9ab7822ad467452aa3afd0bf11.jpeg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: [
      'https://ice.frostsky.com/2024/07/11/61b1d659060e9c9b4c9f3761a6ef36b2.jpeg',
    ],
  },
  {
    id: '5',
    publisherName: 'ByteDance',
    avatar: 'https://ice.frostsky.com/2024/07/11/2eda9c06e437f3647c992dfa1e908e0a.jpeg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 18:36:28',
  },
  {
    id: '6',
    publisherName: '呆头鹅&豆',
    avatar: 'https://ice.frostsky.com/2024/07/11/61b1d659060e9c9b4c9f3761a6ef36b2.jpeg',
    description: '减肥黄金时代放假开始就aa$#@',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: [
      'https://ice.frostsky.com/2024/07/11/0b06d1367f529f6abcfec6690cf5dcb7.jpeg',
      'https://ice.frostsky.com/2024/07/11/2eda9c06e437f3647c992dfa1e908e0a.jpeg',
      'https://ice.frostsky.com/2024/07/11/40dc0f4b7303ff272fa4b7f42b532874.jpeg',
    ],
  },
  {
    id: '7',
    publisherName: '我™️',
    avatar: 'https://ice.frostsky.com/2024/07/11/7c341cdaaea092720b37871d62e13ac2.jpeg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 18:36:28',
  },
  {
    id: '8',
    publisherName: 'hai霸天',
    avatar: 'https://ice.frostsky.com/2024/07/11/435ffea906f3544acee548ab9be1e918.jpeg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: [
      'https://ice.frostsky.com/2024/07/11/1d190b1cfccfe56dde78dc1ddc5a6de8.jpeg',
    ],
  },
  {
    id: '9',
    publisherName: '胡*图图',
    avatar: 'https://ice.frostsky.com/2024/07/11/12ce3a136c1a9fdeb470c83ffccbf276.jpeg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 18:36:28',
  },
  {
    id: '10',
    publisherName: '渔夫#',
    avatar: 'https://ice.frostsky.com/2024/07/11/aa3edc725bda2f6bbf6b8e4b3ee47a0a.jpeg',
    description: '减肥黄金时代放假开始就',
    publishTime: '2023-09-23 13:12:00',
    tags: [3],
    imgs: [
      'https://ice.frostsky.com/2024/07/11/c09e002e5b1b02121172bd1d26bdd324.jpeg'
    ],
  },
];

export default newsData;
