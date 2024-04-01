using Microsoft.AspNetCore.Mvc;
using JobSearchServer.Models;
using System.Text.Json;
using System.IO;

namespace JobSearchServer.Controllers;

[ApiController]
[Route("[controller]")]
public class JobSearchServerController : ControllerBase
{

    private IWebHostEnvironment webHost;
    private string filePath;
    private List<Job>? JobsList { get; }

    public JobSearchServerController(IWebHostEnvironment webHost)
    {
        this.webHost = webHost;
        this.filePath = Path.Combine(webHost.ContentRootPath, "Data", "Jobs.json");
        using (var jsonFile = File.OpenText(filePath))
        {
            JobsList = JsonSerializer.Deserialize<List<Job>>(jsonFile.ReadToEnd(),
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }
    }



    [HttpGet("GetAllJobs")]
    public ActionResult GetAllJobs()
    {
        return Ok(JobsList);
    }

    // [HttpGet("GetUser")]
    // public ActionResult GetUser(string userName, string passward)
    // {
    //     return new User{UserName=userName,Passward=passward};
    // }
    // private void saveToFile()
    // {
    //     File.WriteAllText(filePath, JsonSerializer.Serialize(users));
    // }
}

