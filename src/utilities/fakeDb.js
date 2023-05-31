// use local storage to manage cart data
//let appliedCart = {};
const addToDb = jobDetails => {
    let appliedCart = getAppliedCart();
    //add id:Postname in local storage
    appliedCart[jobDetails.id] = jobDetails.post ;
    localStorage.setItem('applied-cart', JSON.stringify(appliedCart));
    
}

const removeFromDb = id => {
    const appliedCart = getAppliedCart();
    if (id in appliedCart) {
        delete appliedCart[id];
        localStorage.setItem('applied-cart', JSON.stringify(appliedCart));
    }
}

const getAppliedCart = () => {
    
    let appliedCart = {};

    //get the applied cart from local storage
    const storedCart = localStorage.getItem('applied-cart');
    if (storedCart) {
        appliedCart = JSON.parse(storedCart);
    }
    return appliedCart;
}

const deleteappliedCart = () => {
    localStorage.removeItem('applied-cart');
}

export {
    addToDb,
    removeFromDb,
    getAppliedCart,
    deleteappliedCart
}