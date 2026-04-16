#!/bin/bash

echo "Fixing EFI mount issue in /etc/fstab..."
echo "Backing up current fstab to /etc/fstab.backup"

# Create backup
sudo cp /etc/fstab /etc/fstab.backup

# Create the fixed fstab line
EFI_LINE="UUID=C0A9-D69D  /boot/efi  vfat  rw,relatime,fmask=0022,dmask=0022,codepage=437,iocharset=ascii,shortname=mixed,utf8,errors=remount-ro,nofail,x-systemd.device-timeout=10s  0 2"

# Use sed to replace the EFI mount line
sudo sed -i "s|^/dev/nvme0n1p1.*/boot/efi.*|$EFI_LINE|" /etc/fstab

echo "Checking the change was made:"
grep -i "boot/efi" /etc/fstab

echo ""
echo "Done! The EFI partition will now:"
echo "1. Use UUID instead of device path"
echo "2. Have 'nofail' option to prevent boot failure"
echo "3. Have 10-second timeout for device readiness"
echo ""
echo "You should now reboot to test the fix."