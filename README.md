Brunch with Django skeleton
===========================

This is a brunch skeleton to help you get up and running with [django-brunch](https://github.com/nshafer/django-brunch)

Getting Started
---------------

1. Initialize brunch in your Django Project Directory

    cd myproject
    brunch new -s https://github.com/nshafer/django-brunch-skeleton

2. Put your CSS and JS files in `static/`, images and other files in `static/assets/`

3. Test brunch

    brunch build

4. Add brunch's output directory `brunch/` to the STATICFILES_DIRS list so that Django will find the files that Brunch
will create. Remove any existing reference to `static/` since we now only want to include assets handled by brunch.

    ```python
    STATICFILES_DIRS = [
        os.path.join(BASE_DIR, "brunch"),
    ]
    ```

5. Link the brunch output in your templates

    ```html
    <link rel="stylesheet" href="{% static "app.css" %}"/>
    <script src="{% static "app.js" %}"></script>
    ```

6. Install [django-brunch](https://github.com/nshafer/django-brunch) to integrate running `brunch watch`
with `./manage.py runserver`


Customization
-------------

Customize brunch-config.js to suit your use. Add extra template directories to watch in `paths.watched` so that you can
have live reloading goodness when editing templates.
