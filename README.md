# Voodle

Voodle is a combination of vector and doodle and is a web application lets directly mark up SVG files, then securely share them with other users.

## Specification Deliverables

`Startup Specification`

### Elevator Pitch

For engineering design firms marking up Vector images can be difficult. Voodle lets you physically mark up the SVG file then securely share or transfer the newly modified SVG file to other users. Other applications require the SVG CAD file of the drawing to be converted into a pdf, then the markup notes remain in the PDF. Voodle will allow the markup notes to remain as elements of the SVG file itself. These elements will have all the advantages of being part of the SVG file itself and then securely shared to respective parties. With engineering firms keeping files secure is important to prevent theft of intellectual property.

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

I will use the following technologies to implement my Voodle application.

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