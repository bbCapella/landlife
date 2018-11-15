# use php with apace for base image
FROM php:7.2-apache

# enable the header module to disable caching
RUN a2enmod headers

# copy dist folder
COPY dist/ /var/www/html/