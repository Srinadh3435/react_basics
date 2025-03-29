# Namaste-React

## version_1
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

## version_2
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