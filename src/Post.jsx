import { useState } from "react";
import PropTypes from "prop-types";
import './App.css'

function Post({ post, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedvalue] = useState(post.title)

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setIsEditing(!isEditing)
  }

  const handleUpdate = ( ) => {
    console.log('you are about to update')
    if (editedValue) {
      post.title=editedValue
      setIsEditing(!isEditing)
    } else {
      alert('List item empty')
      let shouldDelete = confirm('Delete instead')
      shouldDelete ? handleDelete(post.id) : null
    }
  }

  const handleEditingChange = (e) => {
    setEditedvalue(e.target.value)
  }

  return (
    <>
      {!isEditing ? (
        <li>
          {post.title}
          <button onClick={() => handleDelete(post.id)}>X</button>
          <button onClick={handleEdit}>Edit</button>
        </li>
      ) : (
        <li>
          <input 
            autoFocus
            type="textArea" 
            value={editedValue} 
            onChange={(e) => handleEditingChange(e)}/>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </li>
      )}
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Post;