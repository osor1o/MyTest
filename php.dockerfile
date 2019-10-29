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
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer

RUN a2enmod rewrite

# Instalação GIT
RUN apt install -y git

# Instalação ZIP
RUN apt install -y zip unzip

# Remover lista APT
RUN rm -rf /var/lib/apt/lists/*