using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using ANGULARASSETIT.Models;

namespace ANGULARASSETIT.Controllers
{
    public class HomeController : Controller
    {
        database_Access_Layer.db dblayer=new database_Access_Layer.db();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AssetFrm()
        {
            return View();
        }
        public JsonResult userlogin(user us)
        {
            string result = Convert.ToString(dblayer.userlogin(us));

            if (result == "1")
            {
                Session["user"] = us.Email;
            }
            else
            {
                result = "UserName Or PassWord Is Wrong";
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]

        public JsonResult Add_Record(submitRcrd smb)
        {
            string result = string.Empty;
            try
            {
                dblayer.Add_Record(smb);
            }
            catch (Exception ex)
            {
                result = "failed";
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}
