// This product file is for different application named DeliciousApp which are non Firebase, it has nothing to to with this project, Kept here just of testing basic functionality.
exports.getAllProducts = (req, res) => {

    let getProducts = createProducts();
    // setTimeout(() => {
    return res.status(200).json(getProducts);
    // }, 1500)
}

exports.getProductById = (req, res) => {

    let productId = req.params.id;
    let getProducts = createProducts();

    let product = getProducts[productId]

    // setTimeout(() => {
    if (product != null) {
        return res.status(200).json(product);
    } else {
        return res.status(404).json({
            error: "Queried product does not available"
        })
    }
    // }, 1500);
}

exports.getAllProductsByLocation = (req, res) => {
    let locationId = req.params.locationId
    let allProduct = createProducts();

    // setTimeout(() => {

    var products = new Array()

    for (let key in allProduct) {
        let product = allProduct[key]
        if (product.itemLocation && product.itemLocation == locationId) {
            products.push(product)
        }
    }

    if (products.length > 0) {
        return res.status(200).json(products)
    } else {
        return res.status(404).json({
            error: "Products does not exist on mentioned location"
        })
    }
    // }, 1500)
}

exports.getProductByLocationId = (req, res) => {
    let productId = req.params.productId;
    let locationId = req.params.locationId

    let allProduct = createProducts();

    // setTimeout(() => {
    for (let key in allProduct) {
        let product = allProduct[key]
        if (product.itemLocation) {
            if (product.itemLocation == locationId && key == productId) {
                return res.status(200).json(product)
            }
        }
    }

    return res.status(404).json({
        error: "product does not exist on mentioned location"
    })
    // }, 1000)
}


function createProducts() {

    let obj1 = {
        "itemCategory": "Fruits",
        "itemCode": "Bobs_DarkApple",
        "itemDescription": "Its very dark",
        "itemLocation": "customer99",
        "itemMisc": "Other infor",
        "itemName": "Dark Apple",
        "itemQuantity": 1,
        "itemThumbnailURL": "https://images-na.ssl-images-amazon.com/images/I/918YNa3bAaL._SX522_.jpg",
        "itemTotalAmount": 8,
        "itemUniqueId": "Bobs_DarkApple",
        "itemUnitPrice": 8
    }

    let obj2 = {
        "itemCategory": "Fruits",
        "itemCode": "app010203",
        "itemDescription": "Gala Apple, crunch and sweet deliciuos",
        "itemLocation": "localtionId1",
        "itemMisc": "other info for future",
        "itemName": "Apple",
        "itemQuantity": 1,
        "itemThumbnailURL": "https://images-na.ssl-images-amazon.com/images/I/918YNa3bAaL._SX522_.jpg",
        "itemTotalAmount": 13,
        "itemUniqueId": "itemUniqueId1",
        "itemUnitPrice": 13
    }

    let obj3 = {
        "itemCategory": "Drinks",
        "itemCode": "CokeCola_Zero_Pack_12",
        "itemDescription": "Its is banana",
        "itemLocation": "HBS1000",
        "itemMisc": "Other infor",
        "itemName": "Yellow Banana",
        "itemQuantity": 1,
        "itemThumbnailURL": "https://images-na.ssl-images-amazon.com/images/I/918YNa3bAaL._SX522_.jpg",
        "itemTotalAmount": 5.5,
        "itemUniqueId": "CokeCola_Zero_Pack_12",
        "itemUnitPrice": 5.5
    }

    let obj4 = {
        "itemCategory": "Fruits",
        "itemCode": "Apple_Pack_12",
        "itemDescription": "Apple with Pack 12",
        "itemLocation": "HBS1000",
        "itemMisc": "Other infor",
        "itemName": "Apple",
        "itemQuantity": 1,
        "itemThumbnailURL": "https://images-na.ssl-images-amazon.com/images/I/918YNa3bAaL._SX522_.jpg",
        "itemTotalAmount": 10.5,
        "itemUniqueId": "Apple_Pack_12",
        "itemUnitPrice": 10.5
    }

    let obj5 = {
        "itemCategory": "Fruits",
        "itemCode": "Apple_Pack_6",
        "itemDescription": "Apple with Pack 6",
        "itemLocation": "HBS1000",
        "itemMisc": "Other infor",
        "itemName": "Apple",
        "itemQuantity": 1,
        "itemThumbnailURL": "https://images-na.ssl-images-amazon.com/images/I/918YNa3bAaL._SX522_.jpg",
        "itemTotalAmount": 8.5,
        "itemUniqueId": "Apple_Pack_6",
        "itemUnitPrice": 8.5
    }

    let obj6 = {
        "itemCategory": "Drinks",
        "itemCode": "CokeCola_Zero_Pack_24",
        "itemDescription": "Coke Drinks",
        "itemLocation": "HBS2000",
        "itemMisc": "Other infor",
        "itemName": "Coke Drinks",
        "itemQuantity": 1,
        "itemThumbnailURL": "https://images-na.ssl-images-amazon.com/images/I/918YNa3bAaL._SX522_.jpg",
        "itemTotalAmount": 5.5,
        "itemUniqueId": "CokeCola_Zero_Pack_24",
        "itemUnitPrice": 5.5
    }

    let obj7 = {
        "itemCategory": "Fruits",
        "itemCode": "Apple_Pack_20",
        "itemDescription": "Apple with Pack 12",
        "itemLocation": "HBS2000",
        "itemMisc": "Other infor",
        "itemName": "Apple",
        "itemQuantity": 1,
        "itemThumbnailURL": "https://images-na.ssl-images-amazon.com/images/I/918YNa3bAaL._SX522_.jpg",
        "itemTotalAmount": 11.5,
        "itemUniqueId": "Apple_Pack_20",
        "itemUnitPrice": 11.5
    }

    let obj8 = {
        "itemCategory": "Fruits",
        "itemCode": "Apple_Pack_4",
        "itemDescription": "Apple with Pack 6",
        "itemLocation": "HBS2000",
        "itemMisc": "Other infor",
        "itemName": "Apple",
        "itemQuantity": 1,
        "itemThumbnailURL": "https://images-na.ssl-images-amazon.com/images/I/918YNa3bAaL._SX522_.jpg",
        "itemTotalAmount": 8.5,
        "itemUniqueId": "Apple_Pack_4",
        "itemUnitPrice": 8.5
    }

    let mainObject = {
        "Bobs_DarkApple": obj1,
        "app010203": obj2,
        "CokeCola_Zero_Pack_12": obj3,
        "Apple_Pack_12": obj4,
        "Apple_Pack_6": obj5,
        "CokeCola_Zero_Pack_24": obj6,
        "Apple_Pack_20": obj7,
        "Apple_Pack_4": obj8
    }

    return mainObject
}