FROM node:16-bullseye-slim

# Install utilities
RUN apt-get update --fix-missing && apt-get -y upgrade && apt-get install -y git wget gnupg vim&& apt-get clean

# Install latest chrome stable package.
#RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
#RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'

RUN apt-get update \
    #&& apt-get install -y google-chrome-stable --no-install-recommends \
    && apt-get install -y chromium \
    #&& apt-get install -y chromium-sandbox \
    && apt-get clean

# Install Lighthouse CI
RUN npm install -g @lhci/cli@0.12.0
RUN npm install -g lighthouse
RUN npm install -g lighthouse-batch

# Install puppeteer
#RUN npm install -g puppeteer

#RUN cd /home/lhci/reports && npm link puppeteer

# Setup a user to avoid doing everything as root
RUN groupadd --system lhci && \
  useradd --system --create-home --gid lhci lhci && \
  mkdir --parents /home/lhci/lighthouse-run 

COPY ./lighthouse-run/ /home/lhci/lighthouse-run/
RUN chown --recursive lhci:lhci /home/lhci

USER lhci
WORKDIR /home/lhci/lighthouse-run


CMD [ "lhci", "--help" ]
