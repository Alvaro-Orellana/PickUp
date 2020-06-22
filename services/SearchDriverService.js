//Hace un POST con los datos del Pasajero y devuelve los datos
//del conductor si resulta exitosa



export async function searchDriver(datosPasajero)  {
    try {

      //Configuracion necesaria para hacer un POST con fetch
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosPasajero)
      }
      //                            Direccion IP local
      let respuesta = await fetch('http://192.168.0.141:3000/api/reserva', options) 
      let datosConductor = await respuesta.json();
      return datosConductor

    } catch (error) {
      console.error("Hubo un error llamando a la API", error);
      return null
    }
  }