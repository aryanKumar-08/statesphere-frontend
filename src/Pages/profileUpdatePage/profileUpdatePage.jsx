import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./profileUpdatePage.scss";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const [formData, setFormData] = useState({
    username: currentUser?.username || "",
    email: currentUser?.email || "",
    password: "",
  });

  // const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    try {
      const res = await apiRequest.put(
        `/users/${currentUser._id}`, // ✅ Fixed here
        {
          username,
          email,
          password,
          avatar: avatar[0]
        }
      );

      updateUser(res.data); // Update context with new user data
      setError(""); // Clear any old error
      alert("Profile updated successfully!");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>

          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Update</button>

          {error && <p className="error">{error}</p>}
        </form>
      </div>

      <div className="sideContainer">

        <img
          src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
          alt="User Avatar"
          className="avatar"
        />
        {/* {currentUser?.avatar ? (
          <img src={avatar} alt="User Avatar" className="avatar" />
        ) : (
          <img src="/noavatar.jpg" alt="Default Avatar" className="avatar" />
        )} */}

        <UploadWidget
          uwConfig={{
            cloudName: "techaryan",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars"
          }}
          setState={setAvatar}

        />

      </div>


    </div>
  );
}

export default ProfileUpdatePage;










