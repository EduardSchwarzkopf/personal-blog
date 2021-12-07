---
title: "How to setup NodeJs with Plesk"
excerpt: "Learn how to install your NextJs on Plesk here."
date: "2021-12-05"
---

I wrote my blog in NextJs, so when it was ready to be put online, some questions came up first, such as where to host the project and how to get the app running.

The choices were Vercel or my own server. I first tried to install it on my server, but it didn't work right away. For this reason, I then tried hosting at Vercel. The setup here was super easy and after setting the DNS correctly, my blog was online under the correct domain after a short time.
Unfortunately, as I am, I couldn't let it go though and absolutely had to get the app running on my server as well. I'm just stubborn. In the end I also have complete data control, but that's also just a good excuse for all the time I spent on the successful setup. You're probably here for the same reason, so I'm going to try to make this easier for you with this article. Let's get started.

## Getting started

I only recommend this path if you absolutely want to host your NextJs project on your server. Otherwise, I clearly recommend you to use a hosting at Vercel. It is specially designed for NextJs projects and free for small personal projects.

## Plesk Setup

I assume that your project is running on its own domain and not a subfolder. If you haven't already set up a domain/subdomain for your project, then you should do that first. Make sure that the domain is accessible from the outside.

### Preparation

First make sure you have NodeJs installed in plesk. You can read instructions on how to do this on the Plesk blog under the Prerequisites section: <PageLink url="https://www.plesk.com/blog/product-technology/node-js-plesk-onyx/" />

### Git

The next step is to set up the Git repo. Click on the Git icon under the domain and add your Git repository. Add your link to your repo and click OK.

Note: If your repository is private, you still need to use the SSH variant. Here the link usually starts with `git@GitHub.com:...`.
Then copy the SSH public key from Plesk and add it to your profile: <PageLink url="https://GitHub.com/settings/keys" />

- New key
- Enter title
- Paste key from Plesk under Key
- Add SSH Key

After saving, we need to add deploy actions so that your app will be updated when pushed to your "main" branch.
To do this, go to the Git settings and check "Enable additional deploy actions".
In the field for actions put the following commands:

```
/opt/plesk/node/17/bin/npm ci --scripts-prepend-node-path
/opt/plesk/node/17/bin/npm run build --scripts-prepend-node-path
touch tmp/restart.txt
```

You can change the node version by replacing 17 with the version you need. You can see which versions are installed in Plesk under:

1. Extensions
2. My Extensions tab
3. Node.js

Now pull your repository from GitHub to your server.

### NodeJs settings

Go to the root folder of your NextJs app and create the file `next-start.js` with the following content:

