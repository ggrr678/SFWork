avconv -i myLife.wav -f wav - | opusenc --bitrate 160 - myLife.opus
