import db from "../db/db";

export const getProductById = async (id) => {
    const productFromDb = await db.cart.get(Number(id));
    return productFromDb;
}


export const getAllProducts = async () => {
    const allProductsFromDB = await db.cart.toArray();
    return allProductsFromDB;
}