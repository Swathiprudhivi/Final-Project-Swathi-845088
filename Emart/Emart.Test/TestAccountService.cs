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
                BuyerId="4",
                UserName="sai",
                EmailId="sai@gmail.com",
                Password="sai123",
                MobileNo="8023154689",
                CreatedDateTime=DateTime.Now

            });
            var result = _repo.BuyerLogin("sai","sai123");
            Assert.NotNull(result);
        }
        [Test]
        [Description ("Test SellerRegister")]
        public void SellerRegister()
        {
            _repo.SellerRegister(new Seller()
            {
                SellerId="4",
                UserName="sai",
                Password="sai23",
                CompanyName="asd",
                Gstin="16",
                BriefDetails=" very Good",
                PostalAddress="dehli",
                Website="www.sai.com",
                EmailId="sai@gmail.com",
                MobileNo="8080895689"
            });
            var result = _repo.SellerLogin("sai", "sai23");
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
