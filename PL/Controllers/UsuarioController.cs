﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PL.Controllers
{
    public class UsuarioController : Controller
    {
        //
        // GET: /Usuario/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetAll()
        {
            return View();
        }
	}
}