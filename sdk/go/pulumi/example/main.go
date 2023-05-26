package main

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"

	s3beta "example.com/pulumi-generics/s3"
)

func main() {
	pulumi.Run(func(ctx *pulumi.Context) error {
		indexDocument := "index.html"

		website := (&s3beta.BucketWebsiteArgs{
			IndexDocument: pulumi.Val(indexDocument),
		}).ToOutputT(ctx.Context())

		bucket, err := s3beta.NewBucket(ctx, "my-bucket", &s3beta.BucketArgs{
			Website: website.Untyped().(s3beta.BucketWebsiteOutput),
			// Acl: pulumi.Ptr("public-read"),
		})
		if err != nil {
			return err
		}

		ctx.Export("is-policy-set", pulumi.ApplyT(bucket.Policy, func(policy *string) string {
			if policy == nil || *policy == "" {
				return "nope"
			} else {
				return "yep"
			}
		}))

		// Uses existing helper functions, this still returns a StringOutput for back-compatibility.
		content := pulumi.Sprintf(`<html>
<head>
  <title>Hello, Generics!</title><meta charset="UTF-8">
</head>
<body>
  <h1>Hello, Generics!</h1>
  <p>Made with <a href="https://pulumi.com">Pulumi[💜]</a></p>
  <p>This site knows its own address, it is: <code>http://%s</code></p>
</body>
</html>`, bucket.WebsiteEndpoint)

		s3beta.NewBucketObject(ctx, "my-beta-bucket", &s3beta.BucketObjectArgs{
			Bucket:  bucket.Bucket.ToAnyOutput(),
			Key:     pulumi.Ptr(indexDocument),     // string       -> Input[*string]
			Content: pulumi.PtrOf[string](content), // StringOutput -> Input[*string]
			Metadata: pulumi.MapT[string]{
				// Fully dynamic maps using pulumi.V to use string keys and inputty values:
				"generics-are": pulumi.Val("💜"),
			}, // map[string]Input[string] -> Input[map[string, string]]
			ContentType: pulumi.Ptr("text/html"),
			// Acl:          pulumi.Ptr("public-read"),
			StorageClass: pulumi.Ptr("STANDARD"),
		})

		ctx.Export("websiteUrl", bucket.WebsiteEndpoint)

		return nil
	})
}