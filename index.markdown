---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /about/
---

{% cache %}
  {% feed_content https://www.youtube.com/feeds/videos.xml?channel_id=4a6f62 %}
{% endcache %}
{% for entry in site.feed.entries %}
<li>
    <a href="{{ entry.url }}"><img src="{{ entry.thumbnail }}" alt="{{ entry.title }}"/></a>
    <br/>
    <a href="{{ entry.url }}">{{ entry.title }}</a>
</li>
{% endfor %}
