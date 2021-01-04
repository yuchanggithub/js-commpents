
type onChangeCB = (checked: boolean) => any;
import './style/switch.scss';

import { strToDom } from '../../public/utils';

interface JsSwitchParamInterface {
    elem: HTMLElement;
    disabled?: boolean;
    defaultChecked?: boolean;
    onChange?: onChangeCB;
}

export default class JsSwitch {

    private swtichDom: HTMLButtonElement;

    private onchangeCB: onChangeCB;

    private htmlStr = `<button type="button" class="js-switch">
                        <div class="js-switch-handle"></div>
                        <span class="js-switch-inner"></span>
                    </button>`;

    constructor(param: JsSwitchParamInterface) {
        this.swtichDom = <HTMLButtonElement>strToDom(this.htmlStr);
        this.disabled = param.disabled || false;
        this.checked = param.defaultChecked || false;
        this.onchangeCB = param.onChange;
        this.initEvent();
        param.elem.appendChild(this.swtichDom);
    }

    private initEvent() {
        this.swtichDom.onclick = () => {
            if (this.checked) {
                this.checked = false;
            } else {
                this.checked = true;
            }
            this.onchangeCB && this.onchangeCB(this.checked);
        }
    }

    public onChange(callback: onChangeCB) {
        this.onchangeCB = callback;
    }

    public set checked(value: boolean) {
        if (value) {
            this.swtichDom.classList.add('js-switch-checked');
        } else {
            this.swtichDom.classList.remove('js-switch-checked');
        }
    }

    public get checked(): boolean {
        return this.swtichDom.classList.contains('js-switch-checked');
    }

    public set disabled(value: boolean) {
        this.swtichDom.disabled = value;
        if (value) {
            this.swtichDom.classList.add('js-switch-disabled');
        } else {
            this.swtichDom.classList.remove('js-switch-disabled');
        }
    }

    public get disabled(): boolean {
        return this.swtichDom.classList.contains('js-switch-disabled');
    }
}
