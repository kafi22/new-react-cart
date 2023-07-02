

export const useTotalAmount = (cart) => {
    let totalAmount = 0;
    let totalPrice = 0;

    for (let item of cart.values()) {
        totalAmount += item.amount;
        totalPrice += item.price * item.amount
    }

    return {totalAmount, totalPrice}

}