"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resend_1 = require("resend");
const app = (0, express_1.default)();
const cors = require("cors");
app.use(cors());
app.use(express_1.default.json());
// Add a test endpoint to verify API is working
app.get("/", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "API is running correctly",
        timestamp: new Date().toISOString()
    });
});
const resend = new resend_1.Resend("re_E4wFpiXY_VkictX5j5T4nwtQmDRVQ9qWq");
// app.post("/send-email", async (req, res) => {
//   const { name, phone, email, message } = req.body;
//   const { data, error } = await resend.emails.send({
//     from: "Acme <onboarding@resend.dev>",
//     to: ["edmiya.dev@gmail.com"],
//     subject: "Mensaje de contacto desde la web",
//     html: `
//         <strong>Hola, tienes un nuevo mensaje de contacto:</strong><br>
//         <strong>Nombre:</strong> ${name}<br>
//         <strong>Teléfono:</strong> ${phone}<br>
//         <strong>Email:</strong> ${email}<br>
//         <strong>Mensaje:</strong> ${message}
//     `,
//   });
//   if (error) {
//     res.status(400).json({error});
//   } else {
//     res.status(200).json({ data });
//   }
//   console.log(req);
// });
app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});
