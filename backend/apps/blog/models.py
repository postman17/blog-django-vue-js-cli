from django.db import models
from django.utils.translation import ugettext_lazy as _


class Category(models.Model):
    """ class category for article(FK) """

    category = models.CharField(_('Category'), max_length=100)
    created_at = models.DateTimeField(_('Created'), auto_now_add=True)

    class Meta:
        verbose_name = _('Category')
        verbose_name_plural = _('Categories')

    def __str__(self):
        return self.category


class Article(models.Model):
    """ class article """

    title = models.CharField(_('Title'), max_length=300)
    article = models.TextField(_('Article'))
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    created_at = models.DateTimeField(_('Created'), auto_now_add=True)

    class Meta:
        verbose_name = _('Article')
        verbose_name_plural = _('Articles')

    def __str__(self):
        return self.title
