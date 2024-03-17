---
layout: default
title: Blogs
permalink: /blogs/
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
order: 4
---

{% for post in site.posts %}
<div class="post-preview">
 <img class="post-preview__left" src="{{ post.image }}" alt="{{ page.image_alt }}">
 <div class="post-preview__right">
  <head>
  <style>
    .link { color: #013220; }
    .link:hover { color: #0099ff; }
    .link { text-decoration: underline }
    .link:visited {colour: #cc00ff}
  </style>
  </head>
   <a class="link" href="{{ post.url }}">{{ post.title }}</a>
   <span>{{ post.date | date: "%b %d, %Y" }}</span>
   <div class="tag-group">
     {% for tag in post.tags %}
       <div class="tag"><span class="tag-text">{{ tag }}</span></div>
     {% endfor %}
   </div>
 </div>
</div>
{% endfor %}