using Emart.AdminServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminServices.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly EmartDBContext _context;
        public AdminRepository(EmartDBContext context)
        {
            _context = context;

        }
        public void AddCategory(Category iobj)
        {

            _context.Add(iobj);
            _context.SaveChanges();
        }
        public void AddSubCategory(SubCategory obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }
        public void DeleteCategory(string cid)
        {
            Category c = _context.Category.Find(cid);
            _context.Remove(c);
            _context.SaveChanges();
        }
        public void DeleteSubCategory(string subid)
        {
            SubCategory s = _context.SubCategory.Find(subid);
            _context.Remove(s);
            _context.SaveChanges();
        }
        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetSubCategory()
        {
            return _context.SubCategory.ToList();

        }
    }
}
