using System;
using System.Collections.Generic;
using System.Text;
using Emart.AccountServices.Repositories;
using Emart.AccountServices.Models;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
    class TestAccountService
    {
        AccountRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new AccountRepository(new EmartDBContext());
        }
        [Test]
        [Description ("Test BuyerRegister")]
        public void BuyerRegister()
        {
            _repo.BuyerRegister(new Buyer
            {
                BuyerId="3",
                UserName="vinay",
                EmailId="vinay@gmail.com",
                Password="vinay25",
                MobileNo="8801341500",
                CreatedDateTime=DateTime.Now

            });
            var result = _repo.BuyerLogin("vinay","vinay25");
            Assert.NotNull(result);
        }
        [Test]
        [Description ("Test SellerRegister")]
        public void SellerRegister()
        {
            _repo.SellerRegister(new Seller()
            {
                SellerId="3",
                UserName="siva",
                Password="siva23",
                CompanyName="aaa",
                Gstin="12",
                BriefDetails="Good",
                PostalAddress="hyd",
                Website="www.siva.com",
                EmailId="siva@gmail.com",
                MobileNo="9885918520"
            });
            var result = _repo.SellerLogin("siva", "siva23");
            Assert.NotNull(result);
        }
        [Test]
        [Description ("Test SellerLogin")]
        public void  SellerLogin()
        {
            var result = _repo.SellerLogin("siva", "siva23");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test BuyerLogin")]
        public void BuyerLogin()
        {
            var result = _repo.BuyerLogin("vinay", "vinay25");
            Assert.IsNotNull(result);
        }

    }
}
