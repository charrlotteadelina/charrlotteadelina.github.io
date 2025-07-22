---
layout: current
title: Publications
permalink: /writing/
order: 3
---

<body class="{{ page.section2 | downcase }}-page">
  <main class="default-content" aria-label="Content">
    <div class="container">
      <div class="page">
        {% assign sorted = site.peerreview | sort: 'date' | reverse %}
        {% for post in sorted %}
        {% assign title = post.title | downcase | strip %}
        {% if post.title and title != 'about' %}
        <hgroup class="page__header">
          <h1 class="page__title">{{ post.title }}</h1>
        </hgroup>
        {% endif %}
        <div class="post-preview">
            <div class="post-preview__right">
                <div class="post-content">
                    {{ post.content }}
                </div>
            </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </main>
</body>
 


<body class="{{ page.section2 | downcase }}-page">
  <main class="default-content" aria-label="Content">
    <div class="container">
      <div class="page">
        {% assign sorted = site.bookreview | sort: 'date' | reverse %}
        {% for post in sorted %}
        {% assign title = post.title | downcase | strip %}
        {% if post.title and title != 'about' %}
        <hgroup class="page__header">
          <h1 class="page__title">{{ post.title }}</h1>
        </hgroup>
        {% endif %}
        <div class="post-preview">
            <div class="post-preview__right">
                <div class="post-content">
                    {{ post.content }}
                </div>
            </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </main>
</body>



<body class="{{ page.section3 | downcase }}-page">
  <main class="default-content" aria-label="Content">
    <div class="container">
      <div class="page">
        {% assign sorted = site.policyreports | sort: 'date' | reverse %}
        {% for post in sorted %}
        {% assign title = post.title | downcase | strip %}
        {% if post.title and title != 'about' %}
        <hgroup class="page__header">
          <h1 class="page__title">{{ post.title }}</h1>
        </hgroup>
        {% endif %}
        <div class="post-preview">
            <div class="post-preview__right">
                <div class="post-content">
                    {{ post.content }}
                </div>
            </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </main>

<style>
    .link:hover p { color: #0099ff;
                  display:block; }
</style>

<div class="post-preview link">
    <a class="works__link" href="{{ 'https://scholar.google.co.in/citations?user=0uXMVnwAAAAJ&hl=en' }}">+ More</a>
</div>
