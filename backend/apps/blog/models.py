from django.db import models


class Category(models.Model):
    """ class category for article(FK) """

    category = models.CharField('Категория', max_length=100)

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.category


class Article(models.Model):
    """ class article """

    title = models.CharField('Заголовок', max_length=300)
    article = models.TextField('Статья')
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'

    def __str__(self):
        return self.title
