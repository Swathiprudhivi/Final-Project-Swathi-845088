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
        [Description("Test GetProfile()")]
        public void TestGetProfile()
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
            _repo.DeleteCartItems("C840");
            var result = _repo.GetCartItem("C840");
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
                Id = "T21",
                BuyerId="1",
                SellerId="1",
                TransactionId="T21",
                ItemId="4",
                NumberOfItems="6",
                DateTime=DateTime.Now,
                Remarks="Good",
                TransactionType="Debit"
            });
            var result = _repo.TransactionHistory("1");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description ("AddtoCart")]
        public void AddtoCart()
        {
            _repo.AddtoCart(new Cart()
            {
                Id = "C546",
                CategoryId="c01",
                SubcategoryId="s02",
                SellerId="2",
                ItemId="I66",
                ItemName="maskara",
                Price="56",
                Description="dff",
                StockNumber="90",
                Remarks="good",
                Img="",
                BuyerId="3"
            });
            var result = _repo.ViewCart("3", "I66");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetCartItems()")]
        public void TestGetCartItems()
        {
            var result = _repo.GetCartItem("1");
        }


    }
}
