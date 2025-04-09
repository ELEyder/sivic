import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import ReCAPTCHA from "react-google-recaptcha";

// Definimos una interfaz para el formulario
interface FormData {
  nombre: string;
  correo: string;
  dni: string;
  telefono: string;
  mensaje: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    correo: "",
    dni: "",
    telefono: "",
    mensaje: "",
  });

  const [captchaValid, setCaptchaValid] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptcha = (value: string | null) => {
    setCaptchaValid(!!value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValid) {
      alert("Por favor, verifica el CAPTCHA");
      return;
    }

  };

  return (
    <div className="container">
      <div className="left">
        <h2>Complete el siguiente formulario y nos contactaremos con usted</h2>
      </div>

      <div className="right">
        <Form layout="vertical" onSubmitCapture={handleSubmit}>
          <Form.Item label="Nombre Completo *">
            <Input
              placeholder="Tu nombre completo"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Item>

          <Form.Item label="Correo Electrónico *">
            <Input
              type="email"
              placeholder="Tu correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </Form.Item>

          <Form.Item label="DNI *">
            <Input
              placeholder="Tu DNI"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              required
            />
          </Form.Item>

          <Form.Item label="Teléfono *">
            <Input
              placeholder="Tu teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </Form.Item>

          <Form.Item label="Mensaje">
            <Input.TextArea
              rows={4}
              placeholder="Ingresa tu mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item>
            <ReCAPTCHA sitekey="TU_SITE_KEY" onChange={handleCaptcha} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-button">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
