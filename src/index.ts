import NewJsSwitch from './modules/switch/new-switch';
import NewJsSlider from './modules/slider/new-slider';
import { JSDOM } from './core/Core';
import axios from 'axios';

window.onload = function () {
    let select = <HTMLSelectElement>document.getElementById('name_select');
    let name = <HTMLInputElement>document.getElementById('name');
    let age = <HTMLInputElement>document.getElementById('age');
    initSelect(select);
    document.getElementById('get_all_btn').onclick = function () {
        getAll((data) => {
            initSelect(select);
            showText(data);
        });
    }
    document.getElementById('get_one_btn').onclick = function () {
        getOne(select.value, (data) => { showText(data) });
    }
    document.getElementById('del_one_btn').onclick = function () {
        delOne(select.value, (data) => {
            initSelect(select);
            showText(data);
        })
    }
    document.getElementById('add_one_btn').onclick = function () {
        addOne(name.value, age.value, (data) => {
            initSelect(select);
            showText(data);
        })
    }
    document.getElementById('update_one_btn').onclick = function () {
        updateOne(name.value, age.value , (data) => {
            showText(data);
        })
    }
}

/**
 * 新增一个
 * @param name 
 * @param age 
 * @param callback 
 */
function addOne(name, age, callback) {
    axios.post('/api/user/', {
        name,
        age
    }).then(function (res) {
        console.log(res);
        callback(res.data);
    })
}

/**
 * 删除一个
 * @param name 
 * @param callback 
 */
function delOne(name, callback) {
    axios.delete('/api/user/', {
        params: {
            name
        }
    }).then(function (res) {
        console.log(res);
        callback(res.data);
    })
}

/**
 * 修改单个
 * @param name 
 * @param age 
 * @param callback 
 */
function updateOne(name, age, callback) {
    axios.patch('/api/user/', {
        name,
        age
    }).then(function (res) {
        console.log(res);
        callback(res.data);
    })
}

/**
 * 查询一个
 * @param name 
 * @param callback 
 */
function getOne(name, callback) {
    axios.get('/api/user/', {
        params: {
            name
        }
    }).then(function (res) {
        console.log(res);
        callback(res.data);
    })
}

/**
 * 查询所有
 * @param callback 
 */
function getAll(callback: (data: Array<{ name: string; age: number; }>) => void) {
    axios.get('/api/user/all').then(function (res) {
        console.log(res);
        callback(res.data);
    })
}

/**
 * 初始化下拉框
 * @param select 
 */
function initSelect(select) {
    getAll(data => {
        let options = '';
        data.forEach(function (val) {
            options += `<option value="${val.name}">${val.name}</option>`
        });
        select.innerHTML = options;
    })
}

/**
 * 展示数据
 * @param text 
 */
function showText(text) {
    document.getElementById('axios_div').innerHTML = JSON.stringify(text);
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