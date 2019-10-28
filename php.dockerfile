FROM php:7.2-apache

WORKDIR /var/www

# Alterar diretório root
ENV APACHE_DOCUMENT_ROOT /var/www/public_html
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Dependencias Básicas
RUN apt update
RUN apt install -y libssl-dev libxslt-dev curl libcurl3-dev

# Dependencias - Aplicação
RUN docker-php-ext-install mbstring
RUN docker-php-ext-install pdo
RUN docker-php-ext-install pdo_mysql

# Dependencias - Composer
RUN docker-php-ext-install xsl
RUN docker-php-ext-install curl
RUN docker-php-ext-install iconv
RUN docker-php-ext-install xml

#Instalação Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer

RUN a2enmod rewrite