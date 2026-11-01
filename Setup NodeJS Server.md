##Setup NodeJS Server.md

    1. create a "Server/Backend" folder.
    2. pnpm init : it will make a package.json file
    3. pnpm install express nodemon cors mongoose
    4. in the package.json, add these lines

    	"main": "server.js",
    	  "scripts": {
    	    "test": "echo \"Error: no test specified\" && exit 1",
    	    "start": "node server",
    	    "dev": "nodemon server"
    	  },
    5. create a server.js file inside BAckend/Server folder with the following content

    	const express = require("express");
    	const cors = require("cors")

    	const app = express();

    	app.use(cors());

    	app.get("/api", (req, res) => {
    		res.json({"data": 1234});
    	})

    	app.listen(5000, ()=>{
    		console.log("Server started at 5000");
    	})

    6. pnpm run dev : to start the server.

## TypeScript server

Use this instead of the JavaScript file and scripts above when writing the server in TypeScript.

1. Install the runtime packages and TypeScript development tools:

       pnpm add express cors
       pnpm add -D nodemon ts-node typescript @types/node @types/express @types/cors

2. Create a `tsconfig.json` in the backend folder:

       {
         "compilerOptions": {
           "target": "ES2020",
           "module": "CommonJS",
           "moduleResolution": "Node",
           "strict": true,
           "esModuleInterop": true,
           "outDir": "dist"
         },
         "include": ["*.ts"]
       }

3. Use a `.ts` entry file such as `server.ts`. For example:

       import cors from "cors";
       import express, { Request, Response } from "express";

       const app = express();
       app.use(cors());

       app.get("/api", (_req: Request, res: Response) => {
         res.json({ data: 1234 });
       });

       app.listen(5000, () => {
         console.log("Server started at 5000");
       });

4. Add scripts to `package.json`:

       "scripts": {
         "dev": "nodemon --exec ts-node server.ts",
         "build": "tsc",
         "start": "node dist/server.js"
       }

5. Run `pnpm install`, then use `pnpm run dev` while developing. For production, run `pnpm run build` and then `pnpm start`.

## On the front end side in REACT

    inside useEffect hook, you can fetch the data

    useEffect(()=>{
    	fetch("http://localhost:5000/api").then((response) =>{
    		return response.json()
    	}).then((data)=>{
    		console.log(data);
    	})
    });

## MongoDB collection name

    Inside MongoDB, the collection name should start with small letter should also be plural.

## Using ENV VARS

    Here are three mistakes/gotchas that tripped me up.

    Ensure the .env files are in the root, not the src directory. The filename .env and/or .env.development will work when running locally.
    Restart the local web server for the variables to appear: npm run dev
    Prefix the variables with VITE_ (as already mentioned by Mahmoud and Wonkledge)

## VERCEL

    dont use the localhost on the front end side when deploying
    use the deployed server's url
    refer this: https://stackoverflow.com/questions/78243400/backend-and-frontend-work-seperately-fine-but-why-frontend-not-load-backend-dat
