# Namaste-React

## Day-1 version-1
-- rendered Namaste HTML using h1 tag
-- rendered Namaste JavaScript using script tag
-- React CDN links attached into the file
-- rendered Namaste React JS using simple React component creation
-- moved the main react script into App.js for cleaner structure
-- created index.css and provided heading color to the element using react component.
-- FAQ's 
    - What are CDN links?
    - What is crossorigin in CDN links and why is it used?
    - Where should script tag which includes CDN links be placed? 
    - Can we use any CDN links (development vs production)? 
    - what is render() method in React?

## Day-1 version-2
-- updated the react component as a nested element in parent div-> child div-> h1
-- then again updated it as below using array of items in third value of creating component
--------
- parent
    - child 1
        - h1
        - h2
    - child 2
        - h1
        - h2
--------
- Introduction of JSX due to pain in above structure
-- FAQ's 
- New Error: react.development.js:199 Warning: Each child in a list should have a unique "key" prop.
- Difference between React Library vs Framework

Answers for FAQ's:

1. What are CDN links?
CDN (Content Delivery Network) links are URLs that point to files hosted on a distributed network of servers. These CDNs help to grab the data from the nearest servers. 

2. What is crossorigin in CDN links and why is it used?
The crossorigin attribute in a CDN link is used to control how browsers handle cross-origin requests when loading external resources like JavaScript and CSS. It is mainly used for security and performance purposes, especially when fetching resources from a different origin (domain, protocol, or port).

3. Why is it used?

- Security: Prevents unauthorized access to external resources.
- Performance: Helps with caching mechanisms, such as Subresource Integrity (SRI), which ensures the integrity of the file.
- CORS Handling: Ensures correct cross-origin request behavior.

4. Where should script tag which includes CDN links be placed? 
The CDN links give the datato that file, so the data must be loaded before the main operation. So the script tag must be included before the required operation of it. In this scenario before using React or React DOM we need todeclare it. So it will be placed in header which is most safest or aty the top of body tag.

5. Can we use any CDN links (development vs production)? 
Yes, but you should use the appropriate CDN links depending on whether you are in a development or production environment.

Development CDN links are used mainly for debugging and testing.
It also has uses include extra warnings and logs for easy better debugging

Production CDN links are used mainly for hosting. It also has:
- Optimized for performance (minified and compressed files)
- Removes debugging logs and warnings.
- Reduces file size for faster loading times.
- Mainly for live websites to improve speed and security.

6. What is render() method in React?
The render() method is used in React to return the JSX (UI elements) that should be displayed on the screen.
- It is generally used in Class based components.
- It must return JSX or null.
- It re-renders when state or props change.

7. Error: react.development.js:199 Warning: Each child in a list should have a unique "key" prop.
This error is due to lack of key for the list. The list holds the multiple react components which needs to be rendered. But, typically any list in React must have key value. 
When mapping over an array to render a list of components, React needs a unique key for each item. This helps React efficiently update the DOM without re-rendering everything unnecessarily.

8. Difference between Library vs Frameworkm in the context of React
In general library is a piece of code part of a main programming language, which can use any other libraries for additional features other than present in it. But coming to Framework it has all the features which comes with a complete environment setup and can be used inside it.

1️⃣ Library (React)
A library is a collection of reusable code that helps developers perform specific tasks without dictating the overall structure of an application. React is a library because:
✅ It focuses only on building UI components.
✅ It allows developers to choose additional tools like routing (react-router), state management (Redux), etc.
✅ Developers have full control over how they structure their application.

🔹 Example: React is just the UI layer, and you can integrate it with other libraries like Redux or MobX for state management.

2️⃣ Framework (Angular, Next.js, etc.)
A framework provides a complete structure for building applications, including:
✅ Built-in tools for routing, state management, and API handling.
✅ A predefined way to organize code (opinionated structure).
✅ Developers must follow the framework’s rules and conventions.

🔹 Example: Next.js (a React framework) provides server-side rendering (SSR), file-based routing, and API handling—all built-in.

