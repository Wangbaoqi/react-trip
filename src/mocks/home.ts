import Mock from "mockjs";

const getHomeCardList = (config) => {
  return Mock.mock({
    data: {
      item: [
        {
          cardType: "col2",
          items: [
            {
              blockKey: "hotsale",
              blockType: "salelive",
              blockTitle: "特价好货直播中",
              blockTitleImage:
                "https://images4.c-ctrip.com/target/0zc71120008g0ha4z93C6.png",
              blockUrl:
                "/rn_destination_onsale/main.js?CRNModuleName=rn_destination_onsale&CRNType=1&isHideNavBar=YES",
              blockH5url:
                "https://m.ctrip.com/webapp/cw/gs/onsale/boomHome.html?sct=mini_homesale",
              items: [
                {
                  id: "98",
                  title: "苏州吴中白金汉爵大酒店",
                  url: "https://m.ctrip.com/webapp/cw/gs/onsale/boomHome.html?sct=app_homesale&bannerid=450&type=2&destid=2027104&destname=%E5%8D%8E%E4%B8%9C%E5%9C%B0%E5%8C%BA&sct=app_homesale",
                  ext: {
                    blockKey: "hotsale",
                    blockTitle: "特价·直播",
                    locationGlobalID: "",
                    residentID: "",
                    id: "98",
                    detailstatus: "0",
                    productType: "",
                  },
                  subTitle: { icon: "", text: "立减￥239" },
                  image:
                    "https://dimg04.c-ctrip.com/images/0705s120008xxtlgfB052.jpg?proc=limitsize/s_10936,C0E4",
                  price: "199",
                  originPrice: "438",
                  tag: { text: "省钱卡专享" },
                  sloganTag: { text: "特价好货直播中" },
                },
                {
                  id: "100",
                  title: "上海邻家美利亚酒店",
                  url: "https://m.ctrip.com/webapp/cw/gs/onsale/boomHome.html?sct=app_homesale&type=2&destid=2&destname=上海&sct=app_homesale",
                  ext: {
                    blockKey: "hotsale",
                    blockTitle: "特价·直播",
                    locationGlobalID: "",
                    residentID: "",
                    id: "100",
                    detailstatus: "0",
                    productType: "",
                  },
                  subTitle: { icon: "", text: "立减￥1193" },
                  image:
                    "https://dimg04.c-ctrip.com/images/0702l120008xxunm9DBDA.png?proc=limitsize/s_115430,9FAD",
                  price: "999",
                  originPrice: "2192",
                  tag: { text: "酒店套餐" },
                  sloganTag: { text: "特价好货直播中" },
                },
                {
                  id: "89",
                  title: "好物1元抢>",
                  url: "https://m.ctrip.com/webapp/cw/gs/onsale/boomHome.html?sct=app_homesale&&type=4&destid=2027104&destname=%E5%8D%8E%E4%B8%9C%E5%9C%B0%E5%8C%BA&sct=app_homesale",
                  ext: {
                    blockKey: "hotsale",
                    blockTitle: "特价·直播",
                    locationGlobalID: "",
                    residentID: "",
                    id: "89",
                    detailstatus: "0",
                    productType: "",
                  },
                  image:
                    "https://dimg04.c-ctrip.com/images/07018120008xskbkc0131.png",
                  tag: { text: "" },
                  sloganTag: { text: "特价好货直播中" },
                },
              ],
            },
            {
              blockKey: "rank",
              blockType: "rank",
              blockTitle: "权威排行榜",
              blockTitleImage:
                "https://images4.c-ctrip.com/target/0zc6g120008g0hcb587E5.png",
              blockSlogan: { icon: "", text: "权威排行榜" },
              blockUrl:
                "ctrip://wireless/h5?type=1&url=L2NyYW5raW5nL2luZGV4Lmh0bWwjY3JhbmtpbmcvaG90VW5EZXN0aW5hdGlvbkRldGFpbHMvMTAwMDAwMDcxMzkzLmh0bWw/aXNoaWRlaGVhZGVyPXRydWUmaXNIaWRlTmF2QmFyPVlFUyZkaXN0cmljdElkPTIwMjcxMDQ=",
              blockH5url:
                "https://m.ctrip.com/webapp/you/cranking/hotUnDestinationDetails/100000071416.html?ishideheader=true&isHideNavBar=YES&districtId=2027087&s_guid=c6e879ba-0411-44e3-a39c-7fe617c00693",
              items: [
                {
                  id: "100001405589",
                  productType: "hotel",
                  title: "华东避暑酒店榜",
                  url: "https://m.ctrip.com/webapp/you/cranking/hotUnDestinationDetails/100001405589.html?ishideheader=true&isHideNavBar=YES&districtId=2027104&originpage=home",
                  ext: {
                    blockKey: "rank",
                    blockTitle: "携程精选榜",
                    locationGlobalID: "",
                    residentID: "",
                    id: "100001405589",
                    detailstatus: "0",
                    productType: "hotel",
                  },
                  image:
                    "https://youimg1.c-ctrip.com/target/0100w120008p00he93B55_R_238_268.png",
                  tag: { text: "华东" },
                },
                {
                  id: "100001405712",
                  productType: "sight",
                  title: "华东演出景点榜",
                  url: "https://m.ctrip.com/webapp/you/cranking/hotUnDestinationDetails/100001405712.html?ishideheader=true&isHideNavBar=YES&districtId=2027104&originpage=home",
                  ext: {
                    blockKey: "rank",
                    blockTitle: "携程精选榜",
                    locationGlobalID: "",
                    residentID: "",
                    id: "100001405712",
                    detailstatus: "0",
                    productType: "sight",
                  },
                  image:
                    "https://youimg1.c-ctrip.com/target/01033120008r4sn4pACB9_R_238_268.jpg",
                  tag: { text: "华东" },
                },
              ],
            },
          ],
        },
      ],
    },
    status: 200,
    msg: "请求成功",
  });
};

export {
  getHomeCardList
};
