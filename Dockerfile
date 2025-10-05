# =============================================================================
# Dockerfile for Main Website (academflow.com) (React 19 + React Router v7 SSR)
# =============================================================================

# Stage 1: Build the SSR app
FROM node:20-alpine AS build

RUN apk add --no-cache wget

WORKDIR /app

# Install dependencies based on lockfile
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Build both client and server bundles
# (adjust if you use a framework like Remix or custom build scripts)
RUN npm run build

# Stage 2: Production runtime
FROM node:20-alpine AS runner
WORKDIR /app

# Add non-root user
RUN adduser -u 10001 -D appuser

# Copy only necessary files
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy build output and server code from build stage
COPY --from=build /app/build ./build
COPY --from=build /app/public ./public

# Fix ownership
RUN chown -R appuser:appuser /app

# Switch to non-root
USER appuser

# Expose the port your SSR app listens on
EXPOSE 2008

# Run the SSR server
CMD ["npm", "run", "start"]