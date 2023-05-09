import { useState } from 'react';
import { useRouter } from 'next/router';
import { updateData } from '@/component/updateDate'; // Replace with the path to your API utility function

function EditPost() {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    const updatedData = await updateData(id, formData);
    console.log(updatedData); // Optional: log the updated data to the console
    router.push(`/posts/${id}`); // Redirect to the updated post page
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Content:
        <textarea name="content" value={formData.content} onChange={handleChange} />
      </label>
      <button type="submit">Save changes</button>
    </form>
  );
}

export default EditPost;
