const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer')
const path = require('path')
const ownerRouter = require('./router/owner');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
const dbUrl = "mongodb+srv://new_user:TglSy1HfHYsUMMBO@cluster0.ixsdevh.mongodb.net/Car_Parking?retryWrites=true&w=majority";
const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(dbUrl, connectionParams)
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });


  //upload image

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/owner/upload')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+
      path.extname(file.originalname))
    }
  })
  
  const fileFilter = function(req, file, cb) {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  app.use(multer({ storage: storage, fileFilter: fileFilter }).single('photo'));

// Use the owner router
app.use('/owner', ownerRouter);

const Port = 5000;
app.listen(Port, () => {
  console.log(`Server started on port ${Port}`);
});

