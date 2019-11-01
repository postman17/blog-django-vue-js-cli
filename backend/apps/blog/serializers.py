from rest_framework import serializers

from .models import Category, Article


class CategorySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(label='ID', read_only=True)
    category = serializers.CharField(max_length=100)
    created_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'category', 'created_at')


class ArticleSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(label='ID', read_only=True)
    title = serializers.CharField(max_length=300)
    article = serializers.CharField(style={'base_template': 'textarea.html'})
    category = CategorySerializer()
    created_at = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)

    class Meta:
        model = Article
        fields = ('id', 'title', 'article', 'category', 'created_at')

    def create(self, validated_data):
        category = Category.objects.get(category=validated_data.pop('category')['category'])
        instance = Article.objects.create(**validated_data, category=category)
        return instance
