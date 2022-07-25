import pulumi
import pulumi_aws as aws

site_bucket = aws.s3.Bucket("siteBucket")
test_file_asset = aws.s3.BucketObject("testFileAsset",
    bucket=site_bucket,
    source=pulumi.FileAsset("file.txt"))
test_string_asset = aws.s3.BucketObject("testStringAsset",
    bucket=site_bucket,
    source=pulumi.StringAsset("<h1>File contents</h1>"))
test_remote_asset = aws.s3.BucketObject("testRemoteAsset",
    bucket=site_bucket,
    source=pulumi.remoteAsset("https://pulumi.test"))
test_file_archive = aws.s3.BucketObject("testFileArchive",
    bucket=site_bucket,
    source=pulumi.FileArchive("file.tar.gz"))
test_remote_archive = aws.s3.BucketObject("testRemoteArchive",
    bucket=site_bucket,
    source=pulumi.RemoteArchive("https://pulumi.test/foo.tar.gz"))
test_asset_archive = aws.s3.BucketObject("testAssetArchive",
    bucket=site_bucket,
    source=pulumi.AssetArchive({
        "file.txt": pulumi.FileAsset("file.txt"),
        "string.txt": pulumi.StringAsset("<h1>File contents</h1>"),
        "remote.txt": pulumi.remoteAsset("https://pulumi.test"),
        "file.tar": pulumi.FileArchive("file.tar.gz"),
        "remote.tar": pulumi.RemoteArchive("https://pulumi.test/foo.tar.gz"),
        ".nestedDir": pulumi.AssetArchive({
            "file.txt": pulumi.FileAsset("file.txt"),
            "string.txt": pulumi.StringAsset("<h1>File contents</h1>"),
            "remote.txt": pulumi.remoteAsset("https://pulumi.test"),
            "file.tar": pulumi.FileArchive("file.tar.gz"),
            "remote.tar": pulumi.RemoteArchive("https://pulumi.test/foo.tar.gz"),
        }),
    }))
