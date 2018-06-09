import os
from .settings_base import * # NOQA

DEBUG = True

ALLOWED_HOSTS = ['127.0.0.1']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

AUTH_PASSWORD_VALIDATORS = []

TEMPLATES[0]['OPTIONS']['loaders'] = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader'
)

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
