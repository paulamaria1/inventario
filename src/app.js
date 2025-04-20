/*Importamos el framework express */
import express from "express";
import cors from "cors";
import categoriasRoutes from "./routes/categorias.routes.js"
/*asignamos a app toda funcionalidad a mi servidor web */
const app= express();

/*setear un puerto a mi web server */
app.set("port",5000)

app.use(cors());

/*routes */
app.use("/api/categorias",categoriasRoutes)

/*hacemos disponible a mi server app para toda la aplicacion*/
export default app;
