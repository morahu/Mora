import { app } from "./server";
import connectDatabase from "./database";

const port = 6001;

app.listen(port, async () => {
    await connectDatabase();
    console.log(`Server is running on http://localhost:${port}`);
});


app.on("error", (err) => {
    console.error("Server error:", err);
});