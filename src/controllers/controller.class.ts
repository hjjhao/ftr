import { IView, IDisplayOption } from '../interfaces/iview.interface';
import { IResponseService } from '../interfaces/response.service.interface';
import { IController } from '../interfaces/icontroller.interface';

export class ProgramController implements IController {
  public timer: NodeJS.Timeout;
  constructor(private view: IView, private responseService: IResponseService) {
    this.init();
  }

  async init(): Promise<void> {
    try {
      let option: IDisplayOption = this.responseService.init();
      let value = await this.view.display(option);
      while (true) {
        option = this.responseService.getResponse(value);
        if (option.action && this[option.action]) this[option.action]();
        value = await this.view.display(option);
      }
    } catch (error) {
      throw error;
    }
  }

  setTimer(): void {
    this.timer = setInterval(() => {
      if (this.responseService.getSortedInput())
        this.view.display({ display: [this.responseService.getSortedInput()] });
    }, this.responseService.timerInterval * 1000);
  }

  haltTimer(): void {
    if (!this.timer) return;
    clearInterval(this.timer);
  }

  exit(): void {
    process.exit(0);
  }
}
