# HTML
It is a markup language and one uses tags to structure the layout of a page. 

    <tagname>Content goes here...</tagname>
    
## Sublime Text 

Launch Sublime Text.

## Basic Structure

Copy the code below to a new file:

    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=”UTF-8”>
    <title>Page Title</title>
    </head>
    <body>
    <header>
    <div>
    <h1>Hello, World!</h1>
    <p>Page Content</p> 
    </div>
    </header>
    </body>
    </html>

Now, save your work and click with the right button - option: "Open in browser".
1. `<!DOCTYPE html>` defines that this document is an HTML 5 document.
2. `<html>` is the root element of an HTML page.
3. `<head>` contains meta information about the HTML page.
4. `<title>` specifies a title, shown in the browser's title bar or in the page's tab.
5. `<body>` is a container for all the visible contents.
6. Attention: there are a header and a head. 

## Creating a form

1. Add this code below the line `</header>`:
`<h2>Using form:</h2>`
	
    

            <div><div>
        	<input type="text" name="name" placeholder="Your name" required>
        	</div>
        	<div>
        	<input type="email" name="email" placeholder="Your e-mail">
        	</div>
        	<div>
        	<textarea name="description" cols="30" rows="10" placeholder="Write your message"></textarea>
        	</div>
        	<div>
        	<label for="title">To use options in your form:</label>
        	<input type="radio" name="option"> Yes
        	<input type="radio" name="option"> No 
        	</div>
        	<div>
        	<label for="title">To use checkboxes:</label>
        	<input type="checkbox" name="checkbox">
        	<input type="number" placeholder="Answer" min="0" max="10">
        	</div>
        	<div>
        	<label for="title">Date</label>
        	<input type="date" name="date">
        	</div>
        	<a href="http://google.com/">Using links</a>
        	<button type="submit">Send message</button>
        	</div>

2. "div" and "section" create containers for the page's content. Later, it will make easier to define styles to these parts.
3. [Here](https://www.w3schools.com/html/html_form_input_types.asp) you can see all different types of inputs and how to use them.
4. Field validation: by defining an input type, you can force the user to inform certain type of information and even make the filling required.

## Creating lists

1. Add the following code below the last `</div>`:

        
        <footer>
        <div>
            <p><strong>Using list: </strong></p>
            <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        </div>    
        </footer>
3. ul is used to create unordered lists. Try to change it for **ol** .

## Media tags

1. Playing a YouTube video: 

        
        <iframe 
        width="420"  height="315"  
        src="https://www.youtube.com/embed/tgbNymZ7vqY">  
        </iframe>
2. The `src` attribute point to the video URL.
3. The `width` and `height` attributes to specify the dimension of the player.
4.  Download an image and create a tag for it: 
 `<img src="<IMAGE.jpg>"  alt="This is a car"  width="500"  height="600">`

