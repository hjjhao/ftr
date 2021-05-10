import * as readline from 'readline';
import { IView, IDisplayOption } from '../interfaces/iview.interface';

export class ViewClass implements IView {
  display(option: IDisplayOption) {
    if (option.display) console.log(`>> ${option.display.join('\n>> ')}`);
    if (option.tips) return this.waitingForInput(option.tips);
  }

  waitingForInput(tips): Promise<string> {
    tips = tips || '>> ';

    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(`>> ${tips}\n`, (answer) => {
        rl.close();
        resolve(answer.trim());
      });
    });
  }
}
