using System.IO;

namespace FileStreams.API.FileManager
{
    public interface IFileManager
    {
        byte[] GetFileContent(string path);
        Stream GetFileStream(string path);
    }
}
