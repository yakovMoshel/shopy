# Hey!

I offered Yaakov to go over the code and add some comments - maybe you will find them useful and improve the code!

Some general comments

- Every problem you encounter think of how to solve it in the most simple way first. There is no need for crazy abstractions or crazy file structures that make you go from file to file to file until you get any where. Think simple!
- Use best practices that are recommended by the tool creators, in your case Next.js. They have a ton of information and docs about how to use it and some best practices. I did the [tutorial](https://nextjs.org/learn/dashboard-app) in their docs and I strongly recommend it
- Every single piece of code or file you are not using - remove it, even if you will in a day. it will keep your project much cleaner
- Keep track of tasks somewhere, it can be in a .md file like this one or in a trello of some sort
- Never ever push a `.env` file to github. use a `.env.example` file to list the env vars with mock values for anyone who will need it
- Don't commit `console.log`s, it pollutes the work environment
- I don't see a reason to hold `(test)` routes if they are for trying things out, try stuff out where it should live
- Use clear names for anything - vars, functions, files... so BL for a dir name is not so good, and functions as well - almost every file has functions
- Write semantic HTML. Use `<article>`, `<figure>`, `<header>`, `<main>`, `<footer>` and more. This will create the correct HTML structure improving accessability, SEO and making it easier to apply CSS.
- You have an api layer (app/api), controllers, services, actions, functions... That is a mess. Lets break it down:
  &nbsp;&nbsp;&nbsp;&nbsp;1. Your api layer (which I call `controller`) is responsible for catching a request to a specific route, parse the request, call the operation needed to be done and return a response. Example: the `/category` route should extract params from the request, call a service that gets a category, sends the response back may it be a success or an error.

  &nbsp;&nbsp;&nbsp;&nbsp;2. The next layer (which I call `service` layer) exports specific operations that can be used by the the api layer. Example: `getAllCategories()` is a function with a clear purpose that gets categories from the DB and returns a success response or an error response to the api layer.

  &nbsp;&nbsp;&nbsp;&nbsp;3. Lastly the `lib` or `data` layer contains functions that interact directly with your DB.

  This explanation introduces multiple abstraction layers which are not mandatory at all! you can make your project work perfectly with `api` and `lib` and thats it - your choice.

- Fetch data as close as possible to where you use it and fetch just what you need, nothing more. Example: if there is a `ProductsList` component - fetch products there and not in the component wrapping it

Thats it for now - if you have any more questions or need any clarification - talk to me!
