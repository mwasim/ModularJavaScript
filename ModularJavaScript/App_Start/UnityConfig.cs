using Microsoft.Practices.Unity;
using System.Web.Http;
using CoreLIb.Abstraction;
using CoreLIb.Implementation;
using Unity.WebApi;

namespace ModularJavaScript
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();

            container.RegisterType<IProductService, ProductService>();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}