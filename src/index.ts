import NewJsSwitch from './modules/switch/new-switch';
import NewJsSlider from './modules/slider/new-slider';
import { JSDOM } from './core/Core';
import moment from 'moment';

window.onload = function () {
    moment.locale('zh-cn');
    let now = moment().format('LLLL');
    console.log(now);

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