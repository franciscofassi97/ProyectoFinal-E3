const definirContenedor = require('../modules/daos');
// const normalizarMensaje = require("../normalizer");

const { getAllProductosService, agregarProductoService } = require('../modules/productos/productosServices');

module.exports = (server) => {
  const { Server: IoServer } = require("socket.io");
  const ioSocket = new IoServer(server);

  ioSocket.on("connection", async (socket) => {
    console.log("New cliente connected");

    // const contenedorMensajes = await definirContenedor("mensajes");

    //Emitit eventos de sockets para visualizacion de datos en el cliente
    const listProductos = await getAllProductosService()
    socket.emit("leerProductos", listProductos);
    // socket.emit("leerMensajes", normalizarMensaje(await contenedorMensajes.getAllData()));

    //Prodcutos
    socket.on("agregarProducto", async (producto) => {
      const idProducto = await agregarProductoService(producto);
      // if (idProducto) ioSocket.sockets.emit("leerProductos", await getAllProductosService());
    });

    // //Chat
    // socket.on("agregarMensaje", async (mensaje) => {
    //   const idMensaje = await contenedorMensajes.save(mensaje);
    //   const mensajesNormalizado = normalizarMensaje(await contenedorMensajes.getAllData());
    //   if (idMensaje) ioSocket.sockets.emit("leerMensajes", mensajesNormalizado);
    // });
  });
};