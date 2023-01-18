import xml.etree.ElementTree as ET
import requests
import os
import re
from datetime import datetime

# URL for the YouTube RSS feed
feed_url = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCf2KRp067F-apDi9qfmEHfQ'

# Fetch the RSS feed
response = requests.get(feed_url)
root = ET.fromstring(response.text)

# Loop through the items in the RSS feed
for entry in root.findall('{http://www.w3.org/2005/Atom}entry'):
   # Extract the title, link, and thumbnail from the item
    title = entry.find('{http://www.w3.org/2005/Atom}title').text
    title = entry.find('{http://www.w3.org/2005/Atom}title').text
    link = entry.find('{http://www.w3.org/2005/Atom}link').attrib['href']
    pubDate = entry.find('{http://www.w3.org/2005/Atom}published').text
    pubDate = datetime.strptime(pubDate, '%Y-%m-%dT%H:%M:%S+00:00')
    formatted_date = pubDate.strftime('%Y-%m-%d')

    thumbnail = entry.find('{http://search.yahoo.com/mrss/}thumbnail')
    videoId = entry.find('{http://www.youtube.com/xml/schemas/2015}videoId').text
    if thumbnail is not None:
        thumbnail = thumbnail.attrib['url']
    else:
        thumbnail = "https://i4.ytimg.com/vi/{videoId}/hqdefault.jpg"
    # Create a new Jekyll post
    post = f"""---
title: "{title}"
date: {formatted_date}
youtube_link: {link}
youtube_thumbnail: {thumbnail}
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/{videoId}" title="{ title }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
"""
    # Write the post to a file
    filename = re.sub(r'[^a-zA-Z0-9]+', '_', title)
    # Remove leading and trailing underscores
    filename = re.sub(r'^_|_$', '', filename)

    filename = f'_posts/{formatted_date}-{filename}.md'
    with open(filename, 'w') as f:
        f.write(post)
