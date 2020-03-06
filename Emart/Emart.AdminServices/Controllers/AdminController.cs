using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminServices.Models;
using Emart.AdminServices.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.AdminServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _iadmrepo;
        public AdminController(IAdminRepository iitemrepo)
        {
            _iadmrepo = iitemrepo;
        }

        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCategory(Category obj)
        {
            try
            {
                _iadmrepo.AddCategory(obj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCategory(SubCategory obj)
        {
            try
            {
                _iadmrepo.AddSubCategory(obj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCategory/{cid}")]
        public IActionResult DeleteCategory(string cid)
        {
            try
            {
                _iadmrepo.DeleteCategory(cid);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSubCategory/{subid}")]
        public IActionResult DeleteSubCategory(string subid)
        {
            try
            {
                _iadmrepo.DeleteSubCategory(subid);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCategory()
        {
            try
            {

                return Ok(_iadmrepo.GetCategory());
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}