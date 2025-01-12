const express = require("express");
const { exec } = require("child_process");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Webhook received:", req.body);

    exec("/home/ubuntu/webhook/todo-webhook-handler.sh", (error, stdout, stderr) => {
        if (error) {
            console.error("Deployment error:", stderr);
            return res.status(500).send("Deployment failed");
        }
        console.log(stdout);
        res.send("Deployment successful");
    });
});

app.listen(3030, () => console.log("Webhook server running on port 3030"));
