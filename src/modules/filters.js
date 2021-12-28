export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })

}
export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })

}
export const priceFilter = (goods, min, max) => {
    return goods.filter((goodsItem) => {

        return ((+min >= 0) ? (goodsItem.price >= +min) : true) && ((+max > 0) ? (goodsItem.price <= +max) : true)
    })

}
export const hotPriceFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return value ? goodsItem.sale : true
    })

}