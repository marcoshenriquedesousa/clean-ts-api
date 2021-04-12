import { HttpRespose } from '../protocols/http'
import { ServerError } from '../errors'

export const badRequest = (error: Error): HttpRespose => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpRespose => ({
  statusCode: 500,
  body: new ServerError()
})

export const ok = (data: any): HttpRespose => ({
  statusCode: 200,
  body: data
})
