using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace assignment2.Controllers
{
    public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

        public IActionResult Calculator ()
        {
            return View();
        }
}
}
