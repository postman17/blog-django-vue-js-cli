from rest_framework import serializers


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(label='ID', read_only=True)
    category = serializers.CharField(max_length=100)
    created_at = serializers.DateTimeField()


class ArticleSerializer(serializers.Serializer):
    id = serializers.IntegerField(label='ID', read_only=True)
    title = serializers.CharField(max_length=300)
    article = serializers.CharField(style={'base_template': 'textarea.html'})
    category = serializers.CharField(max_length=100)
    created_at = serializers.DateTimeField(format="%Y-%m-%d")
