from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.blog.urls')),
    path('accounts/', include('apps.accounts.urls')),
    url(r'^auth/', include('rest_auth.urls')),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
