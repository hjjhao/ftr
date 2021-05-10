export interface IController {
  timer: NodeJS.Timeout;
  init: () => Promise<void>;
  setTimer: () => void;
  haltTimer: () => void;
  exit: () => void;
}
