




const cardConf = [
  [
    {
      title: '酒店',
      type: 'hotel',
      path:'',
      subType: 'jiuDian'
    },
    {
      title: '民宿/客栈',
      type: 'hotel',
      path:'',
      subType: 'minSu'
    },
    {
      title: '特价/爆款',
      type: 'hotel',
      path:'',
      subType: 'teJia'
    },
  ],[
    {
      title: '机票',
      type: 'fly',
      path:'/flight',
      subType: 'jiPiao'
    },{
      title: '接送机/包车',
      type: 'fly',
      path:'',
      subType: 'jieSongJi'
    },{
      title: '航班助手',
      type: 'fly',
      path:'',
      subType: 'zhuShou'
    }
  ],[
    {
      title: '火车票',
      path:'',
      type: 'train',
      subType: 'huoChe'
    },{
      title: '汽车/船票',
      path:'',
      type: 'train',
      subType: 'qiChe'
    },{
      title: '租车',
      path:'',
      type: 'train',
      subType: 'zuChe'
    }
  ],[
    {
      title: '旅游',
      path:'',
      type: 'vacation',
      subType: 'lveYou'
    },{
      title: '门票/活动',
      path:'',
      type: 'vacation',
      subType: 'menPiao'
    },{
      title: '周边游',
      path:'',
      type: 'vacation',
      subType: 'zhouBianYou'
    }
  ],[
    {
      title: '攻略/景点',
      path:'',
      type: 'gs',
      subType: 'gongLve'
    },{
      title: '美食',
      path:'',
      type: 'gs',
      subType: 'meiShi'
    },{
      title: '购物/免税',
      path:'',
      type: 'gs',
      subType: 'gouWu'
    }
  ]
]


const cardSubConf = [
  [
    {
      title: '向导/包车',
      path:'',
      subType: 'xiangDao'
    },{
      title: '保险',
      path:'',
      subType: 'baoXian'
    },{
      title: '微领队',
      path:'',
      subType: 'weiLinDui'
    },{
      title: '一日游',
      path:'',
      subType: 'yiRiYou'
    },{
      title: '定制游',
      path:'',
      subType: 'dingZhiYou'
    }
  ],[
    {
      title: '邮轮游',
      path:'',
      subType: 'youLunYou'
    },{
      title: '外币兑换',
      path:'',
      subType: 'waiBiDuiHuan'
    },{
      title: '签证',
      path:'',
      subType: 'qianZheng'
    },{
      title: 'WIFI电话卡',
      path:'',
      subType: 'wifiDianHua'
    },{
      title: '行李寄送',
      path:'',
      subType: 'xingLiJiSong'
    }
  ],[
    {
      title: '拿去花',
      path:'',
      subType: 'naQuHua'
    },{
      title: '礼品卡',
      path:'',
      subType: 'LiPingKa'
    },{
      title: '信用卡',
      path:'',
      subType: 'xinYongKa'
    },{
      title: '会员签到',
      path:'',
      subType: 'huiYuanQianDao'
    },{
      title: '超级会员',
      path:'',
      subType: 'chaoJiHuiYuan'
    }
  ],[
    {
      title: '在线商城',
      path:'',
      subType: 'zaiXianShangCheng'
    },{
      title: '携程小诗机',
      path:'',
      subType: 'xcXiaoShiJi'
    },{
      title: '紧急支援',
      path:'',
      subType: 'JingJiZhiYuan'
    },{
      title: '加盟合作',
      path:'',
      subType: 'jiaMengHeZuo'
    },{
      title: '公司会务',
      path:'',
      subType: 'gongSiHuiWu'
    }
  ],[
    {
      title: '企业商旅',
      path:'',
      subType: 'qiYeShangLve'
    },{
      title: 'Trip.com',
      path:'',
      subType: 'tripCom'
    }
  ]
]


export {
  cardConf,
  cardSubConf
}