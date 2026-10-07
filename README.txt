AGRIGUARD ROVER LANDING PAGE — XAMPP SETUP

1. Extract the AgriGuard folder.
2. Copy the entire AgriGuard folder into:
   C:\xampp\htdocs\
3. Open the XAMPP Control Panel and start Apache.
   (MySQL is not required for this static landing page.)
4. Open this address in your browser:
   http://localhost/AgriGuard/

CUSTOMIZE THE SITE
- Contact email: In index.php, search for "your-email@example.com" and replace it.
  Also replace the projectEmail value in script.js with the same real email address.
- Demo video: Put your MP4 file in the assets folder and name it:
  agriguard-demo.mp4
- Colors and layout: Edit style.css.
- Page text: Edit index.php.

NOTES
- The contact form currently uses mailto: and opens the visitor's configured email app.
  It does not store messages in a database or send messages through a server.
- The landing page does not require a database.
- The rover graphic is CSS-drawn, so no separate image is required.
- Google Fonts are loaded online; the page still works offline using fallback fonts.
