const { transcode } = require('buffer');
const fs = require('fs')
const {products} = require('./data')

let valor = ""

const generarFactura = async (id , cantiad)=>{

    const productBD = products.find(p=>p.id === id);

    try {
        if(productBD){
             valor += `
               ********** Factura de Pago*******
               Articulo: ${productBD.nombre}
               Precio UD: ${productBD.precio}
               Cantidad: ${cantiad}
               Valor Total: ${productBD.precio * cantiad}
               *********************************
            `
            return;
           
       }else{
            console.log('Producto no encontrado')
       }

       fs.writeFileSync('factura.txt' , valor)
       
       
        
    } catch (error) {

        throw error;
        
    }


}

const crearArchivo = ()=>{
    
}


module.exports = {
    getPrecio
}
