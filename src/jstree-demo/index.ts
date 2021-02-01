import './index.scss';

$(function () {
    initTest();
});

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
        $(this).siblings('.hor-line').toggle().siblings('ul').toggle();
        $(this).toggleClass(['fa-plus-square-o', 'fa-minus-square-o']);
    })
}