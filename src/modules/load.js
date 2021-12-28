import getData from './getData'
// import postData from './postData';
import renderGoods from './renderGoods';

const load = () => {
    // const cartBtn = document.getElementById('cart')

    // getData('My string')
    getData().then((data) => {
        renderGoods(data)
    });
    // cartBtn.addEventListener('click', () => {
    //     // getData().then((data) => {
    //     //     // console.log('data: ', data);
    //     //     renderGoods(data)
    //     // });
    //     // postData().then((data) => {
    //     //     console.log(data)

    //     //     getData().then((data) => {
    //     //         console.log('data: ', data);
    //     //     });
    //     // })
    // })
}

export default load