```
#!/usr/bin/env node
"use strict";
var log = _interopRequireWildcard(require("./node_modules/next/dist/build/output/log"));
var _indexJs = _interopRequireDefault(require("./node_modules/next/dist/compiled/arg/index.js"));
var _constants = require("./node_modules/next/dist/lib/constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                    };
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
[
    'react',
    'react-dom'
].forEach((dependency)=>{
    try {
        // When 'npm link' is used it checks the clone location. Not the project.
        require.resolve(dependency);
    } catch (err) {
        console.warn(`The module '${dependency}' was not found. Next.js requires that you include it in 'dependencies' of your 'package.json'. To add it, run 'npm install ${dependency}'`);
    }
});
const defaultCommand = 'start';
const commands = {
    build: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-build').nextBuild)
    ,
    start: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-start').nextStart)
    ,
    export: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-export').nextExport)
    ,
    dev: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-dev').nextDev)
    ,
    lint: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-lint').nextLint)
    ,
    telemetry: ()=>Promise.resolve(require('./node_modules/next/dist/cli/next-telemetry').nextTelemetry)
};
const args = (0, _indexJs).default({
    // Types
    '--version': Boolean,
    '--help': Boolean,
    '--inspect': Boolean,
    // Aliases
    '-v': '--version',
    '-h': '--help'
}, {
    permissive: true
});
// Version is inlined into the file using taskr build pipeline
if (args['--version']) {
    console.log(`Next.js v${"12.0.3"}`);
    process.exit(0);
}
// Check if we are running `next <subcommand>` or `next`
const foundCommand = Boolean(commands[args._[0]]);
// Makes sure the `next --help` case is covered
// This help message is only showed for `next --help`
// `next <subcommand> --help` falls through to be handled later
if (!foundCommand && args['--help']) {
    console.log(`
    Usage
      $ next <command>

    Available commands
      ${Object.keys(commands).join(', ')}

    Options
      --version, -v   Version number
      --help, -h      Displays this message

    For more information run a command with the --help flag
      $ next build --help
  `);
    process.exit(0);
}
const command = foundCommand ? args._[0] : defaultCommand;
const forwardedArgs = foundCommand ? args._.slice(1) : args._;
if (args['--inspect']) throw new Error(`--inspect flag is deprecated. Use env variable NODE_OPTIONS instead: NODE_OPTIONS='--inspect' next ${command}`);
// Make sure the `next <subcommand> --help` case is covered
if (args['--help']) {
    forwardedArgs.push('--help');
}
const defaultEnv = command === 'dev' ? 'development' : 'production';
const standardEnv = [
    'production',
    'development',
    'test'
];
if (process.env.NODE_ENV && !standardEnv.includes(process.env.NODE_ENV)) {
    log.warn(_constants.NON_STANDARD_NODE_ENV);
}
process.env.NODE_ENV = process.env.NODE_ENV || defaultEnv;
// Make sure commands gracefully respect termination signals (e.g. from Docker)
process.on('SIGTERM', ()=>process.exit(0)
);
process.on('SIGINT', ()=>process.exit(0)
);
commands[command]().then((exec)=>exec(forwardedArgs)
).then(()=>{
    if (command === 'build') {
        // ensure process exits after build completes so open handles/connections
        // don't cause process to hang
        process.exit(0);
    }
});
if (command === 'dev') {
    const { CONFIG_FILES  } = require('./node_modules/next/dist/shared/lib/constants');
    const { watchFile  } = require('fs');
    for (const CONFIG_FILE of CONFIG_FILES){
        watchFile(`${process.cwd()}/${CONFIG_FILE}`, (cur, prev)=>{
            if (cur.size > 0 || prev.size > 0) {
                console.log(`\n> Found a change in ${CONFIG_FILE}. Restart the server to see the changes in effect.`);
            }
        });
    }
}

//# sourceMappingURL=next.map
```

We have to have our own startup file, because in Plesk you can't specify the `defaultCommand` and otherwise the default `dev` is taken. Vincent Van Uffelen wrote <PageLink url="https://nzembla.medium.com/hosting-next-js-on-plesk-passenger-in-2021-c60585888c72">an article</PageLink> about this very topic, which helped me a lot.

Now open the Node.js settings in your domain. Make sure that your version is the same as the one you set in the **additional deploy actions**.

Under **Application Startup File** select the **next-start.js** you just created.

If everything is set correctly, you should now be able to click the NPM install button to install all dependencies.

## GitHub

Now you want to set up a webhook on GitHub to publish pushes to the **main** branch directly. You can find the link under

1. Domain
2. Git
3. Repository Settings
4. Webhook URL.

Now go to your repository on GitHub. **Settings** Tab > **Webhooks**. Add the button **Add Webhook**. Paste the copied link under **Payload URL**.
Content-Type is `application/json`. Leave the rest as it is.

## Conlcusion

If you have followed all the steps, you should now be hosting your own NextJs app.

But as I've written in the beginning, I recommend this way only if you absolutely want to host your app yourself. Vercel is otherwise one of the best alternatives. <PageLink url="https://NextJs.org/docs/deployment">In the docs</PageLink> you can find detailed instructions on how to host your app, also with auto-deployment and completely free.

If you have any problems or I missed an important step, feel free to contact me <PageLink url="https://twitter.com/EduSchwarzkopf">via Twitter</PageLink>.
