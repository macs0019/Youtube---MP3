export const downloadFile = (fileUrl, fileName) => {
    // Crear un enlace para la descarga
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName; // Asignar un nombre de archivo para la descarga
    document.body.appendChild(link); // Agregar el enlace al cuerpo del documento
    link.click(); // Hacer clic en el enlace para iniciar la descarga
    document.body.removeChild(link); // Eliminar el enlace del documento
  };