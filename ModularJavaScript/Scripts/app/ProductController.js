var ProductsController = function (productService) {

    var displayProductsOrMessage = function (hasProducts) {
        //display products or no products found message
        $("#dvNotFound").removeClass();
        if (hasProducts) {
            $("#dvProducts").show(); //show products grid
            $("#dvNotFound").addClass("hidden"); //hide products not found message
        } else {
            $("#dvNotFound").addClass("alert alert-info");
            $("#dvProducts").hide();
        }
    };

    var onProductsCallback = function (data) {
        var template = $("#tplProducts").html();
        var html = Mustache.to_html(template, { Products: data });

        $("#dvProducts").empty().html(html); //load products

        //check if there are products returned
        var hasProducts = !$.isEmptyObject(data);
        displayProductsOrMessage(hasProducts);
    };

    var initialize = function () {

        productService.getAll(onProductsCallback);

        $("#btnSearch").on("click", function (e) {
            var searchTerm = $("#searchTerm").val();
            productService.search(searchTerm, onProductsCallback);
        });
    };

    return {
        init: initialize
    };

}(ProductService);