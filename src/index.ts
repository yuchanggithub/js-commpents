import JsSwitch from './modules/switch/switch';
import JsSlider from './modules/slider/slider';

window.onload = function () {
    new JsSwitch({
        elem: document.getElementById('root'),
        disabled: false,
        defaultChecked: false,
        onChange: function (checked) {
            console.log(checked);
        }
    })

    new JsSlider({
        elem: document.getElementById('root2'),
        defaultValue: 28,
        onChange: function (val) {
            console.log(val);
        }
    })
}