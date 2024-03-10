<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Website</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <header>
    <h1>Blog Website</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/new">New Post</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <%- body %>
  </main>
  
  <footer>
    <p>&copy; 2024 Blog Website</p>
  </footer>
</body>
</html>
