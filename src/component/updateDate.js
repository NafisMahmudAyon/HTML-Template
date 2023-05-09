async function updateData(id, dataToUpdate) {
    const response = await fetch(`https://postgrid-data-api-server.onrender.com/layoutList/${id}`, {
      method: 'PUT', // or 'PATCH' if you want to update only specific fields
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToUpdate)
    });
    const updatedData = await response.json();
    return updatedData;
  }
  