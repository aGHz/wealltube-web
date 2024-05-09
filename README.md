# WeAllTube

**_WeAllTube_** is a video hosting and streaming service.
This repository contains a quick React demo of the web app's front page.
You can see the demo at https://aghz.github.io/wealltube-web/.

## Codebase

The codebase is a simple React app managed with [Vite](https://vitejs.dev/).
I chose Vite over Next.js because I wanted a pure front-end bundle that I could
deploy to GitHub pages. It's also optimized for a quick developer experience out
of the box which was useful for this hackathon-style project.

For the demo, the app is making calls to [Pexels](https://www.pexels.com/search/videos/nature/?orientation=landscape),
a site for royalty-free images and videos with a good API. Ideally I would have
liked to abstract away the API so that it can be replaced with any implementation
using React context providers.

I used Redux for managing the API call results. It's too heavy for this demo,
but the site would concievably grow to require additional state and Redux would
be perfect for that. I decided to try [Redux Toolkit](https://redux-toolkit.js.org/)
but I had no prior experience with it and learning it on the fly set me back a bit.
I would've liked to spend more time digging into RTK Query and to use entity
adapters, they seem like solid tools for managing API calls. I was running
low on time though, so I limited myself to async thunks which are modelled on
redux-thunk, with which I was already familiar.

I used TailwindCSS for managing style in React. It's a controversial option,
and it was also my first attempt at using it, but it comes highly
recommended by well-established teams. I would have liked to use it to its
full potential by making the app responsive and add a dark mode but styling
wasn't high enough on the priority list. It can also get cumbersome to use
without a helper lib, which I didn't have time to investigate.

Other things I wanted to add but had to skip due to time constraints are
* pagination with infinite scroll, turns out it's a bit tricky via Redux
  ([some approaches in this discussion](https://github.com/reduxjs/redux-toolkit/discussions/1163))
* routing with a simple video page
* a simple video player that would record playback position in the Redux state.
* at least some minimal tests

## System architecture

`TODO`
