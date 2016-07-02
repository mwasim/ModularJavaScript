using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CoreLIb.Model;

namespace CoreLIb.Abstraction
{
    public interface IProductService
    {
        IEnumerable<Product> GetList();

        IEnumerable<Product> Search(string searchTerm);
    }
}
