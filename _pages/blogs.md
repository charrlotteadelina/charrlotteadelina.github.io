---
layout: current
title: Current
first_title: Blogs
second_title: Engagements
permalink: /blogs/
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: false
order: 4
---

<body class="{{ page.first_title | downcase }}-page">
  <main class="default-content" aria-label="Content">
    <div class="container">
      <div class="page">
        {% assign title = page.first_title | downcase| strip %}
        {% if page.first_title and title != 'about' %}
        <hgroup class="page__header">
          <h2 class="page__title">{{ page.first_title }}</h2>
          {% if page.category %}
          <h3 class="page__category">{{ page.category }}</h3>
          {% endif %}
        </hgroup>
        {% endif %}

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

     </div>
    </div>
  </main>
</body>

<body class="{{ page.second_title | downcase }}-page">
  <main class="default-content" aria-label="Content">
    <div class="container">
      <div class="page">
        {% assign title = page.second_title | downcase | strip %}
        {% if page.second_title and title != 'about' %}
        <hgroup class="page__header">
          <h2 class="page__title">{{ page.second_title }}</h2>
          {% if page.category %}
          <h3 class="page__category">{{ page.category }}</h3>
          {% endif %}
        </hgroup>
        {% endif %}
        
{% assign sorted = site.currents | sort: 'date' | reverse  %}
{% for post in sorted %}
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

      </div>
    </div>
  </main>
</body>