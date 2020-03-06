using Emart.AdminServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminServices.Repositories
{
   public interface IAdminRepository
    {
        void AddCategory(Category obj);
        void AddSubCategory(SubCategory obj);
        void DeleteCategory(string cid);
        void DeleteSubCategory(string subid);
        public List<Category> GetCategory();
        public List<SubCategory> GetSubCategory();

    }
}
