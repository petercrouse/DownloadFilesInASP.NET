using FileStreams.API.FileManager;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;

namespace FileStreams.API.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class FileController : ControllerBase
    {
        private readonly IFileManager _fileManager;

        public FileController(IFileManager fileManager)
        {
            _fileManager = fileManager;
        }

        [HttpGet()]
        public IActionResult GetFileContent()
        {
            byte[] fileBytes = _fileManager.GetFileContent("./data.txt");

            return File(fileBytes, "application/txt", "dataContent.txt");
        }

        [HttpGet()]
        public IActionResult GetFileStream()
        {
            Stream stream = _fileManager.GetFileStream("./data.txt");

            return File(stream, "application/txt", "dataStream.txt");
        }
    }
}
