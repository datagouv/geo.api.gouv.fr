---
priority: 2
color:  teal
title:  Recherche par nom
sub-title: La variable <b>nom</b> vous permet d'effectuer une recherche de communes par nom.
icon: tag
link: https://geo.api.gouv.fr/communes?nom=versailles
tips: Il est possible d'utiliser la recherche par nom pour faire de l'autocomplétion.
side: right
try: try-name.html
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
