function loadYoutubeVids() {
    // URL for the YouTube RSS feed
    const feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=4a6f62';
    
    // Fetch the RSS feed
    fetch(feedUrl)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        const items = data.querySelectorAll("entry");
        let html = "";
        
        // Loop through the items in the RSS feed
        items.forEach(item => {
          // Extract the title, link, and thumbnail from the item
          const title = item.querySelector("title").textContent;
          const link = item.querySelector("link").getAttribute("href");
          const thumbnail = item.querySelector("media|thumbnail").getAttribute("url");
          
          // Create a new HTML element for the video
          html += `
            <li>
              <a href="${link}">
                <img src="${thumbnail}" alt="${title}">
                <span>${title}</span>
              </a>
            </li>
          `;
        });
        
        // Insert the HTML into the div with the id "youtube_vids"
        document.getElementById("youtube_vids").innerHTML = html;
      })
      .catch(error => console.log(error));
  }
  