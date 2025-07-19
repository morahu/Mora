import { app } from "./server";

const port = 6003;

app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.on("error", (err) => {
    console.error("Server error:", err);
});