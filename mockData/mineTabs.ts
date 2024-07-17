import { IP } from './hostConfig';

const mineTabs = [
  {
    desc: '待支付',
    icon: `http://${IP}:7002/public/appAssets/icons/wallet.png`,
  },
  {
    desc: '进行中',
    icon: `http://${IP}:7002/public/appAssets/icons/ordering.png`,
  },
  {
    desc: '待评价',
    icon: `http://${IP}:7002/public/appAssets/icons/rate.png`,
  },
  {
    desc: '售后/退款',
    icon: `http://${IP}:7002/public/appAssets/icons/refund.png`,
  },
];

export default mineTabs;
