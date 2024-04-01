namespace JobSearchServer.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Passward { get; set; }
        public Field JobSearchField { get; set; }

        public User(int Id, string UserName,string Passward, int JobSearchField)
        {
            this.Id = Id;
            this.UserName = UserName;
            this.Passward=Passward;
            this.JobSearchField = (Field)JobSearchField;
        }
    }
}