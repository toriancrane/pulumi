package main

import (
	documentdb "github.com/pulumi/pulumi-azure-native/sdk/go/azure/documentdb"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx *pulumi.Context) error {
		_, err := documentdb.NewDatabaseAccount(ctx, "databaseAccount", &documentdb.DatabaseAccountArgs{
			AccountName: pulumi.String("ddb1"),
			ApiProperties: &documentdb.ApiPropertiesArgs{
				ServerVersion: pulumi.String("3.2"),
			},
			BackupPolicy: pulumi.Any{
				PeriodicModeProperties: &documentdb.PeriodicModePropertiesArgs{
					BackupIntervalInMinutes:        pulumi.Int(240),
					BackupRetentionIntervalInHours: pulumi.Int(8),
				},
				Type: pulumi.String("Periodic"),
			},
			DatabaseAccountOfferType: documentdb.DatabaseAccountOfferTypeStandard,
			Locations: documentdb.LocationArray{
				&documentdb.LocationArgs{
					FailoverPriority: pulumi.Int(0),
					IsZoneRedundant:  pulumi.Bool(false),
					LocationName:     pulumi.String("sourthcentralus"),
				},
			},
			ResourceGroupName: pulumi.String("rg1"),
		})
		if err != nil {
			return err
		}
		return nil
	})
}
