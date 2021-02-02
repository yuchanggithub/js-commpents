import 'jquery';
import 'font-awesome/css/font-awesome.css';
import './index.scss';

let data = {
    // 批指令id
    id: 110,
    // 批指令号
    orderNo: 666,
    // 批次号
    batchNo: 5555,
    // 产品名称
    productName: '三只竹鼠11',
    children: [
        {
            id: 1100,
            orderNo: 6660,
            batchNo: 9990,
            productName: '六个花生',
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
        },
        {
            id: 11000,
            orderNo: 66600,
            batchNo: 99900,
            productName: '黑心铺子',
            children: [
                {
                    id: 1100,
                    orderNo: 6660,
                    batchNo: 9990,
                    productName: '六个花生',
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
                            children: [
                                {
                                    id: 1100,
                                    orderNo: 6660,
                                    batchNo: 9990,
                                    productName: '六个花生',
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
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

$(function () {
    initElem(data);
    initEvent();
});

const maxLevel = 2;

function createLis(data, level) {
    let node = '';
    for (let i = 0; i < data.length; i++) {
        let li = ` <li class="ibcp-display-tree-node">
        ${addOne({
            data: data[i],
            verLine: i !== data.length - 1,
            horLine: true,
            isClose: level >= maxLevel,
            level: level
        })}
                </li>`;
        node += li;
    }
    return node;
}

function addOne(params) {
    const { data, verLine, horLine, isClose, level } = params;
    let node = `
                ${verLine ? '<div class="ibcp-display-tree-ver-line"></div>' : ''}
                ${horLine ? '<div class="ibcp-display-tree-hor-line ibcp-display-tree-hor-line-right"></div>' : ''}
                <div class="ibcp-display-tree-show-text">
                    <div class="ibcp-display-tree-show-col-left">
                        <div class="ibcp-display-tree-show-row">批指令号:</div>
                        <div class="ibcp-display-tree-show-row">批号:</div>
                        <div class="ibcp-display-tree-show-row">产品:</div>
                    </div>
                    <div class="ibcp-display-tree-show-col-right">
                        <div class="ibcp-display-tree-show-row ibcp-display-tree-link-to">${data.orderNo}</div>
                        <div class="ibcp-display-tree-show-row">${data.batchNo}</div>
                        <div class="ibcp-display-tree-show-row">${data.productName}</div>
                    </div>
                    ${data.children && data.children.length > 0 ? `<span class="fa ${isClose ? 'fa-plus-square-o' : 'fa-minus-square-o'} ibcp-display-tree-show-icon"></span>` : ''}
                </div>
                ${data.children ? `<div class="ibcp-display-tree-hor-line ibcp-display-tree-hor-line-left" ${isClose ? 'style="display:none;"' : ''} ></div>` : ''}
                ${data.children ? `<ul class="ibcp-display-tree-list" ${isClose ? 'style="display:none;"' : ''} >${createLis(data.children, level + 1)}</ul>` : ''}
            `;
    return node;
}

function initElem(data) {
    let root = $('#root');
    let node = $('<div class="ibcp-display-tree-node"></div>')
    node.append(addOne({
        data,
        level: 1
    }));
    root.append(node);
}

function initEvent() {

    $('.ibcp-display-tree-show-text').on('mousedown', function (e) {
        if($(e.target).hasClass('ibcp-display-tree-link-to')){
            alert($(e.target).text());
            return;
        }
        let x = e.clientX;
        let y = e.clientY;
        let downTime = new Date().valueOf();
        $(this).on('mouseup', function (e) {
            let upX = e.clientX;
            let upY = e.clientY;
            let upTime = new Date().valueOf();
            let durTime = ((upTime - downTime) / 1000).toFixed(1);
            if((Number(durTime) < 0.3) || (upY === y && upX === x)){
                $(this).find('.ibcp-display-tree-show-icon').toggleClass(['fa-plus-square-o', 'fa-minus-square-o']);
                $(this).next().toggle(500).next().toggle(500);
            }
            $(this).off('mouseup');
        })
    })
}