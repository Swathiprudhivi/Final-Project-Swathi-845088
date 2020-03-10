using System;
using System.Collections.Generic;
using System.Text;
using Emart.AdminServices.Repositories;
using Emart.AdminServices.Models;
using Emart.AdminServices.Controllers;
using NUnit.Framework;
namespace Emart.Test
{
    [TestFixture]
    class TestAdminService
    {
        AdminRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new AdminRepository(new EmartDBContext());
        }
        [Test]
        [Description ("Test Category")]
        public void AddCategory()
        {
            _repo.AddCategory(new Category()
            {
                CategoryId = "c05",
                CategoryName = "Electonics",
                BriefDetails = "Best"
            });
            var result = _repo.GetCatById("c05");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description ("Test SubCategory")]
        public void AddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                SubcategoryId = "SC03",
                SubcategoryName = "mobile",
                CategoryId = "c05",
                BriefDetails = "good",
                Gst = "100"
            });
            var result = _repo.GetSubCatById("SC03");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description ("DeleteCategory")]
        public void DeleteCategory()
        {
            _repo.DeleteCategory("c05");
            var result = _repo.GetCatById("c05");
            Assert.Null(result);
        }
        [Test]
        [Description ("DeleteSubCategory")]
        public void DeleteSubcategory()
        {
            _repo.DeleteSubCategory("SC03");
            var result = _repo.GetSubCatById("SC03");
            Assert.Null(result);
        }
        [Test]
        [Description ("UpdateCategory")]
        public void UpdateCategory()
        {
            //Arrange
            Category c = _repo.GetCatById("c02");
            c.BriefDetails = "aaa";
            _repo.UpdateCategory(c);
            Category c1 = _repo.GetCatById ("c02");
            Assert.AreSame(c, c1);
        }
        [Test]
        [Description("UpdateSubCategory")]
        public void UpdateSubCategory()
        {
            //Arrange
            SubCategory sc = _repo.GetSubCatById("s02");
            sc.BriefDetails = "aaa";
            _repo.UpdateSubCategory(sc);
            SubCategory sc1 = _repo.GetSubCatById("s02");
            Assert.AreSame(sc, sc1);
        }
        [Test]
        public void GetCatById()
        {
            var result = _repo.GetCatById("c02");
            Assert.IsNotNull(result);
        }
        [Test]
        public void GetSubCatById()
        {
            var result = _repo.GetSubCatById("s02");
            Assert.IsNotNull(result);
        }
    }
}
