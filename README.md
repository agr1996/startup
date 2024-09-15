# Voodle

Voodle is a combination of vector and doodle and is a web application lets directly mark up SVG files.

## Specification Deliverables

Required information for the `Startup Specification`

### Elevator Pitch

TODO Elevator pitch
for(description of person) That(describe a problem) (name of my product) does(describe function of product). unlike(name of a similar product) this tool(description of unique benefit)

For engineering design firms marking up Vector images is can be difficult. Voodle lets you physically mark up the SVG file  

### Design

TODO add Images and Text

### Key Features

- Secure login over HTTPS
- Secure sharing between users of markup vector drawings
- Preview of drawing
- Import of SVG for markup
- Export of SVG after markup
- Basic Markup Tools
    - Text
    - Lines
    - Arrows
    - Annotation Cloud

### Technologies

TODO required technologies

- **HTML** - Correct HTML structure for application. Three HTML pages. One for login, one for importing and marking up SVG files, one for finding and securely sharing and receiving SVG files post markup.
- **CSS** - Consistent Application styling across the different pages. Styling that can take advantage of different screen sizes with full functionality on mobile.
- **React** - Provides login, file import, markup, file share and export
- **Service** - Backend service with endpoint for: 
    - Login
    - SVG import
    - User file share
    - SVG export
- **DB/Login** - Store users and user identification number, for secure sharing of drawings. Register login and assign user identification number. 
- **WebSocket** - Broadcast to other user when a file has been securely with them.