# Microphone Troubleshooting Guide

## Problem
Microphone works at system level but not detected in Chrome or OBS.

## System Status
- Microphone: **Working** (tested with `arecord` and `parecord`)
- Source: `alsa_input.pci-0000_30_00.6.analog-stereo`
- Description: "Ryzen HD Audio Controller Analog Stereo"
- State: RUNNING
- Input source: Front Mic (configured)
- Volume: 81% + 20dB boost

## Solutions for Chrome

### 1. Check Chrome Permissions
1. Open Chrome and go to `chrome://settings/content/microphone`
2. Make sure microphone access is **Allowed**
3. Remove any existing blocks for websites you want to use

### 2. Reset Chrome Audio Settings
1. Go to `chrome://settings/content/microphone`
2. Click "Reset permissions" for any problematic sites
3. Restart Chrome completely

### 3. Use Chrome Flags (if needed)
1. Go to `chrome://flags`
2. Search for "audio"
3. Try enabling/disabling:
   - `#enable-audio-service-sandbox` (try disabling)
   - `#use-fake-device-for-media-stream` (use for testing)

### 4. Test with Chrome WebRTC Test
1. Visit: `https://mictests.com`
2. Click "Test my mic"
3. Grant permission when prompted
4. Look for "Ryzen HD Audio Controller Analog Stereo"

## Solutions for OBS

### 1. Add Audio Input Capture
1. In OBS, go to Sources panel
2. Click "+" → "Audio Input Capture"
3. Select "Create new"
4. In device dropdown, look for:
   - "Ryzen HD Audio Controller Analog Stereo"
   - "alsa_input.pci-0000_30_00.6.analog-stereo"
   - "Default" or "System Default"

### 2. Check OBS Audio Settings
1. File → Settings → Audio
2. Global Audio Devices:
   - Desktop Audio: Set to your speakers
   - Mic/Auxiliary Audio: Select "Ryzen HD Audio Controller Analog Stereo"
3. Apply and restart OBS

### 3. Advanced OBS Settings
1. Settings → Advanced
2. Audio:
   - Monitoring Device: Set appropriately
   - Sync Offset: 0ms (default)

## System-Level Checks

### 1. Verify Default Source
```bash
pactl get-default-source
```
Should return: `alsa_input.pci-0000_30_00.6.analog-stereo`

### 2. Check Volume Levels
```bash
amixer -c 2 sget 'Front Mic'
amixer -c 2 sget 'Capture'
```

### 3. Test Recording (Quick Test)
```bash
# Test with PipeWire
timeout 2 parecord --channels=2 --rate=44100 /tmp/test.raw
ls -lh /tmp/test.raw  # Should be ~172KB
```

## Common Issues & Fixes

### 1. Chrome Shows "Default" Only
- Chrome may only show "Default" device
- This should work if system default is set correctly
- Try selecting "Default" in Chrome

### 2. OBS Shows No Devices
- Restart OBS after configuring system audio
- Run OBS from terminal to see error messages:
  ```bash
  obs 2>&1 | grep -i audio
  ```

### 3. Permission Denied
- Ensure user is in `audio` and `video` groups:
  ```bash
  sudo usermod -a -G audio,video $USER
  ```
- Log out and back in for changes to take effect

### 4. PipeWire Restart
If all else fails, restart audio system:
```bash
systemctl --user restart pipewire pipewire-pulse
```

## Testing Websites
1. https://mictests.com - WebRTC microphone test
2. https://webcammictest.com - Camera and microphone test
3. https://online-voice-recorder.com - Simple recording test

## Final Verification
1. System level: `parecord` test works
2. Chrome: Test on mictests.com
3. OBS: Audio meters show activity when speaking

If still not working, check application logs and ensure no other application is exclusively using the microphone.