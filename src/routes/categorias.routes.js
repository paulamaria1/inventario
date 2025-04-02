import { Router } from "express";
import { methoHTTP as CategoriaController} from "../controllers/categorias.controllers.js";
/*creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get*/
router.get("/", CategoriaController.getCategorias)

/*hacemos disponible a router en toda la app*/
export default router;