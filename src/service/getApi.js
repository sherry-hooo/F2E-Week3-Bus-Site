import axios from "axios";
import jsSHA from "jssha";

const apiClient = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC/v2/Bus/",
  withCredentials: false,
});

// 請求攔截器
apiClient.interceptors.request.use((config) => {
  console.log("攔截器", config);
  config.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...getAuthorizationHeader(),
  };
  console.log("攔截器", config);
  return config;
});

export default {
  getCityBusStation(city) {
    return apiClient.get(`/Station/City/${city}?$format=JSON`);
  },
  getCityBusRoute(city) {
    return apiClient.get(`/Route/City/${city}?$format=JSON`);
  },
  getCityBusInfo(mode, city, top, skip) {
    console.log(mode, city, top, skip);
    return apiClient.get(
      `/${mode}/City/${city}/?${top === 0 ? "" : `$top=${top}`}&${
        skip === 0 ? "" : `$skip=${skip}`
      }&$format=JSON`
    );
  },
  getStopOfRoute(city, routeName) {
    return apiClient.get(`/StopOfRoute/City/${city}/${routeName}?$format=JSON`);
  },
  getETARoute(city, routeName) {
    return apiClient.get(
      `/EstimatedTimeOfArrival/City/${city}/${routeName}?$format=JSON`
    );
  },
};

function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
  let AppID = "00889de6156c405baaaa9c20918d88a3";
  let AppKey = "i8WOUOLfmnnAoctsSdU4yp2dEpI";
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
}
