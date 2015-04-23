---
layout: post
comments: true
tweets: false
title: The Page is Alive!
tagline: Small Successes Feel Amazing
tags: javascript jquery html5 python
author: Ken Cavagnolo
---

<div class="blurb">
     <p>This time I truly mean it: hello, world! I have owned the
     domain kcavagnolo.com for many years, and I never did anything
     with it. The plan had always been to expos&eacute; some aspect of
     my work, which at the time was astrophysics research. But, those
     efforts usually fell into job hunting season and polishing a site
     to accompany my resum&eacute;'s.</p>

     <p>Well, now that I have been out of academia for several years,
     and I have dabbled long enough in "data science" activities to
     have a decent portfolio of stuff to share -- this site finally
     made sense. After 24 hours of mucking around, it's finally
     working correctly and I can post to it as a remote platform via
     some cool automated tools I coded up. Without further ado, the
     details of how the site came to be, and the accompanying code so
     someone else can do the same thing.</p>

     <p>The steps I need to describe:<br>
     <ul>
     <li>google domains</li>
     <li>setup github pages</li>
     <li>dns and email forwarding for custom domain</li>
     <li>starter site template</li>
     <li>hacking together the pieces I liked and needed</li>
     <li>building a local instance of github pages w/ jekyll</li>
     <li>validating all the code and testing</li>
     <li>kick the whole thing live</li>
     </ul>
     </p>

     <p>The shit that's still broken:<br>
     <ul>
     <li>tags</li>
     <li>fancybox</li>
     <li>ipython integration</li>
     <li>plotly integration</li>
     <li>zero branding (logo, tagline, presented material)</li>
     <li>actually pushing code to Kaggle</li>
     </ul>
     </p>

     <p>Small victory today.</p>

<div class="highlight"><pre><span class="k">print</span> <span class="s">&quot;Hello World&quot;</span>
</pre></div>


{% highlight ruby linenos%}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}

</div>
