import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotPriceFilter } from "./filters";

const price = () => {
    const priceMinInput = document.getElementById('min');
    const priceMaxInput = document.getElementById('max');
    const priceDiscont = document.getElementById('discount-checkbox');
    const checkSpan = document.querySelector('.filter-check_checkmark')

    const priceListener = () => {

        getData().then((data) => {
            renderGoods(priceFilter(hotPriceFilter(data, priceDiscont.checked), priceMinInput.value, priceMaxInput.value))
        });

    }

    priceMinInput.addEventListener('input', priceListener)
    priceMaxInput.addEventListener('input', priceListener)
    priceDiscont.addEventListener('change', () => {
        if (priceDiscont.checked) {
            checkSpan.classList.add('checked');
        } else {
            checkSpan.classList.remove('checked');
        }
        priceListener();
    })
}

export default price