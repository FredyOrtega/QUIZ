function isFull() {
    let dato1 = document.getElementById(`dato1`).value;
    let dato2 = document.getElementById(`dato2`).value;
    let dato3 = document.getElementById(`dato3`).value;
    let dato4 = document.getElementById(`dato4`).value;
    let dato5 = document.getElementById(`dato5`).value;
    let dato6 = document.getElementById(`dato6`).value;
  
    if (
      dato1 === "" ||
      dato2 === "" ||
      dato3 === "" ||
      dato4 === "" ||
      dato5 === "" ||
      dato6 === ""
    ) {
      alert(`Por favor llene todos los campos`);
      return false;
    } else {
      return true;
    }
  }
  
  function carnet() {
    let dato = {
      nombres: document.getElementById(`dato1`).value,
      apellidos: document.getElementById(`dato2`).value,
      edad: document.getElementById(`dato3`).value,
      tipoDeSangre: document.getElementById(`dato4`).value,
      rH: document.getElementById(`dato5`).value,
      telefono: document.getElementById(`dato6`).value,
    };
  
    let verify = isFull(); //antes de hacer la suma se activa la funcion isFull para verificar que no hayan espacios en blancos.//
  
    if (verify === true) {
      document.getElementById(
        `result`
      ).innerHTML = `<h4 >Carnet Generado</h4><p>Nombres: ${dato.nombres}</p>\n<p>Apellidos: ${dato.apellidos}</p>\n<p>Edad: ${dato.edad}</p>\n<p>Tipo de Sangre: ${dato.tipoDeSangre}</p>\n<p>RH: ${dato.rH}</p>\n<p>Teléfono: ${dato.telefono}</p>`;
   
    }
  }
  