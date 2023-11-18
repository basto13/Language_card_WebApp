FROM node:lts AS development

ENV CI=true
ENV PORT=8000

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci
COPY . /code
RUN npm run build

EXPOSE 8000

CMD [ "npm", "start" ]
