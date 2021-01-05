import { strToDom } from "../../public/utils";
import './style/slider.scss';

type onchangeCB = (value: number) => any;
interface ParamInterface {
    elem: HTMLElement;
    defaultValue?: number;
    onChange?: onchangeCB;
    disabled?: boolean;
}

export default class JsSlider {
    private elem: HTMLElement;
    private pageElem = {
        sliderDom: null as HTMLDivElement,
        point: null as HTMLDivElement,
        step: null as HTMLDivElement,
        line: null as HTMLDivElement
    }
    private defaultValue: number;
    private onchangeCB: onchangeCB;
    private htmlStr = `<div class="ibcp-slider">
            <div class="ibcp-slider-rail"></div>
            <div class="ibcp-slider-track" style="left: 0%;right: auto;width: 0%;"></div>
            <div class="ibcp-slider-step"></div>
            <div class="ibcp-slider-handle" role="slider"
                aria-valuemin="0" 
                aria-valuemax="100" 
                aria-valuenow="0"
                aria-disabled="false" 
                style="left:0%; right: auto;transform: translatex( -50%); "></div>
            <div class="ibcp-slider-mark"></div>
        </div>`;

    constructor(param: ParamInterface) {
        this.initElem();
        this.elem = param.elem;
        this.defaultValue = param.defaultValue || 0;
        this.onchangeCB = param.onChange;
        this.disabled = param.disabled;
        this.initEvent(this.disabled);
        this.setValue(this.defaultValue);
        this.elem.appendChild(this.pageElem.sliderDom);
    }

    private initElem() {
        let sliderDom = <HTMLDivElement>strToDom(this.htmlStr);
        this.pageElem = {
            sliderDom,
            point: sliderDom.querySelector('.ibcp-slider-handle'),
            step: sliderDom.querySelector('.ibcp-slider-step'),
            line: sliderDom.querySelector('.ibcp-slider-track')
        }
    }

    private setValue(num: number) {
        let numRate = num + '%';
        this.pageElem.point.style.left = numRate; this.pageElem.line.style.width = numRate;
        this.pageElem.point.setAttribute('aria-valuenow', num.toString());
    }

    private move(left: number) {
        let oldNum = Number(this.pageElem.point.getAttribute('aria-valuenow'));
        let sliderwidth = this.pageElem.sliderDom.offsetWidth;
        if (left < 0) {
            left = 0;
        }
        if (left > sliderwidth) {
            left = sliderwidth;
        }
        let num = Math.round(left * 100 / sliderwidth);
        if (num !== oldNum) {
            this.setValue(num);
            this.onchangeCB && this.onchangeCB(num);
        }
    }

    private initEvent(disabled: boolean) {
        let that = this;
        if (disabled) {
            that.pageElem.point.onmousedown = null;
            that.pageElem.sliderDom.onclick = null;
        } else {
            that.pageElem.point.onmousedown = function (e) {
                let elemMove = <HTMLDivElement>document.createElement('div');
                elemMove.className = 'ibcp-auxiliar-moving'; 
                document.body.appendChild(elemMove);
                let oldLeft = that.pageElem.point.offsetLeft; 
                let oldX = e.clientX;
                elemMove.onmousemove = function (e) {
                    let nowX = e.clientX;
                    let left = oldLeft + (nowX - oldX);
                    that.move(left);
                }
                elemMove.onmouseup = function () {
                    elemMove.onmousemove = null;
                    document.body.removeChild(elemMove);
                }
            };
            that.pageElem.sliderDom.onclick = function (e) {
                that.move(e.offsetX);
            };
        }
    }

    public getValue() {
        return this.pageElem.point.getAttribute('aria-valuenow');
    }

    public onChange(callback: onchangeCB) {
        this.onchangeCB = function (value) {
            callback(value);
        }
    }

    public set disabled(disabled: boolean) {
        if (disabled) {
            this.pageElem.sliderDom.classList.add('ibcp-slider-disabled');
        } else {
            this.pageElem.sliderDom.classList.remove('ibcp-slider-disabled');
        }
        this.initEvent(disabled);
    }

    public get disabled(): boolean {
        return this.pageElem.sliderDom.classList.contains('ibcp-slider-disabled');
    }
}