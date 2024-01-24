# What did I learn

## Deploy 
The task `aws-actions/configure-aws-credentials@v4` has a parameter `role-duration-seconds`. I did not see at first but the doc clearly says :
> the duration cannot exceed the maximum that was defined when the IAM Role was created.
The workflow example from the SST Guide has this : 
```
    role-to-assume: arn:aws:iam::1234567890:role/GitHub
    role-duration-seconds: 14390 #adjust as needed for your build time
```

The default value for a role in AWS is now 1h (previously 6h). Github did try to tell me but I overlooked the error....
