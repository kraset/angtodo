FROM nginx

# Remove old files...
RUN rm -rf /usr/share/nginx/html/*

# Copy our nginx config file...
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy latest built files
COPY ./dist/todo /usr/share/nginx/html

# We don't need this...
# EXPOSE 80 443
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