## Day-2 version-1
1.  What is npm?
A.    
    npm behaves as a package manager for node modules. 
    It acts as a repository for many node modules

2. How to configure npm in the project?
A.
    Using command npm init
    It gives few prompts to answer like 
    - package manager
    - version
    - description (can give anything)
    - entry point (default set as App.js)
    - test command - jest (to be provided)
    - git repository (to be confirmed by us for git origin)
    - keywords (not mandatory)
    - author name
    - license: ISC (no change required, default)
    - few other details like url and homepage

    -- Finally, it gives a package.json file with this configuration details.

3. What is this package.json and why is it required?
A.
    packages are nothing but dependencies. So this json file tracks the version details and other project details here.

4. Name the most important dependeency for using React.
A.  Bundler is the most important dependency.
    Most common and highly used Bundlers are Webpack, Parcel and Vite.
    Any bundler can be installed using npm, it can be installed by a common command

    npm install -D parcel # The required bundler can be replaced with Parcel
    Here we are using Parcel.

Note: '-D' is the type of dependency being installed.
There are 2 types of dependencies while using:
i. Dev dependency(gives more checks and error verification)
ii. Normal dependency (mostly used for production)
---------------------------------
Now when we install parcel in our application we got super powers of Parcel and nodemodules folder along with packagelock.json is formed in our project.
---------------------------------
5. What is package-lock.json and how different is it from normal package.json file.
A.  The package.json stores the approximate version of the dependency without exact value being used.

    The package-lock.json stores the exact version value of the dependency without any carat or tilde infront of the version such as present in package.json.

6. Whhat is the carat(^) or tilde(~) present infront of version value in package.json?
A.
    ^ => If carat is present before the version value of then the dependency will automatically upgrade the dependency if it has any minor update.

    ~ => If tilde is present before the version value of then the dependency will automatically upgrade the dependency even if it has any najor update.

7. Why we have huge node_modules?
A.  We have huge node_modules due to transitive dependencies. 
    Ex: Now we installed parcel but parcel in built has few other dependencies to work, and similarly those parcel dependencies will have few other dependencies. This is transitive dependency and main reason for huge node modules.

8. Should we push all the node modules into our git along with package and package-lock.json files?
A.  No, we can generate the node modules files with the package and package-lock files. But the later two are very important.
Note: We can keep the node modules in .gitignore file in ourproject to exempt them from pushing those files.
------------------------------------------
Now, we will ignite the application with bundler, react library and other requirements

- Run the command,  npx Parcel index.html
The above command installs Parcel  which runs on local server and hosts our website over it.
- It also does many things for our application

9. What is difference between npm and npx?
A.  npm is like installing the required packages globally or locally and then using it. But, npx on other side directly uses the package without installing it locally.
------------------------------------------
Note: Using CDN links for using React is not a preferable way, so we can use React by installing it locally and importing it.

For installng the React library, give the below command.
    npm install react
    npm install react-dom
Now we have react installed but we need to import the react after removing the CDN links.
    import React from 'react';
    import ReactDOM from 'react-dom/client';
But still this gives us an error as 'Browser Scripts cannot have imports'
This is due to App.js being used as an script in 'index.html'. So now make the type as 'module' which can remove this error.

Uses of Parcel:
-   DevBuild
-   Local server 
-   HMR (Hot module replacement)
-   File watching algorithm (this is used to track all the changes made in files to do HMR on the server)
-   Caching (it caches for faster build, '.parcel-cache' is created for the first build and caches on each build to give faster builds)
-   Image optimization
-   Minnification
-   Bundling
-   Consistent hashing
-   Differntial bundling (supports for older version of browsers)
-   chances to host on HTTPs
-   Beautiful Diagnostics (like giving clear errors for error handling)

To make the code production ready we need to get prod build. It is generated using the below command

npx Parcel build index.html

This gives only 1 file each for HTML, CSS and JS and completely minnified with code. This bundling of files along with minnification is done by Parcel.
