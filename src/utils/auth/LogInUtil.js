import axios from "axios";

const login = async (email, password) => {
  try {
    const loggedInUser = await axios.post("http://localhost:9001/login", {
      email,
      password
    });
    if (loggedInUser && loggedInUser.success) {
      return loggedInUser;
    }
  } catch (e) {
    console.error(e.message);
  }
};

export default login;
