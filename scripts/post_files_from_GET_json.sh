#!/bin/bash

# URL for the YouTube RSS feed
feed_url='https://www.youtube.com/feeds/videos.xml?channel_id=UCf2KRp067F-apDi9qfmEHfQ'

# Fetch the RSS feed
response=$(curl -s $feed_url)

# Parse the RSS feed into JSON
json=$(echo $response | xml2json -t json)

# Loop through the items in the JSON
for item in $(echo $json | jq -r '.rss.channel.item[]'); do
    # Extract the title, link, and published date from the item
    title=$(echo $item | jq -r '.title')
    link=$(echo $item | jq -r '.link')
    pubDate=$(echo $item | jq -r '.pubDate')
    # Sanitize the title and format the date
    filename=$(echo $title | tr -cd "[:alnum:]-_ " | tr "[:upper:]" "[:lower:]")
    filename=${filename// /-}
    pubDate=$(date -d "$pubDate" +"%Y-%m-%d")
    # Create the filename
    filename="$pubDate-$filename.md"
    # Create a new Jekyll post
    post="---
title: $title
date: $pubDate
youtube_link: $link
---
<iframe width='560' height='315' src='https://www.youtube.com/embed/$(echo $link | cut -d= -f 2)' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    # Write the post to a file
    filename="_posts/$filename"
    echo "$post" > "$filename"
done
