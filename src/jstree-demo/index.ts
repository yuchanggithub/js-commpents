import 'jquery';
import 'font-awesome/css/font-awesome.css';
import './index.scss';
import IbcpDisplayTree from './ibcp-display-tree';

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
                            children: [{
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
                                        children: []
                                    },
                                    {
                                        id: 11000,
                                        orderNo: 66600,
                                        batchNo: 99900,
                                        productName: '黑心铺子',
                                        children: [{
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
                                                    children: []
                                                },
                                                {
                                                    id: 11000,
                                                    orderNo: 66600,
                                                    batchNo: 99900,
                                                    productName: '黑心铺子',
                                                    children: []
                                                }
                                            ]
                                        }]
                                    }
                                ]
                            }]
                        },
                        {
                            id: 11000,
                            orderNo: 66600,
                            batchNo: 99900,
                            productName: '黑心铺子',
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            id: 11000,
            orderNo: 66600,
            batchNo: 99900,
            productName: '黑心铺子',
            children: [{
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
                        children: []
                    },
                    {
                        id: 11000,
                        orderNo: 66600,
                        batchNo: 99900,
                        productName: '黑心铺子',
                        children: [{
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
                                    children: []
                                },
                                {
                                    id: 11000,
                                    orderNo: 66600,
                                    batchNo: 99900,
                                    productName: '黑心铺子',
                                    children: [{
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
                                                children: []
                                            },
                                            {
                                                id: 11000,
                                                orderNo: 66600,
                                                batchNo: 99900,
                                                productName: '黑心铺子',
                                                children: []
                                            }
                                        ]
                                    }]
                                }
                            ]
                        }]
                    }
                ]
            }]
        }
    ]
}

$(function () {
    new IbcpDisplayTree('#root', data);
});
