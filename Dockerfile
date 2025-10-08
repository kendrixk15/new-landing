FROM public.ecr.aws/docker/library/node:20.11.0-bullseye-slim AS installer
WORKDIR /app
COPY package.json .
RUN yarn

FROM public.ecr.aws/docker/library/node:20.11.0-bullseye-slim AS builder
WORKDIR /app
COPY --from=installer /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM public.ecr.aws/docker/library/node:20.11.0-bullseye-slim AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
CMD ["yarn", "start"]


