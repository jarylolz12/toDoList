# Infra Docs

This Documentation are some of the works of the DevOps that covers the ff:

 - Manual Deployment of the projects
 - Migration of Datas in Database
 - VM Setup for New Devs

## VM Setup for New Devs
### SSH for VM:
gcloud compute ssh --project=*<project_id>* --zone=*<project_zone>* *<vm_instance_name>*
> *Replace*: 
> <project_id> - google cloud project id.
> <project_zone> - google cloud project zone.
> <vm_instance_name> - name of the compute engine.

*Eggsample*:
```
gcloud compute ssh --project=blaggo-training --zone=asia-southeast-1 my-default-instance 
```
