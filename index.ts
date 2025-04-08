import express, { Request, Response } from "express";
import { Resend } from "resend";

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Add a test endpoint to verify API is working
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "API is running correctly",
    timestamp: new Date().toISOString()
  });
});

const resend = new Resend("re_E4wFpiXY_VkictX5j5T4nwtQmDRVQ9qWq");

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
