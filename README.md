# Deploying a dockerized app using mrsk
Deploying a simple node web server using mrsk on a virtual maching created using vagrant.

### Install mrsk
```shell
gem install mrsk
```

### Starting vagrant machine
Host user ssh key needs to be added for root user on server which is in our case virtual machine. This is required to mrsk can login as root, install required dependencies and deploy.
```shell
cd machine

vagrant up
vagrant ssh

sudo su root
mkdir -p /root/.ssh

echo "<ssh_key>" >> /root/.ssh/authorized_keys
```

### Deploying the application
Make sure you update image name and add required variables to .env file.
```shell
cd app
mrsk deploy
```
After deployment is finished the app should be available at `192.168.20.10`.
