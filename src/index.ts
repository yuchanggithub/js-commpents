import JsSwitch from './js-switch';
import './style/js-switch.scss';

window.onload = function () {
    new JsSwitch({
        elem: document.getElementById('root'),
        disabled: false,
        defaultChecked: false,
        onChange: function (checked) {
            console.log(checked);
        }
    })
}