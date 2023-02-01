const express = require("express"); // require our express module
const mongoose = require("mongoose"); //require our mongose module (used for ease with mongoDB)
const app = express();
const path = require("path"); // require built-in path module
const cookieParser = require("cookie-parser");
const sessions = require("express-session");

const student = require("./models/student"); // imporitng student as our collection in our database to read/write data to
const admin = require("./models/admin"); // imporitng admin as our collection in our database to read/write data to
const faculty = require("./models/faculty"); // imporitng faculty as our collection in our database to read/write data to
const profile = require("./models/profile"); // imporitng profile as our collection in our database to read/write data to
const course = require("./models/course"); // imporitng profile as our collection in our database to read/write data to
const subject = require("./models/subject"); // imporitng subject as our collection in our database to read/write data to
const attendance = require("./models/attendance");
const async = require("hbs/lib/async");
const result = require("./models/results");

const PORT = process.env.PORT || 4000;

const static_path = path.join(__dirname, "../public"); // path to all static files
const templates_path = path.join(__dirname, "../templates/views"); // path to views folder

app.use(express.json()); // built-in middleware function in Express. It parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays
const oneDay = 1000 * 60 * 60 * 24;
app.use(cookieParser());
app.use(
  sessions({
    secret: "do_not_share_secret_key_jaiekigal",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

app.use(express.static(static_path));

var session; // global variable for sessison

app.get(["/student_login", "/"], async (req, res) => {
  // our login route
  session = req.session;
  if (session.userid && session.type == "student") {
    const findProfile1 = await profile.findOne({ userId: session.userid });
    res.send({ results: findProfile1 });
  } else {
    res.render("student_login");
  }
});

app.get("/faculty_login", async (req, res) => {
  // our login route
  session = req.session;
  if (session.userid && session.type == "faculty") {
    const findProfile2 = await profile.findOne({ userId: session.userid });
    res.send({ results: findProfile2 });
  } else {
    res.render("faculty_login");
  }
});

app.get("/admin_login", (req, res) => {
  // our admin route
  session = req.session;
  if (session.userid) {
    // res.render("addUser");
  } else {
    // res.render("admin_login");
  }
});

app.get("/logout", (req, res) => {
  session = req.session;
  session.destroy();
  res.send("Logged out");
});

// test
app.get("/admin_dashboard", (req, res) => {
  res.render("admin_dashboard");
});

app.post("/home", (req, res) => {
  if (session.type == "student") {
    console.log("/home");
    res.render("student_home");
  }
});

app.get("/student/results", async (req, res) => {
  try {
    session = req.query;
    const results = await result.findOne({
      studentID: session.userId,
      courseName: session.courseName,
    });
    res.status(200).json({ results });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/profile", async (req, res) => {
  try {
    session = req.query;
    const findProfile = await profile.findOne({ userId: session.userId });
    console.log(findProfile);

    if (session.type == "student" && findProfile.userId === session.userId) {
      console.log("is Student");
      res.status(200);
      res.json({ results: findProfile });
    } else if (
      session.type == "faculty" &&
      findProfile.userId === session.userId
    ) {
      console.log("is Faculty");
      res.status(200);
      res.json({ results: findProfile });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});
app.post("/results", async (req, res) => {
  session = req.session;
  if (session.type == "student") {
    res.render("student_results");
  }
});

app.post("/courses", (req, res) => {
  session = req.session;
  if (session.type == "student") {
    res.render("student_courses");
  }
});
var studentforattend;
app.post("/attendance", async (req, res) => {
  session = req.session;
  console.log("/attendance");
  if (session.type == "student") {
    // res.render("student_attendance");
  } else if ((session.type = "faculty")) {
    const findProfile = await profile.find({ type: "student" });
    res.json({ results: findProfile });
  }
});

app.post("/results/details", async (req, res) => {
  try {
    courseId = req.query.courseId;
    // console.log(courseId)
    session = req.session;
    const findSubject = await subject.findOne({
      userId: session.userid,
      courseId,
    });

    if (session.type == "student" && findSubject.userId === session.userid) {
      res.render("student_results_details", { sujectDetails: findSubject });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});
app.post("/attendance/details", async (req, res) => {
  try {
    session = req.session;
    atuserid = req.query.userid;
    studentforattend = atuserid;
    if (session.type == "student") {
      res.render("student_attendance_details");
    } else if (session.type == "faculty") {
      var findProfile = await profile.findOne({ userId: atuserid });
      console.log(findProfile);
      res.json({ results: findProfile });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

const findAdmin = admin.findOne({ adminName: "admin" });

app.post("/admin/modify_db", async (req, res) => {
  try {
    const currentName = req.body.userName;
    const findStudent = await student.findOne({ userId: currentName });
    // console.log(findStudent.userId)
    if (findStudent.userId === currentName) {
      res.send("student already present");
    }
  } catch (err) {
    const addUser = new student({
      userId: req.body.userName,
      studentPassword: req.body.password,
    });
    const userAdded = await addUser.save(function (err, result) {
      // waits for username and password and then save it to the database
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
    res.status(201).render("addUser");
  }
});

app.get("/student/courses", async (req, res) => {
  try {
    const userId = req.body.userId;
    const courses = await course.find({ userId });
    console.log(courses);
    res.status(200).json({ results: courses });
  } catch (err) {
    res.status(400).send("Invalid username or password");
  }
});

// admin login
app.post("/admin_login", async (req, res) => {
  try {
    const adminName = req.body.userName;
    const adminPassword = req.body.password;

    const name = await admin.findOne({ adminName }); // same as ({admintName: admintName}) (if both key: value are same we write only key)

    if (name.adminPassword === adminPassword && name.adminName === adminName) {
      session = req.session;
      session.userid = adminName;
      //   console.log(req.session)
      res.status(201).render("addUser");
    } else {
      res.send("Invalid username or password");
    }
  } catch (err) {
    res.status(400).send("Invalid username or password");
  }
});

// student login
// retrieve data from database (allowing students to login)

app.post("/student/login", async (req, res) => {
  try {
    const userId = req.body.userId;
    const password = req.body.password;

    const name = await student.findOne({ userId: userId }); // same as ({userId: userId}) (if both key: value are same we write only key)

    if (name.password === password) {
      console.log("Entered");
      session = req.session;
      session.userid = userId;
      session.type = "student";
      const findProfile1 = await profile.findOne({ userId: session.userid });
      res.status(200).json({ profile: findProfile1 });
    } else {
      res.status(401).send("Invalid username or password ()");
    }
  } catch (err) {
    res.status(400).send("Invalid username or password");
  }
});

app.post("/faculty/login", async (req, res) => {
  try {
    const userId = req.body.userId;
    const password = req.body.password;
    const name = await faculty.findOne({ userId }); // same as ({facultyName: facultyName}) (if both key: value are same we write only key)
    if (name.password === password) {
      session = req.session;
      session.userid = userId;
      session.type = "faculty";
      const findProfile2 = await profile.findOne({ userId: session.userid });
      res.status(200).json({ results: findProfile2 });
    } else {
      res.send("Invalid facultyname or password ()");
    }
  } catch (err) {
    res.status(400).send("Invalid facultyname or password");
  }
});

mongoose
  .connect(
    "mongodb+srv://ZahidAli:ChandioAli11*@cluster0.jlg0iah.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, // using new useNewUrlParser because old ones are deprecated and it will give error
      useUnifiedTopology: true, // using new useNewUrlParser because old ones are deprecated and it will give error
    }
  )
  .then(() => {
    console.log(`Connection to Database is Succesfull`);
    app.listen(PORT, () => {
      console.log(`Server is listening at PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
