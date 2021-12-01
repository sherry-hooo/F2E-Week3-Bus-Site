import axios from "axios";
import jsSHA from "jssha";

const apiClient = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC/v2/Bus/",
  withCredentials: false,
});

// 請求攔截器
apiClient.interceptors.request.use((config) => {
  config.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...getAuthorizationHeader(),
  };
  return config;
});

export default {
  getCityBusStation(city) {
    console.log("發station");
    return apiClient.get(`/Station/City/${city}/?&$format=JSON`);
  },
  getCityBusRoute(city) {
    console.log("發route");
    return apiClient.get(`/Route/City/${city}/?&$format=JSON`);
  },
  getOneCityBusRoute(city, route, UID) {
    return apiClient.get(`/Route/City/${city}/${route}`, {
      params: {
        $filter: `RouteUID eq '${UID}'`,
        $format: "JSON",
      },
    });
  },
  getRouteDestination(city, route, UID) {
    return apiClient.get(`/Route/City/${city}/${route}`, {
      params: {
        $select: `DestinationStopNameZh, DepartureStopNameZh`,
        $filter: `RouteUID eq '${UID}'`,
        $format: "JSON",
      },
    });
  },
  getStopOfRoute(city, routeName, UID) {
    console.log("發公車路線");
    return apiClient.get(`/StopOfRoute/City/${city}/${routeName}`, {
      params: {
        $filter: `RouteUID eq '${UID}'`,
        $format: "JSON",
      },
    });
  },
  getETARoute(city, routeName, UID) {
    console.log("發到站時間", city, routeName, UID);
    return apiClient.get(`/EstimatedTimeOfArrival/City/${city}/${routeName}`, {
      params: {
        $filter: `RouteUID eq '${UID}'`,
        $format: "JSON",
      },
    });
  },
  getNearbyStation(lat = 23.4751824, lon = 120.4614314, distance = 300) {
    return apiClient.get(`/Station/NearBy`, {
      params: {
        $spatialFilter: `nearby(${lat}, ${lon}, ${distance})`,
        $format: "JSON",
      },
    });
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
