#!/bin/bash

echo "=== MICROPHONE PLUG/UNPLUG MONITOR ==="
echo "This script monitors audio device changes"
echo "Press Ctrl+C to stop"
echo ""

echo "Current audio sources:"
pactl list sources short
echo ""

echo "Monitoring audio events... (plug/unplug microphone now)"
echo "----------------------------------------"

# Monitor PulseAudio events
pactl subscribe 2>/dev/null | while read -r line; do
    if echo "$line" | grep -q "Event"; then
        echo "[$(date '+%H:%M:%S')] $line"
        
        # Check if it's a source change event
        if echo "$line" | grep -q "'change' on source"; then
            echo "   Source changed! Checking current state..."
            pactl list sources short | grep "analog-stereo"
        fi
    fi
done