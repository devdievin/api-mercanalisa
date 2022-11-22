import { app } from "./app/app";

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => { console.log(`Api running on http://localhost:${PORT}`); });