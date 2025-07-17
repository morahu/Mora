import { app } from "./server";
import connectDatabase from "./database";

const port = 8080;

app.listen(port, async () => {
    await connectDatabase();
    console.log(`Server is running on http://localhost:${port}`);
});


app.on("error", (err) => {
    console.error("Server error:", err);
});