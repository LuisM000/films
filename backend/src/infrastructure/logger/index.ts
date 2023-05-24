import { Logger } from '../../shared/domain/Logger'

export class ServerLogger implements Logger {

  public debug(message: string): void {
    console.debug(message)
  }

  public info(message: string): void {
    console.info(message)
  }

  public error(message: string): void {
    console.error(message)
  }

  public warning(message: string): void {
    console.warn(message)
  }

  public critical(message: string): void {
    console.error(message)
  }
}