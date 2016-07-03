var ProductsController = function (productService) {

    //private members - DOM elements
    var emptyResultContainer;
    var productsContainer;
    var btnSearch;
    var inputSearchTerm;
    var tplProducts;

    var displayProductsOrMessage = function (hasProducts) {
        //display products or no products found message
        emptyResultContainer.removeClass();
        if (hasProducts) {
            productsContainer.show(); //show products grid
            emptyResultContainer.addClass("hidden"); //hide products not found message
        } else {
            emptyResultContainer.addClass("alert alert-info");
            productsContainer.hide();
        }
    };

    var onProductsCallback = function (data) {
        var template = tplProducts.html();
        var html = Mustache.to_html(template, { Products: data });

        productsContainer.empty().html(html); //load products

        //check if there are products returned
        var hasProducts = !$.isEmptyObject(data);
        displayProductsOrMessage(hasProducts);
    };

    var initialize = function (noResultsContainer, prodContainer, searchButton, searchTextBox, productsTemplate) {

        emptyResultContainer = noResultsContainer;
        productsContainer = prodContainer;
        btnSearch = searchButton;
        inputSearchTerm = searchTextBox;
        tplProducts = productsTemplate;

        productService.getAll(onProductsCallback);

        btnSearch.on("click", function (e) {
            var searchTerm = inputSearchTerm.val();
            productService.search(searchTerm, onProductsCallback);
        });
    };

    return {
        init: initialize
    };

}(ProductService);