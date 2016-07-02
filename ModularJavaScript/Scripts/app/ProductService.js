var ProductService = function () {

    var searchProducts = function (searchTerm, searchProductsCallback) {
        $.getJSON("api/products?s=" + searchTerm, searchProductsCallback);
    };

    var loadAllProducts = function (loadProductsCallback) {
        searchProducts("", loadProductsCallback);
    }

    return {
        getAll: loadAllProducts,
        search: searchProducts
    };

}();