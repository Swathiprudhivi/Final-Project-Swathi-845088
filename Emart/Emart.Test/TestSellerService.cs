using System;
using System.Collections.Generic;
using System.Text;
using Emart.SellerServices.Repositories;
using Emart.SellerServices.Models;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
    class TestSellerService
    {
        ItemRepository _repo;
        SellerRepository _repo1;
        [SetUp]
        public void Setup()
        {
            _repo = new ItemRepository(new EmartDBContext());
            _repo1 = new SellerRepository(new EmartDBContext());
        }
        [Test]
        [Description ("Test Items")]
        public void AddItem()
        {
            _repo.AddItem(new Items()
            {
                SellerId = "2",
                ItemId = "I2",
                CategoryId = "c04",
                SubcategoryId = "SC92",
                Price = "1200",
                ItemName = "tablet",
                Description = "ase",
                StockNumber = "10",
                Remarks = "nooo",
                Image = "swa"

            });
            var result = _repo.GetItem("I2");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("DeleteItem")]
        public void DeleteItem()
        {
            _repo.DeleteItem("I48");
            var result = _repo.GetItem("I48");
            Assert.Null(result);
        }
        [Test]
        [Description("UpdateItem")]
        public void UpdateItem()
        {
            //Arrange
            Items i = _repo.GetItem("I65");
            i.ItemName = "maskara";
            _repo.UpdateItem(i);
            Items i1 = _repo.GetItem("I65");
            Assert.AreSame(i, i1);
        }
        [Test]
        public void GetItem()
        {
            var result = _repo.GetItem("3");
            Assert.IsNotNull(result);
        }
        [Test]
        public void ViewItems()
        {
            var result = _repo.ViewItems();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void  ViewProfile()
        {
            var result = _repo1.GetProfile("2");
            Assert.IsNotNull(result);
        }
        [Test]
        public void EditProfile()
        {
            Seller s = _repo1.GetProfile("3");
            s.PostalAddress = "vetapalem";
            Seller s1 = _repo1.GetProfile("3");
            Assert.AreSame(s, s1);
        }
    }
}
