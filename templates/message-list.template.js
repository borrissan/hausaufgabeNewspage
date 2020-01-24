const template = (messages) => `
<html>
    <head>
    <link rel="stylesheet" href="main.css">   
</head>
<body>
<h1>Messages</h1>
<ul class="message-list">
    ${ messages.map(message => `
    <li class="message-list-item">
        <div class="message-list-item__author">
            ${message.author}
        </div>
         <div class="message-list-item__text">
            ${message.text}
        </div>    
    </li>
    `).join('')}
</ul>
<form action="/" method="post">
   <div class="form-row">
       <label for="a">Author</label>
       <input type="text" name="author" id="a">
   </div>
    <div class="form-row">
        <label for="b">Text</label>
        <textarea name="text" id="b" rows="4"></textarea>
    </div>
    <div class="form-controls">
        <button type="submit">Senden</button>
    </div>
</form>
</body>
</html>
`;

module.exports = template;