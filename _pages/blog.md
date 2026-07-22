---
permalink: /blog/
title: "Blog"
excerpt: "研究经验、学习记录与随笔感想"
author_profile: false
---

<header class="blog-header">
  <h1>Blog</h1>
  <p>记录研究、学习与日常思考。</p>
</header>

{% assign blog_sections = "research|研究经验,study|学习记录,reflection|随笔感想" | split: "," %}
{% for section in blog_sections %}
  {% assign section_parts = section | split: "|" %}
  {% assign category_key = section_parts[0] %}
  {% assign category_title = section_parts[1] %}
  {% assign category_posts = site.categories[category_key] %}
  <section class="blog-section" id="{{ category_key }}">
    <h2>{{ category_title }}</h2>
    <ul class="blog-post-list">
      {% for post in category_posts %}
        <li class="blog-post-item">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </section>
{% endfor %}
