export const getAnimal = async () => {
    const response = await fetch('http://localhost:5000/api');
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    const result = await response.json();
    return result;
}

export const getOneAnimal = async (id) =>{
  try{
    const response = await fetch(`http://localhost:5000/api/${id}`);
    const data = await response.json()
    return data
  } catch(error){
    alert('Error');
  }
}

export const updateAnimal = async (id, newData) =>{
  try { 
  const response = await fetch(`http://localhost:5000/api/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  });

  if (!response.ok) {
    throw new Error('Error al modificar animal');
  }
  return response.json();
}catch (error){ 
  alert('Error');
  throw error;
  }
};
  
export const deleteAnimal = async (id) => {
  await fetch(`http://localhost:5000/api/${id}`, {method:"DELETE"}
  ).then(response => {
      if (response.ok) {
        const confirmDelete = window.confirm("¿Estás seguro que deseas borrar la foto?"); 
        if (confirmDelete){
           alert('Eliminado correctamente');
        }
      }});
} 


