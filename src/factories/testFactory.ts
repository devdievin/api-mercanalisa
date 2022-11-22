import { FileController } from "../controllers/FileController"
import { CryptoService } from "../services/CryptoService";

export const testFactory = () => {
    const cryptoService = new CryptoService();
    const fileController = new FileController(cryptoService);
    return fileController;
}