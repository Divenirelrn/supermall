import {request2} from "./request";

export function getDetailInfo(iid){
  return request2({
    url: '/detail',
    params: {
      iid
    }
  })
}
