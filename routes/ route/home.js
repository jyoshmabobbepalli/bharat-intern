<% layout('layout') %>

<section>
  <h2>Recent Posts</h2>
  <% posts.forEach(post => { %>
    <article>
      <h3><a href="/post/<%= post._id %>"><%= post.title %></a></h3>
      <p><%= post.createdAt.toDateString() %></p>
    </article>
  <% }); %>
</section>
