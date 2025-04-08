import express from "express";
import { Resend } from "resend";
import cors from "cors";

// Configurar la app Express
const app = express();
app.use(cors());
app.use(express.json());

// Test endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "API is running correctly",
    timestamp: new Date().toISOString(),
  });
});

const resend = new Resend(process.env.RESEND_API_KEY);

// Endpoint para enviar email (comentado por ahora)
app.post("/send-email", async (req, res) => {
  const { name, phone, email, message } = req.body;

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["edmiya.dev@gmail.com"],
    subject: "Mensaje de contacto desde la web",
    html: `
        <strong>Hola, tienes un nuevo mensaje de contacto:</strong><br>
        <strong>Nombre:</strong> ${name}<br>
        <strong>Teléfono:</strong> ${phone}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Mensaje:</strong> ${message}
    `,
  });

  if (error) {
    res.status(400).json({ error });
  } else {
    res.status(200).json({ data });
  }
});

// Para desarrollo local
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Exportación para Vercel
export default app;
