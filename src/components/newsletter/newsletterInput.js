import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const ADD_CONTACT = gql`
  mutation addContact(
    $agreementAccepted: Boolean!
    $emailAdress: String!
    $username: String!
    $userComments: String!
    $phoneNumber: String!
    $organizationName: String!
  ) {
    createContact(
      data: {
        userComments: $userComments
        phoneNumber: $phoneNumber
        agreementAccepted: $agreementAccepted
        emailAdress: $emailAdress
        userName: $username
        organizationName: $organizationName
      }
    ) {
      id
    }
  }
`;

const NewsLetterInput = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [addContact] = useMutation(ADD_CONTACT);
  const [form, setForm] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    organizationName: "",
    userComments: "",
    agreementAccepted: false,
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const togglePopup = () => {
    setForm({
      username: "",
      email: "",
      phoneNumber: "",
      organizationName: "",
      userComments: "",
      agreementAccepted: false,
    });
    setSuccessMessage(null);
    setShowPopup(!showPopup);
    setError(null);
    setIsFormDisabled(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.agreementAccepted) {
      setError("Please fill out all fields & accept the agreement.");
      return;
    }

    const phoneNumberRegex =
      /((\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/;
    if (form.phoneNumber && !phoneNumberRegex.test(form.phoneNumber)) {
      setError("Please enter a valid Canadian phone number.");
      return;
    }
    try {
      setIsFormDisabled(true);
      await addContact({
        variables: {
          agreementAccepted: form.agreementAccepted,
          emailAdress: form.email,
          username: form.username,
          phoneNumber: form.phoneNumber,
          userComments: form.userComments,
          organizationName: form.organizationName,
        },
      });
      // togglePopup();
      setSuccessMessage("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      if (error.graphQLErrors) {
        error.graphQLErrors.forEach((graphQLError) => {
          console.error("GraphQL Error:", graphQLError.message);
        });
      }
    } finally {
      setIsFormDisabled(false);
    }
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div
      className={` ${
        showPopup ? "fixed inset-0" : "static inset-auto "
      } bg-[#131514be] backdrop-blur-md z-[1000]  mb-6`}
    >
      {showPopup ? (
        <div className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 shadow-xl w-[90%] md:w-[70%] lg:w-[50%]">
          <div className=" bg-app.darkGreen p-6 rounded-lg items-center flex-col">
            {successMessage ? (
              <>
                <h3
                  style={{
                    color: "#FFE977",
                    fontSize: "1.5rem",
                    marginTop: "50%",
                    marginBottom: "1rem",
                  }}
                >
                  Thank you!
                </h3>
                <h4 style={{ color: "#FFE977", marginBottom: "0.5rem" }}>
                  {" "}
                  We have received your message.{" "}
                </h4>
                <h4 style={{ color: "#FFE977", marginBottom: "1rem" }}>
                  {" "}
                  Someone from our team will be in touch shortly.{" "}
                </h4>
                <button
                  onClick={togglePopup}
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    background: "#FFE977",
                    color: "#2B302B",
                    marginTop: "1rem",
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3
                  style={{
                    color: "#FFE977",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Let's Connect!
                </h3>
                <form
                  onSubmit={handleFormSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        color: "#FFE977",
                        marginBottom: "0.5rem",
                        display: "block",
                      }}
                    >
                      Name:
                    </label>
                    <div className="flex flex-col w-full lg:w-4/4 text-app.yellow">
                      <input
                        className="bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        //placeholder="Enter..."
                        style={{ width: "100%" }} // Make the input take up the full width
                        disabled={isFormDisabled}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        color: "#FFE977",
                        marginBottom: "0.5rem",
                        display: "block",
                      }}
                    >
                      Email:
                    </label>
                    <div className="flex flex-col w-full lg:w-4/4 text-app.yellow">
                      <input
                        className="bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        style={{ width: "100%" }}
                        disabled={isFormDisabled}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        color: "#FFE977",
                        marginBottom: "0.5rem",
                        display: "block",
                      }}
                    >
                      Phone Number:
                    </label>
                    <div className="flex flex-col w-full lg:w-4/4 text-app.yellow">
                      <input
                        className="bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2"
                        type="tel"
                        name="phoneNumber"
                        onChange={handleChange}
                        style={{ width: "100%" }}
                        disabled={isFormDisabled}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        color: "#FFE977",
                        marginBottom: "0.5rem",
                        display: "block",
                      }}
                    >
                      Organization Name:
                    </label>
                    <div className="flex flex-col w-full lg:w-4/4 text-app.yellow">
                      <input
                        className="bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2"
                        type="text"
                        name="organizationName"
                        onChange={handleChange}
                        style={{ width: "100%" }}
                        disabled={isFormDisabled}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        color: "#FFE977",
                        marginBottom: "0.5rem",
                        display: "block",
                      }}
                    >
                      How can we help you?
                    </label>
                    <div className="flex flex-col w-full lg:w-4/4 text-app.yellow">
                      <textarea
                        className="bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2"
                        name="userComments"
                        onChange={handleChange}
                        value={form.userComments}
                        style={{ width: "100%", minHeight: "100px" }} // Set the width and height as needed
                        disabled={isFormDisabled}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        color: "#FFE977",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="agreementAccepted"
                        onChange={handleChange}
                        checked={form.agreementAccepted}
                        style={{ marginRight: "0.5rem" }}
                        disabled={isFormDisabled}
                      />
                      I agree to the terms and conditions
                    </label>
                  </div>

                  {error && (
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#FF5050",
                        marginBottom: "1rem",
                        alignSelf: "flex-start",
                      }}
                    >
                      {error}
                    </p>
                  )}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "1rem",
                    }}
                  >
                    <button
                      type="submit"
                      style={{
                        padding: "8px",
                        borderRadius: "4px",
                        marginRight: "0.5rem",
                        background: "#FFE977",
                        color: "#2B302B",
                      }}
                      disabled={isFormDisabled && !error}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={togglePopup}
                      style={{
                        padding: "8px",
                        borderRadius: "4px",
                        background: "#FFE977",
                        color: "#2B302B",
                      }}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      ) : (
        <div>
          <button
            style={{
              padding: "8px",
              borderRadius: "4px",
              background: "#FFE977",
              color: "#2B302B",
            }}
            onClick={togglePopup}
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsLetterInput;
