console.log("exporting Module")

export const cost = 10;
export  const cart = [];
export default function addToCart(product,quantity){
    cart.push({product,quantity})
    console.log(`${quantity} ${product} added to cart`)
}

