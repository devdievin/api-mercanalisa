import { FiatController } from "../controllers/FiatController";

export const fiatFactory = () => {
    const fiatController = new FiatController();
    return fiatController;
}