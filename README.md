# codecraft.io

## Demo

The demo can be accessed here: [http://166.48.20.39/](http://166.48.20.39/).

In case that link does not work, we also have a (slower but hopefully working) backup fallback server: [http://jeremymark.ca:9123/](http://jeremymark.ca:9123/).

## File Structure

- [ai](./ai/) - contains demo code for interacting with the Wolfram Alpha Full Results API
- [front_end](./front_end/) - contains our front-end code which is a Vite App using Tailwind CSS.
  - [front_end/Dockerfile](./front_end/Dockerfile) - Dockerfile for the front-end, which is used to build the front-end production code
  - [front_end/src/](./front_end/src/) - contains the source code for the front-end
  - [front_end/src/tools/](./front_end/src/tools/) - contains the tools for starting up the Docker service
  - [front_end/src/features/chatbot/ChatBot.jsx](./front_end/src/features/chatbot/ChatBot.jsx) - the Wolfram Alpha chatbot componnetn
  - [front_end/src/features/coding/Coding.jsx](./front_end/src/features/coding/Coding.jsx) - the coding component, where people can enter the code and submit it to our code builder service
- [server](./server/) - contains our API Server which acts both as a code builder (`.py`, `.c`, and `.js` files) and as a proxy server for the Wolfram Alpha API.
  - [server/Dockerfile](./server/Dockerfile) - Dockerfile for the server which is used to build the server production code
  - [server/api.py](./server/api.py) - the main API server code, entry point for the server.
  - [server/tools/](./server/tools/) - contains the tools for starting up the Docker service

