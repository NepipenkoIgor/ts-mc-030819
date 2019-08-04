import _ from 'lodash';

$('.btn').on('click', (_e: JQueryEventObject) => {
    console.log(_.chunk([1, 2, 3, 4, 5], 2));
});
