using Microsoft.AspNetCore.Mvc;

namespace MiddleLogin.Controllers
{
    public class ShopController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
