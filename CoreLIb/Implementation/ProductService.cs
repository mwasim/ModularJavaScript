using System;
using System.Collections.Generic;
using System.Linq;
using CoreLIb.Abstraction;
using CoreLIb.Model;

namespace CoreLIb.Implementation
{
    public class ProductService : IProductService
    {
        private readonly List<Product> _products;
        public ProductService()
        {
            _products = new List<Product>
            {
                new Product { Id = 1, Name = "Google Android 2.2", Price = 2000 },
                new Product { Id = 2, Name = "Apple iPad", Price = 6000 },
                new Product { Id = 3, Name = "Samsung Galaxy Tab", Price = 18000 },
                new Product { Id = 4, Name = "HP TouchSmart 600 Quad", Price = 52000 },
                new Product { Id = 5, Name = "Livescribe Echo Smartpen", Price = 5000 }
            };

        }
        public IEnumerable<Product> GetList()
        {
            return _products;
        }

        public IEnumerable<Product> Search(string searchTerm)
        {
            return _products.Where(x => x.Name.StartsWith(searchTerm, StringComparison.OrdinalIgnoreCase));
        }
    }
}
