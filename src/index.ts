import { ViewClass } from './views/view.class';
import { ProgramController } from './controllers/controller.class';
import { ResponseService } from './services/response.service.class';

const view = new ViewClass();
const response = new ResponseService();
const programController = new ProgramController(view, response);
