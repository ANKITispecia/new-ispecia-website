'use client';
import { useState } from 'react';
import "./slug.css";
import { POST } from '@/actions/commentPost'; // Import the server action

const CommentForm = ({ postId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState(null); // State to handle server response

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, comment } = formData;
    let formErrors = {};

    if (!name) formErrors.name = "Name is required";
    if (!email || !emailRegex.test(email)) formErrors.email = "Valid email is required";
    if (!comment) formErrors.comment = "Comment is required";

    if (Object.keys(formErrors).length === 0) {
      try {
        // Call the server action directly and pass the required parameters
        const result = await POST({
          postId,
          authorName: name,
          authorEmail: email,
          content: comment
        });

        // Handle server response
        if (result.error) {
          setResponseMessage(`Failed to submit comment: ${result.error}`);
        } else {
          setResponseMessage('Comment submitted successfully');
          setFormData({ name: '', email: '', comment: '' }); // Reset form on success
        }
      } catch (error) {
        setResponseMessage(`Error: ${error.message}`);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h2>Leave a Comment</h2>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="comment">Comment</label>
      <textarea
        id="comment"
        name="comment"
        value={formData.comment}
        onChange={handleInputChange}
      />
      {errors.comment && <p className="error">{errors.comment}</p>}

      <button type="submit">Submit Comment</button>

      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default CommentForm;
