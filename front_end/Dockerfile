FROM nginx:alpine

EXPOSE 80

WORKDIR /app
COPY . /app

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/

# Copy the Vite build files to the Nginx directory
COPY dist /usr/share/nginx/html