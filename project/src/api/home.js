import { request } from "utils/request"

export function getNavigatorList() {
  const url = "http://localhost:8081/getNavigatorList"
  return request(url)
}

export function getCarouselList() {
  const url = "http://localhost:8081/getCarouselList"
  return request(url)
}

export function getDropDownList() {
  const url = "http://localhost:8081/getDropDownList"
  return request(url)
}
