using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerServices.Models;
using Emart.SellerServices.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.SellerServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _iitemrepo;
        public ItemController(IItemRepository iitemrepo)
        {
            _iitemrepo = iitemrepo;
        }

        [HttpPost]
        [Route("AddItem")]
        public IActionResult AddItem(Items itemobj)
        {
            try
            {
                _iitemrepo.AddItem(itemobj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }


        [HttpGet]
        [Route("ViewItems/{sid}")]
        public IActionResult ViewItems(string sid)
        {
            try
            {

                return Ok(_iitemrepo.ViewItems(sid));
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }


        [HttpDelete]
        [Route("DeleteItem/{itemid}")]
        public IActionResult DeleteItem(string itemid)
        {
            try
            {
                _iitemrepo.DeleteItem(itemid);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPut]
        [Route("UpdateItem")]
        public IActionResult UpdateItem(Items iobj)
        {
            try
            {
                _iitemrepo.UpdateItem(iobj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet]
        [Route("GetItem/{itemId}")]
        public IActionResult GetItem(string itemId)
        {
            try
            {

                return Ok(_iitemrepo.GetItem(itemId));
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

                return Ok(_iitemrepo.GetCategory());
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory/{categoryId}")]
        public IActionResult GetSubCategory(string categoryId)
        {
            try
            {

                return Ok(_iitemrepo.GetSubCategory(categoryId));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("ViewItems")]
        public IActionResult ViewItems()
        {
            try
            {

                return Ok(_iitemrepo.ViewItems());
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
    }
}