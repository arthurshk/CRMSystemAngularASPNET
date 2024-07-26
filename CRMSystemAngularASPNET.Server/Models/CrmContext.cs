using Microsoft.EntityFrameworkCore;

namespace CRMSystemAngularASPNET.Server.Models
{
    public class CrmContext : DbContext
    {
        public CrmContext(DbContextOptions<CrmContext> options) : base(options)
        { 
        
        }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Contact> Contacts { get; set; }
    }
}
