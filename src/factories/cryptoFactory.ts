import { CryptosController } from "../controllers/CryptosController";
import { CryptoService } from "../services/CryptoService"

export const cryptoFactory = () => {
    const cryptoService = new CryptoService();
    const cryptoController = new CryptosController(cryptoService);
    return cryptoController;
}