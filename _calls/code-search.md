---
layout: call
priority: 1
color:  red
title:  Recherche par code postal
description: Il est possible de rechercher une commune avec son <b>code postal</b>.
icon: mail
link: https://geo.api.gouv.fr/communes/78646
tag: left
try: > #
 <h2 class="ui header">Essayez</h2>
 <div class="ui icon input">
   <input type="text" placeholder="ex: 27320">
   <i class="search icon"></i>
 </div>
---
{% highlight json %}
{
   "nom":"Versailles",
   "code":"78646",
   "codeDepartement":"78",
   "codeRegion":"11",
   "codesPostaux":[
      "78000"
   ],
   "population":85272
}
{% endhighlight %}
