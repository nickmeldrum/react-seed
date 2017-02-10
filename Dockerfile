FROM node:7.1.0

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/react-seed/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/react-seed

RUN npm install
RUN npm cache clean

CMD ["npm", "start"]
