import axios from "axios";

const signup = async (email, username, password, firstName, lastName) => {
  try {
    const signedUpUser = await axios.post("http://localhost:9001/signup", {
      email,
      username,
      password,
      firstName,
      lastName
    });
    if (signedUpUser && signedUpUser.success) {
      return signedUpUser;
    }
  } catch (e) {
    console.error(e.message);
  }
};

export default signup;
