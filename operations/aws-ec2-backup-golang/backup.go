package main

import (
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws/external"
	"github.com/aws/aws-sdk-go-v2/service/ec2"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/awserr"
)

var _ aws.Config
var svc *ec2.EC2

func main() {
	fmt.Println("Backup")

	cfg, err := external.LoadDefaultAWSConfig(
		external.WithSharedConfigProfile("xxx"),
	)
	if err != nil {
		panic("failed to load config, " + err.Error())
	}

	svc := ec2.New(cfg)
	input := &ec2.DescribeVolumesInput{}

	req := svc.DescribeVolumesRequest(input)
	result, err := req.Send()
	if err != nil {
		if aerr, ok := err.(awserr.Error); ok {
			switch aerr.Code() {
			default:
				fmt.Println(aerr.Error())
			}
		} else {
			// Print the error, cast err to awserr.Error to get the Code and
			// Message from an error.
			fmt.Println(err.Error())
		}
		return
	}

	for _, vol := range result.Volumes {
		fmt.Println("Volume ID", vol.VolumeId)
	}
}
