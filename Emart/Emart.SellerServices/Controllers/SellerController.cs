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
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _srepo;

        public SellerController(ISellerRepository srepo)
        {
            _srepo = srepo;

        }

        [HttpPut]
        [Route("EditProfile")]
        public IActionResult EditProfile(Seller obj)
        {
            try
            {

                _srepo.EditProfile(obj);
                return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }



        [HttpGet]
        [Route("ViewProfile/{id}")]
        public IActionResult GetProfile(string id)
        {
            try
            {

                return Ok(_srepo.GetProfile(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}