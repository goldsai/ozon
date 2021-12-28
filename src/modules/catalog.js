import getData from "./getData"
import renderGoods from "./renderGoods"
import { categoryFilter } from "./filters"

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button')
    const catalogModal = document.querySelector('.catalog')
    const catalogModalItems = catalogModal.querySelectorAll('.catalog li')

    let isOpen = false
    btnCatalog.addEventListener('click', (event) => {
        isOpen = !isOpen;

        catalogModal.style.display = isOpen ? 'block' : ''

    })

    catalogModalItems.forEach(item => {
        item.addEventListener('click', () => {
            getData().then((data) => {
                renderGoods(categoryFilter(data, item.textContent))
            });
        })
    })
}

export default catalog