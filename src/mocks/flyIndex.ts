import Mock from "mockjs";

const getAirportList = (config) => {
  return Mock.mock({
    data: {
      "ResponseStatus":{
        "Timestamp":"/Date(1631518542327+0800)/",
        "Ack":"Success",
        "Errors":[

        ],
        "Build":null,
        "Version":null,
        "Extension":Array[2]
      },
      "hl":Array[20],
      "pl":Array[22],
      "rg":null
    },
    status: 200,
    msg: "请求成功",
  });
};

export {
  getAirportList
};
