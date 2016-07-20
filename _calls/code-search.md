---
priority: 1
color:  red
title:  Recherche par code postal
sub-title: Il est possible de rechercher une commune avec son <b>code postal</b>.
icon: mail
link: https://geo.api.gouv.fr/communes?codePostal=78000
side: left
---
{% highlight json %}
[
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
]
{% endhighlight %}
