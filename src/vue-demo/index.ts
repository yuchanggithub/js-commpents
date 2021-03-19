import Vue from 'vue';

window.onload = function () {

    // 声明式渲染
    let app = new Vue({
        el: '#app',
        data: {
            message: 'Hellow vue!'
        }
    })

    /** 指令 */
    // 属性
    let app2 = new Vue({
        el: '#app-2',
        data: {
            message: '页面加载于 ' + new Date().toLocaleString()
        }
    })

    // 条件
    let app3 = new Vue({
        el: '#app-3',
        data: {
            seen: true
        }
    })

    // 循环
    let app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
            ]
        }
    })

    // 事件
    let app5 = new Vue({
        el: '#app-5',
        data: {
            message: 'Hello Vue.js!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    })

    // 双向绑定
    let app6 = new Vue({
        el: '#app-6',
        data: {
            message: 'Hello Vue!'
        }
    })

    // 定义名为 todo-item 的新组件
    Vue.component('todo-item', {
        template: '<li>{{ todo.text }} ---- {{ msg }}</li>',
        props: ['todo'],
        data() {
            return {
                msg: '1'
            }
        }
    })

    let app7 = new Vue({
        el: '#app-7',
        data: {
            groceryList: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' },
                { id: 3, text: '牛奶' }
            ]
        }
    });

    // 生命周期函数
    let app8 = new Vue({
        el: '#app-8',
        data: {
            msg: '0'
        },
        beforeCreate() {
            console.log('beforeCreate 开始初始化 data:' + this.$data);
        },
        created() {
            console.log('created 初始化 msg:' + this.msg);
        },
        beforeMount() {
            console.log('beforeMount 挂载前');
        },
        mounted() {
            console.log('mounted 挂载后 ');
            console.log(this.$el);
            setTimeout(() => {
                this.msg = '2'
            }, 2000)
        },
        beforeUpdate() {
            console.log('更新前 msg :' + this.msg);
            console.log(this.$el.innerHTML);
        },
        updated() {
            console.log('更新后 msg: ' + this.msg);
            console.log(this.$el.innerHTML);
        },
        beforeDestroy() {

        },
        destroyed() {

        }
    })
}