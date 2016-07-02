using System.Collections.Generic;
using System.Web.Http;
using CoreLIb.Abstraction;
using CoreLIb.Model;

namespace ModularJavaScript.Controllers
{
    public class ProductsController : ApiController
    {
        readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        public IEnumerable<Product> Get()
        {
            return _productService.GetList();
        }

        public IEnumerable<Product> Get(string s)
        {
            if (string.IsNullOrEmpty(s))
                return _productService.GetList();

            return _productService.Search(s);
        }
    }
}
