---
layout: default
title: 👍
---

# 👍 Recommendations

<ul>
	{% for post in site.tags.recommendations %}
		<li><a href="{{ post.url }}">{{ post.title }}</a></li>
	{% endfor %}
</ul>

# Reading List

Since it's nice to keep track, here's a running [list of books](books.md) I've been reading.
