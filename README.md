# summary
Simple Package to summarizes your text.

This package is actually base/forked from [jbrooksuk/node-summary](https://github.com/jbrooksuk/node-summary/) and [shlomibabluki/5473521](https://gist.github.com/shlomibabluki/5473521), **but with no browser support or babel thingy.** and some slightly changes _(not really)_.

Thank you [@jbrooksuk](https://github.com/jbrooksuk) for your awesome package and [@shlomibabluki](https://github.com/shlomibabluki) for the gist.

# Why?
One of my `repo` somehow got strange error when i using original `node-summary`, so i decide to fork the repository and make changes.

# Example
Example content from [WikiHow Article](https://www.wikihow.com/Walk)

```js
    const Summary = require('summary')
    
    let result = Summary('Improving Your Walking Gait', content)
    console.log(result)
```

```
$ node .

Improving Your Walking Gait

After you cool down, stretch your muscles gently
Walk with your head up, while looking forward.
When walking, you should step forward with your foot.
This usually means that your hip flexors and hamstrings are too tight.
This will feel strange at first, but eventually your knees will adapt 
How can you tell if you’re walking fast enough?
Take the stairs when you usually take the elevator.
```

# Why it's not working?
1. Your content need at least 2 paragraph, splitted by `\n\n`. So, add those for every paragraph, maybe?

2. Open new issue.

<sub><sub><sub>I have C grade in English, please help me and i am sorry.</sub></sub></sub>