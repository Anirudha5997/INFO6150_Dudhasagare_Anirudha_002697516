export const getJewelleryData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/jewelery",{
        method: "GET",
    })
    return await response.json();
};