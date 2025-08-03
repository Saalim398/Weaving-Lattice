const mongoose = require("mongoose");

//CONNECTION
mongoose
  .connect("mongodb://127.0.0.1:27017/TestDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("Error:", err));

//SCHEMA
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  jobtitle: { type: String },
});

//MODEL
const User = mongoose.model("user", userSchema);

//CREATE
async function insertUser(firstName, lastName, email, jobtitle) {
  try {
    const newUser = await User.create({ firstName, lastName, email, jobtitle });
    console.log("User inserted:\n", newUser);
    return newUser._id;
  } catch (err) {
    console.error("Error inserting user:", err.message);
  }
}

// READ
async function readAllUsers() {
  const users = await User.find();
  console.log("All users:\n", users);
}

async function readUserById(id) {
  const user = await User.findById(id);
  if (user) {
    console.log("User by ID:\n", user);
  } else {
    console.log("No user found with ID:", id);
  }
}

// UPDATE
async function updateUser(id, newData) {
  const updatedUser = await User.findByIdAndUpdate(id, newData, { new: true });
  if (updatedUser) {
    console.log("User updated:\n", updatedUser);
  } else {
    console.log("No user found to update");
  }
}

// DELETE
async function deleteUser(id) {
  const deletedUser = await User.findByIdAndDelete(id);
  if (deletedUser) {
    console.log("User deleted:\n", deletedUser);
  } else {
    console.log("No user found to delete");
  }
}

async function run() {
  const id = await insertUser(
    "John",
    "Doe",
    "johndoe3@example.com",
    "Software Engineer"
  );

  await readAllUsers();
  await readUserById(id);
  i;

  await updateUser(id, { jobtitle: "Senior Engineer", firstName: "Johnny" });

  await deleteUser(id);

  await readAllUsers();

  mongoose.connection.close();
}

run();
