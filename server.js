const express = require("express");

const mongoose = require("mongoose");

const blogRouter = require("./routes/blogs");

const app = express();

mongoose.connect("mongodb://localhost/3000", {
  useNewUrlParsers: true,
  useUnifiedTopology: true,
});

//set template engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

//route for the index
app.get("/", (request, response) => {
  const blogs = [
    {
      title: "The information we do not need",
      snippet:
        "You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly",
      author: "Somtea Codes",
      createdAt: new Date(),
      img: "placeholder.jpg",
    },
    {
      title: "The information we do not need2",
      snippet:
        "You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly",
      author: "Somtea Codes",
      createdAt: new Date(),
      img: "placeholder.jpg",
    },
    {
      title: "The information we do not need3",
      snippet:
        "You’ve probably heard of Lorem Ipsum before – it’s the most-used dummy text excerpt out there. People use it because it has a fairly",
      author: "Somtea Codes",
      createdAt: new Date(),
      img: "placeholder.jpg",
    },
  ];
  response.render("index", { blogs: blogs });
});

app.use(express.static("public"));
app.use("/blogs", blogRouter);

//listen port
app.listen(3000);
