interface addNodeInterface {
    // 节点的数据
    data: dataInterface;
    // 当前的层级
    level: number;
    // 竖线
    verLine?: boolean;
    // 横线
    horLine?: boolean;
}

interface dataInterface {
    // 批指令id
    id: number;
    // 批指令号
    orderNo: number;
    // 批次号
    batchNo: number;
    // 产品名称
    productName: string;
    // 子节点
    children?: dataInterface[];
}

/**
 * 展示用的树
 */
export default class IbcpDisplayTree {

    /**
     * 可展开的最大层级
     */
    private maxLevel = 10;
    private rootElem: JQuery;

    /**
     * 构造函数
     * @param elem 
     * @param data 
     */
    constructor(elem, data: dataInterface) {
        this.rootElem = $(elem);
        this.addRootNode(elem, data);
        this.initEvent(elem);
    }

    /**
     * 添加子节点
     * @param data 
     * @param level 
     */
    private addChildrenNode(data: dataInterface[], level: number) {
        let node = '';
        for (let i = 0; i < data.length; i++) {
            let li = ` <li class="ibcp-display-tree-node">
            ${this.addNode({
                data: data[i],
                verLine: i !== data.length - 1,
                horLine: true,
                level: level
            })}
                    </li>`;
            node += li;
        }
        return node;
    }

    /**
     * 添加节点
     * @param params 
     */
    private addNode(params: addNodeInterface) {
        const { data, verLine, horLine, level } = params;
        let isClose = level >= this.maxLevel;
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
                            <div class="ibcp-display-tree-show-row ibcp-display-tree-link-to" title="${data.orderNo}" data-node="${encodeURI(JSON.stringify(data))}">${data.orderNo}</div>
                            <div class="ibcp-display-tree-show-row" title="${data.batchNo}">${data.batchNo}</div>
                            <div class="ibcp-display-tree-show-row" title="${data.productName}">${data.productName}</div>
                        </div>
                        ${data.children && data.children.length > 0 ? `<span class="fa ${isClose ? 'fa-plus-square-o' : 'fa-minus-square-o'} ibcp-display-tree-show-icon"></span>` : ''}
                    </div>
                    ${data.children && data.children.length > 0 ? `<div class="ibcp-display-tree-hor-line ibcp-display-tree-hor-line-left" ${isClose ? 'style="display:none;"' : ''} ></div>` : ''}
                    ${data.children && data.children.length > 0 ? `<ul class="ibcp-display-tree-list" ${isClose ? 'style="display:none;"' : ''} >${this.addChildrenNode(data.children, level + 1)}</ul>` : ''}
                `;
        return node;
    }

    /**
     * 添加根节点信息
     * @param elem 
     * @param data 
     */
    private addRootNode(elem, data: dataInterface) {
        let node = $('<div class="ibcp-display-tree-node ibcp-display-tree-root-node"></div>');
        node.append(this.addNode({
            data,
            level: 1
        }));
        $(elem).append(node);
    }

    /**
     * 注册事件
     * @param elem 
     */
    private initEvent(elem) {
        let that = this;

        // 点击事件（区分选择内容和点击展开两种操作）
        $(elem).find('.ibcp-display-tree-show-text').on('mousedown', function (e) {
            // 跳转事件
            if ($(e.target).hasClass('ibcp-display-tree-link-to')) {
                that.jumpEvent(JSON.parse(decodeURI(e.target.dataset.node)));
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
                if ((Number(durTime) < 0.3) || (upY === y && upX === x)) {
                    $(this).find('.ibcp-display-tree-show-icon').toggleClass('fa-plus-square-o').toggleClass('fa-minus-square-o');
                    $(this).next().toggle(500).next().toggle(500);
                }
                $(this).off('mouseup');
            })
        })

        this.scrollEvent();
    }

    private scrollEvent() {
        let rootNode = this.rootElem.find('.ibcp-display-tree-root-node').get(0);
        rootNode.onmousedown = function (ev) {
            rootNode.classList.add('moveing');
            let oEvent: any = ev || event;
            let mouseXPlace = oEvent.clientX;
            let mouseYPlace = oEvent.clientY;
            let scrollXNum = document.documentElement.scrollLeft;
            let scrollYNum = document.documentElement.scrollTop;
            let time = Date.now();
            document.onmousemove = function (ev) {
                let nowTime = Date.now();
                if(nowTime - time < 16)return;
                time = nowTime;
                let oEvent: any = ev || event;
                let distanceX = oEvent.clientX;
                let distanceY = oEvent.clientY;
                let actualX = mouseXPlace - distanceX;
                let actualY = mouseYPlace - distanceY;
                document.documentElement.scrollLeft = scrollXNum + actualX;
                document.documentElement.scrollTop = scrollYNum + actualY;
            };
            document.onmouseup = function () {
                rootNode.classList.remove('moveing');
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    }

    /**
     * 跳转事件
     * @param node 
     */
    private jumpEvent(node: dataInterface) {
        // alert(node.orderNo);
    }
}