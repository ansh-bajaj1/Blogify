# Blogify - A Blogging Application

**Blogify** is a dynamic blogging platform built using **Node.js, Express, MongoDB, and EJS**. It allows users to create accounts, log in, write blogs with cover images, and interact through comments. Visitors can view all blogs and comments, while only signed-in users can add new blogs or comments.

---

## Features

### **Authentication**
- **Sign Up:** Create a new account with email, password, and profile details.
- **Sign In:** Secure login with cookies and JWT.
- **Route Protection:** Only logged-in users can add blogs or comments.

### **Blog Management**
- Add blogs with a **cover image**, title, and content.
- View all blogs on the **home page** with:
  - Cover image
  - Author name and profile picture
  - Blog title and content preview
- Each blog has a dedicated page with detailed content.

### **Comments**
- **View Comments:** Anyone can see comments on blogs.
- **Add Comments:** Only signed-in users can add comments.
- Displays commenter’s **name** and **profile image**.

### **User-Friendly UI**
- Clean and responsive design using **EJS templates** and **Bootstrap**.
- Blog content formatting is preserved using `<pre>` tags.

---

## Pages
- **Home Page:** Displays all blogs with cover images and authors.
- **Blog Page:** Full blog details and comments section.
- **Sign In / Sign Up Pages:** For user authentication.
- **Add Blog Page:** Add new blogs with image upload.

---

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Frontend:** EJS, Bootstrap
- **Authentication:** JWT, Cookie-based
- **Image Upload:** Multer
- **Deployment:** Railway (Backend + MongoDB)

---

## Installation
```bash
# Clone this repository
git clone https://github.com/ansh-bajaj1/Blogify.git

# Navigate into the project folder
cd Blogify

# Install dependencies
npm install

# Create a .env file and add the following:
PORT=8000
MONGO_URL=your_mongo_connection_string
JWT_SECRET=your_secret_key

# Start the server
npm start
