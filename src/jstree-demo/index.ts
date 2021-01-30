import 'jstree';
import 'jstree/dist/themes/default/style.css';

$(function () {
    initJstree();
    initTest();
});

function initJstree() {
    $('#jstree_demo_div').jstree({
        'core': {
            'data': [
                {
                    "text": "Root node",
                    "children": [
                        { "text": "Child node 1" },
                        { "text": "Child node 2" }
                    ]
                }
            ]
        }
    });
}

let data = {
    // 批指令id
    id: 110,
    // 批指令号
    orderNo: 666,
    // 批次号
    batchNo: 999,
    // 产品名称
    productName: '三只竹鼠',
    children: [
        {
            id: 1100,
            orderNo: 6660,
            batchNo: 9990,
            productName: '六个花生',
        },
        {
            id: 11000,
            orderNo: 66600,
            batchNo: 99900,
            productName: '黑心铺子',
        }
    ]
}

function initTest() {
    let tree = <HTMLUListElement>document.getElementById('tree_div');
    $('.show-icon').on('click', function () {
        $(this).siblings('ul').toggle();
        $(this).toggleClass(['fa-plus-circle', 'fa-minus-circle']);
    })
}