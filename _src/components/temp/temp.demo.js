import temp from './_temp.hbs';
import base from '../base/_base.hbs';

const data = {
    components: [
        temp()
    ]
};

function render(locals) {
    return base(data);
};

export default {
    render: render
};
