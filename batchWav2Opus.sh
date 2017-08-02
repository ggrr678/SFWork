for file in /home/grant_rosen678/wavs/*
do
  
   opusenc --vbr --bitrate 16 "$file" "$(basename "$file")".opus;

done

