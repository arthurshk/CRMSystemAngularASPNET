namespace CRMSystemAngularASPNET.Server.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string firstName {  get; set; }
        public string lastName { get; set; }
        public int accountId { get; set; }
        public Account account { get; set; }
    }
}
