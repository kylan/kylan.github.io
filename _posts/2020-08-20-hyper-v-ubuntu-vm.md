---
layout: post
title: Remotely Accessible Ubuntu VM in Hyper-V
---

Using Windows 10 Pro, I installed an Ubuntu 20.04 VM in Hyper-V. This is great because it allows me to run a Linux installation on my desktop without needed a separate machine. However, I really want to be able to connect to the Ubuntu VM from another computer using Remote Desktop Protocol (RDP), and that doesn't work out of the box. Here are the issues and solutions I found on the way to getting this to work:

# Network access for the VM

Why can't I ping the Ubuntu VM from the network? The solution is to configure the appropriate kind of virtual switch.

First, go to the Hyper-V Manager and select Virtual Switch Manager. Add a 'New virtual network switch,' pick the 'External network' connection type, select the network adapter for the desired LAN, and check 'Allow management operating system to share this network adapter.' Apply those settings.

Then, navigate to the Settings for the Ubuntu virtual machine. Under Network Adapter, select the external virtual switch, and hit Apply.

If you can ping the Ubuntu VM from another machine on the network, you have completed this step successfully.

# Configuring RDP remote access

Even after I could ping the Ubuntu VM, I was unable to start an RDP session from a different computer on the network. This is because the canned Ubuntu VM provided by Hyper-V configures xrdp (the RDP pacakge for Ubuntu) to use a [virtual socket](https://github.com/neutrinolabs/xrdp/issues/1260#issuecomment-567419476) so it is only accessible from the local Windows host.

To fix this, edit `/etc/xrdp/xrdp.ini` to change the following from

```
use_vsock=true
```

to

```
use_vsock=false
```

and restart xrdp with `sudo systemctl restart xrdp`.

# Allow multiple RDP sessions

When I first tried to RDP into the Ubuntu VM remotely, it connected successfully and I was presented a username and password prompt. Succes, right!? Not so fast. After authenticating, all I got was a blank black screen. What's going on here?

It turns out that, by default, xrdp only allows one user session at a time. Since I was connected to the VM on my Windows machine, the RDP session was not established properly. Fortunately, [there's an easy fix](http://catch22cats.blogspot.com/2018/05/xrdp-blank-screen-with-ubuntu-1804.html#:~:text=If%20you%20are%20trying%20to,a%20second%20session%20from%20opening.) for this, too.

On the Ubuntu VM, edit `/etc/xrdp/startwm.sh` to add the following before the lines that test and execute the Xsession:

```
unset DBUS_SESSION_BUS_ADDRESS
unset XDG_RUNTIME_DIR
. $HOME/.profile
```

Restart xrdp again, and everything should be working!