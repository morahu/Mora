import { app } from "./server";
import connectDatabase from "./database";

app.listen(3000, async () => {
    await connectDatabase();
    console.log("Server is running on http://localhost:3000");
});


app.on("error", (err) => {
    console.error("Server error:", err);
});