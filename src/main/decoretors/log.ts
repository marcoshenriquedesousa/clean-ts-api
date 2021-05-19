import { Controller, HttpRequest, HttpRespose } from '../../presentation/protocols'
import { LogErrorRepository } from '../../data/protocols/log-error-repository'

export class LogControllerDecoretor implements Controller {
  private readonly controller: Controller
  private readonly logErrorRepository: LogErrorRepository
  constructor (controller: Controller, logErrorRepository: LogErrorRepository) {
    this.controller = controller
    this.logErrorRepository = logErrorRepository
  }

  async handle (httpRequest: HttpRequest): Promise<HttpRespose> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.log(httpResponse.body.stack)
    }
    return httpResponse
  }
}
