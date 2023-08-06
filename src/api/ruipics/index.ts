import request2 from "@/utils/request2"

enum API {
  ONE_DAY_PICS_URL = "/class/apis.json?action=GET_ATTENDANCE_V1_EVENT_BYEVENTID_USER_BYUSERUID",
}

//获取某一天的照片
export const reqOneDayPics = (data: any) =>
  request2.post<any, any>(API.ONE_DAY_PICS_URL, data)
