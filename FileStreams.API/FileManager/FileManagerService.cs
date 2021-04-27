using System.IO;

namespace FileStreams.API.FileManager
{
    public class FileManagerService : IFileManager
    {
        public byte[] GetFileContent(string path)
        {
            return File.ReadAllBytes(path);
        }

        public Stream GetFileStream(string path)
        {
            return File.OpenRead(path);
        }
    }
}
