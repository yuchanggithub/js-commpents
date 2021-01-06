import NewJsSwitch from './modules/switch/new-switch';
import NewJsSlider from './modules/slider/new-slider';
import { JSDOM } from './core/Core';

window.onload = function () {

    JSDOM.rander(
        new NewJsSwitch({
            disabled: false,
            defaultChecked: false,
            onChange: function (checked) {
                console.log(checked);
            }
        }),
        document.getElementById('root')
    )

    JSDOM.rander(
        new NewJsSlider({
            onChange: function (checked) {
                console.log(checked);
            }
        }),
        document.getElementById('root2')
    )
}