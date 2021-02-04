import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-table';
import 'bootstrap-table/src/bootstrap-table.scss';

$('#table').bootstrapTable({
    height: 300,
    columns: [
        {
            field: 'id',
            title: 'ID',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },{
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        },
        {
            field: 'name',
            title: '姓名',
        }
    ]
});

setTimeout(function () {
    $('#table').bootstrapTable('load', [
        {
            id: 1,
            name: 'ycc' 
        },
        {
            id: 2,
            name: 'yu'
        },
        {
            id: 2,
            name: 'yu'
        },
        {
            id: 2,
            name: 'yu'
        },
        {
            id: 2,
            name: 'yu'
        },
    ])
}, 1000)