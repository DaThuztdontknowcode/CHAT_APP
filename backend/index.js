const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Chỉ cần import axios một lần

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Đoạn mã này không thuộc bất kỳ tuyến nào, hãy di chuyển nó vào tuyến cụ thể
// const { username } = req.body;

app.post("/authenticate", async (req, res) => {
  try {
    const { username } = req.body; // Di chuyển đoạn này vào tuyến cụ thể
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "eb14d60e-4a2e-4768-b741-19ceba79394d" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
