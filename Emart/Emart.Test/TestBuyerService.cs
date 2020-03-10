using System;
using System.Collections.Generic;
using System.Text;
using Emart.BuyerServices.Repositories;
using Emart.BuyerServices.Models;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
    class TestBuyerService
    {
        BuyerRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new BuyerRepository(new EmartDBContext());
        }
        [Test]
        public void EditProfile()
        {
            Buyer b = _repo.GetProfile("3");
            b.Password = "vinayi";
            Buyer b1 = _repo.GetProfile("3");
            Assert.AreSame(b, b1);
        }
        [Test]
        public void ViewProfile()
        {
            var result = _repo.GetProfile("2");
            Assert.IsNotNull(result);
        }
        [Test]
        public void SearchItems()
        {
            var result = _repo.SearchItems("earrings");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("DeleteCartItems")]
        public void DeleteCartItems()
        {
            _repo.DeleteCartItems("I2");
            var result = _repo.("I2");
            Assert.Null(result);
        }
        [Test]
        [Description ("TransactionHistory")]
        public void TransactionHistory()
        {
            var result = _repo.TransactionHistory("1");
            Assert.NotNull(result);
        }
        [Test]
        [Description ("BuyItem")]
        public void BuyItem()
        {
            _repo.BuyItem(new TransactionHistory()
            {
                Id = "T20",
                BuyerId="1",
                SellerId="1",
                TransactionId="T20",
                ItemId="I56",
                NumberOfItems="5",
                DateTime=DateTime.Now,
                Remarks="Gud",
                TransactionType="Debit"
            });
            var result = _repo.TransactionHistory("T20");
            Assert.IsNotNull(result);
        }
       
        
    }
}
