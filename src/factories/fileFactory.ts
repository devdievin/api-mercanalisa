import { FileController } from "../controllers/FileController"
import { CryptoService } from "../services/CryptoService";

export const fileFactory = () => {
    const cryptoService = new CryptoService();
    const fileController = new FileController(cryptoService);
    return fileController;
}