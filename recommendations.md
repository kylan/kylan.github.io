---
layout: default
title: Recommendations
description: Recommendations and a reading list.
sitemap: false
noindex: true
---

# Recommendations

<ul>
	{% for post in site.tags.recommendations %}
		<li><a href="{{ post.url }}">{{ post.title }}</a></li>
	{% endfor %}
</ul>

# Reading List

Since it's nice to keep track, here's a running [list of books](https://www.goodreads.com/user/show/1914034-kylan) I've been reading.
