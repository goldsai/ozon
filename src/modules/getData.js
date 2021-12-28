const getData = (str) => {
    // return fetch('http://localhost:3000/goods')
    //     .then((response) => {
    //         // response
    //         // console.log('response: ', response);
    //         return response.json()
    //     })
    // return fetch(`https://test-2c834-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
    return fetch('https://test-2c834-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            // response
            // console.log('response: ', response);
            return response.json()
        })


}

export default getData