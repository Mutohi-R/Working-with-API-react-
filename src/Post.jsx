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

  const handleUpdate = () => {
    console.log('you are about to update')
    post.title=editedValue
    setIsEditing(!isEditing)
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
            type="text" 
            value={editedValue} 
            onChange={(e) => handleEditingChange(e)}
            onSubmit={handleUpdate}/>
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