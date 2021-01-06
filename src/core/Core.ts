import { strToDom } from '../public/utils';

abstract class Component {

    constructor() {
        this.ref = strToDom(this.rander());
    }

    protected abstract rander(): string;

    public ref;
}

export default {
    Component: Component
}

export class JSDOM {

    public static rander(com: Component, div: HTMLElement) {
        div.appendChild(com.ref);
    }
}
