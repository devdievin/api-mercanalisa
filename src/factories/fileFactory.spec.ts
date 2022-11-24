import { FileController } from "../controllers/FileController";
import { fileFactory } from "./fileFactory";

describe('File Factory', () => {
    it('should be able to return a new instance of FileController', () => {
        expect(fileFactory()).toBeInstanceOf(FileController);
    })
})