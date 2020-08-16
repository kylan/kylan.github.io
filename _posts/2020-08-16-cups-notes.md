---
layout: post
title: Printing with CUPS
---

I have an old Samsung ML-2165 printer. It's a pretty good monochrome laser printer, but it's Wifi support has always been spotty. Every few months, I end up uninstalling and reinstalling the printer driver and re-pairing the printer to get it to work. Of course this typically happens right when I _really_ need to print something, so I started to think of ways to make it more reliable.

The problem was exacerbated by the fact that we recently bought a Chromebook, and there's no way (that I could find) to install the necessary drivers in Chrome OS. Printing via the USB connection always works, but it's so much more convenient to be able to print from any computer in any room of the house.

Fortunately, I had a Raspberry Pi available and connected to my home network. Why not turn it into a print server? My plan was to connect the ML-2165 to the Rasperry Pi via USB and use [CUPS](https://cups.org), the Common Unix Printing System, to expose the printer to the network. There are some good CUPS [installation](https://www.howtogeek.com/169679/how-to-add-a-printer-to-your-raspberry-pi-or-other-linux-computer/) [tutorials](https://www.raspberrypi.org/blog/printing-at-home-from-your-raspberry-pi/) out there, and I was up and running in a matter of minutes.

Two problems, though. First, I wasn't able to find a good driver for the ML-2165. There were some Samsung models listed in the CUPS options, but nothing close enough to get a test page to print. The fix for that was to install SpliX, which is a set of drivers for Samsung printers.

```
sudo apt install printer-driver-splix
```

That allowed me to select Samsung ML-2160, 2.0.0 as the printer driver.

Second, even after selecting the correct driver, I was only able to print one job before having to reboot the printer. How frustrating! Thankfully, some [lucky googling](https://wiki.debian.org/CUPSDebugging#Problems_Printing_to_a_USB_Connected_Printer) revealed that a simple setting change will resolve the issue:

```
sudo lpadmin -p Samsung_ML-2160_Series -o usb-no-reattach-default=true
```

With those two additional commands, printing remotely from our Windows and Chromebook machines has been rock solid!