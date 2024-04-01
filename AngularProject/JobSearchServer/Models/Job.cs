namespace JobSearchServer.Models
{
    public class Job
    {
        public int Id { get; set; }
        public string? JobName { get; set; }
        public int ScopeOfHours { get; set; }
        public string? Area { get; set; }
        public Field JobField { get; set; }
        public string? Requirements { get; set; }
        public bool WorkFromHome { get; set; }
    }

    
}
