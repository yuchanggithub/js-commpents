import NewJsSwitch from './modules/switch/new-switch';
import NewJsSlider from './modules/slider/new-slider';
import { JSDOM } from './core/Core';
import moment from 'moment';
import axios from 'axios';

window.onload = function () {
    // initJSDOM();
    // initMoment();
    let select = <HTMLSelectElement>document.getElementById('name_select');
    getAll(data => {
        select.innerHTML = data.for
    })

    document.getElementById('get_all_btn').onclick = function () {
        getAll((data) => { showText(data) });
    }
    document.getElementById('get_one_btn').onclick = function () {
        getOne(select.value, (data) => { showText(data) });
    }
}

function showText(text) {
    document.getElementById('axios_div').innerHTML = JSON.stringify(text);
}

function getOne(name, callback) {
    axios.get('/api/user/', {
        params: {
            name: name
        }
    }).then(function (res) {
        console.log(res);
        callback(res.data);
    })
}

function getAll(callback: (data) => void) {
    axios.get('/api/user/all').then(function (res) {
        console.log(res);
        callback(res.data);
    })
}

function initMoment() {
    moment.locale('zh-cn');
    let now = moment().format('LLLL');
    console.log(now);
}

function initJSDOM() {
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