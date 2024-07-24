import { jsx } from "@app/html-jsx";

app.html("/", async (ctx) => {
  return (
    <html>
      <head>
        <title>Fun Box</title>
      </head>
      <body>
        <h1>Main branch release 3</h1>
        <p>{Date.now()}</p>
      </body>
    </html>
  );
});
