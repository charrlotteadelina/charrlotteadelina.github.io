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
---

<h1 class="col-header dark-orange">Recent posts</h1>
{% for post in site.posts %}
<div class="post-preview">
 <img class="post-preview__left" src="{{ post.image }}" alt="{{ page.image_alt }}">
 <div class="post-preview__right">
   <a class="preview-title" href="{{ post.url }}">{{ post.title }}</a>
   <span>{{ post.date | date: "%b %d, %Y" }}</span>
   <div class="tag-group">
     {% for tag in post.tags %}
       <div class="tag"><span class="tag-text">{{ tag }}</span></div>
     {% endfor %}
   </div>
 </div>
</div>
{% endfor %}