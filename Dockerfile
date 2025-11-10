# Multi-stage build for efficiency
FROM nginx:alpine AS production

# Copy application files
COPY index.html /usr/share/nginx/html/
COPY tests /tests

# Add metadata
LABEL maintainer="Jonathan Juining"
LABEL description="CI/CD Pipeline Demo Application"
LABEL version="1.0.0"

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Run nginx
CMD ["nginx", "-g", "daemon off;"]