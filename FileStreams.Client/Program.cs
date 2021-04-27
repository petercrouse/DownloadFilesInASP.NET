using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;
using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;

namespace FileStreams.Client
{
    [MemoryDiagnoser]
    public class FileStreamClient
    {
        static HttpClient httpClient = new HttpClient()
        {
            BaseAddress = new Uri("http://localhost:5000")
        };

        [Benchmark(Baseline = true, OperationsPerInvoke = 50)]
        public async Task GetFileContentAsync()
        {
            var response = await httpClient.GetAsync("/file/getfilecontent");

            response.EnsureSuccessStatusCode();

            using (var fileStream = new FileStream(@"./dataContent.txt", FileMode.Create))
            {
                await response.Content.CopyToAsync(fileStream);
            }
        }

        [Benchmark(OperationsPerInvoke = 50)]
        public async Task GetFileStreamAsync()
        {
            var response = await httpClient.GetAsync("/file/getfilestream");

            response.EnsureSuccessStatusCode();

            using (var fileStream = new FileStream(@"./dataStream.txt", FileMode.Create))
            {
                await response.Content.CopyToAsync(fileStream);
            }
        }

        [Benchmark(OperationsPerInvoke = 50)]
        public async Task GetFileContentResponseHeaderReadsAsync()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "/file/getfilecontent");

            var response = await httpClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead);

            response.EnsureSuccessStatusCode();

            using (var fileStream = new FileStream(@"./dataContent.txt", FileMode.Create))
            {
                await response.Content.CopyToAsync(fileStream);
            }
        }

        [Benchmark(OperationsPerInvoke = 50)]
        public async Task GetFileStreamResponseHeadersReadAsync()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "/file/getfilestream");

            var response = await httpClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead);

            response.EnsureSuccessStatusCode();

            using (var fileStream = new FileStream(@"./dataStream.txt", FileMode.Create))
            {
                await response.Content.CopyToAsync(fileStream);
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            BenchmarkRunner.Run<FileStreamClient>();
        }
    }
}
