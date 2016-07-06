---
layout: call
priority: 4
title:  Recherche multi-critères
description: La variable <b>nom</b> vous permet de une recherche de communes par nom.
icon: unordered list
link: https://geo.api.gouv.fr/communes?nom=versailles
tips: Il est possible d'utiliser la recherche par nom pour faire de l'autocomplétion.
tag: right
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
      "population":85272,
      "_score":1
   }
]
{% endhighlight %}
