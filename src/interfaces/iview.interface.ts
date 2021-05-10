export interface IView {
  display: (IDisplayOption) => void;
  waitingForInput: (string) => Promise<string>;
}

/**
 * view display configuration setting
 *
 * @export
 * @interface IDisplayOption
 */
export interface IDisplayOption {
  display?: Array<string>;
  action?: string;
  tips?: string;
}
