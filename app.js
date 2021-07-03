const express = require("express");
const app = express();

// Routes
const deliciousAppProductRoutes = require("./routes/deliciousapp/product");

app.use("/api/v1", deliciousAppProductRoutes);

// PORT & Starting server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App is running at ${port}`);
});
