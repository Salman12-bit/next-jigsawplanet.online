// lib/multerMiddleware.js

import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure the uploads directory exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Set the destination for file uploads
  },
  filename: function (req, file, cb) {
    // Set the file name format (e.g., timestamp + original name)
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter for validation
const fileFilter = (req, file, cb) => {
  // Define allowed file types
  const filetypes = /jpeg|jpg|png|gif|pdf/; // Adjust this list as needed
  const mimetype = filetypes.test(file.mimetype);
  
  if (mimetype) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("File type not allowed"), false); // Reject the file
  }
};

// Configure the upload settings
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Set file size limit (5 MB)
  fileFilter,
});

// Middleware function to handle file uploads
export const multerMiddleware = upload.single("file");

// Wrapper function to integrate Multer with Next.js API routes
export default function withMulter(handler) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      multerMiddleware(req, res, (err) => {
        if (err) return reject(err); // Handle error
        resolve(handler(req, res)); // Proceed with the request
      });
    });
}
