import 'jstree';
import 'jstree/dist/themes/default/style.css';

$(function () {
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
});