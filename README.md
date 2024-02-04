
# Livestream Video Overlay App

This Full Stack application allows users to view a livestream video from an RTSP URL with additional features such as custom overlays. Users can create, read, update, and delete custom overlay settings through CRUD operations.

# login signup 
![Main Page](image/rtsp_inbox.png)
## Tech Stack

- **Frontend:** React
- **Backend:** Express (Flask Preferred)
- **Database:** MongoDB
- **Video Streaming:** RTSP compatible
- **Authentication:** Login/Signup with OTP via email jwt token

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Aman-s12345/RSTP_intern.git 
  
Install Dependencies:

     ```bash
     cd server
     npm i express
     cd ..
     npm i
     npm run dev
Install MongoDB locally or use a cloud-based MongoDB service.
Use Cloudnary service.
Configure the MongoDB connection in the backend.
Configure Email Service:
# signup page
 ![Main Page](image/rtsp_signup_page.png)
# login page
 ![Main Page](image/rtsp_login_page.png)
# add text as well as logo
 ![Main Page](image/rtsp_props.png)
# upload logo
 ![Main Page](image/rtsp_upload.png)
# logout model
 ![Main Page](image/rtsp_logout.png)
 

 
Run the Application:

    ```bash
    npm run dev
# Run the backend server
cd server
npm run dev

# Run the frontend
cd ..
npm run dev

# Access the App:
Open your browser and navigate to http://localhost:3000

# API Documentation
Authentication
Signup:

# POST /api/v1/signup


Login:
# POST /api/v1/login

Logo API
Create Logo:

# POST /api/v1/createLogo

Get Logo:

# POST /api/v1/getLogo

Delete Logo:
# DELETE /api/v1/deletelogo

Text API
# same of create Text also
Click on the play button to start watching the livestream.
Use the basic controls for play, pause, and volume adjustment.
Overlay Management
Navigate to the overlay settings section.
Create, read, update, or delete custom overlays as needed.
Customize overlay settings including position, size, and content.
