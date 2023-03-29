import ElementGenerator from "@/library/ElementGernerator";

export const Card = function (obj) {
  console.log(obj);
  return ElementGenerator({
    element: "div",
    className:
      "flex flex-col bg-[#205295] rounded py-2 px-4 text-center text-white",
    child: [
      ElementGenerator({
        element: "div",
        child: ElementGenerator({
          element: "img",
          src: obj.current.condition.icon,
        }),
      }),
      ElementGenerator({
        element: "div",
        child: obj.location.name,
      }),
      ElementGenerator({
        element: "div",
        child: obj.current.temp_c + "°C",
      }),
    ],
  });
};

// {
//   "location": {
//       "name": "Qom",
//       "region": "Qom",
//       "country": "Iran",
//       "lat": 34.64,
//       "lon": 50.88,
//       "tz_id": "Asia/Tehran",
//       "localtime_epoch": 1680090055,
//       "localtime": "2023-03-29 15:10"
//   },
//   "current": {
//       "last_updated_epoch": 1680089400,
//       "last_updated": "2023-03-29 15:00",
//       "temp_c": 27.2,
//       "temp_f": 81,
//       "is_day": 1,
//       "condition": {
//           "text": "Sunny",
//           "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
//           "code": 1000
//       },
//       "wind_mph": 7.4,
//       "wind_kph": 11.9,
//       "wind_degree": 313,
//       "wind_dir": "NW",
//       "pressure_mb": 1007,
//       "pressure_in": 29.73,
//       "precip_mm": 0,
//       "precip_in": 0,
//       "humidity": 16,
//       "cloud": 0,
//       "feelslike_c": 25.4,
//       "feelslike_f": 77.7,
//       "vis_km": 10,
//       "vis_miles": 6,
//       "uv": 7,
//       "gust_mph": 8.5,
//       "gust_kph": 13.7
//   }
// }
