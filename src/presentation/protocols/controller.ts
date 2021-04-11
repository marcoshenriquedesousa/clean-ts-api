import { HttpRespose, HttpRequest } from '../protocols/http'
export interface Controller {
  handle (httpRequest: HttpRequest): Promise<HttpRespose>
}
