import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./Contact.module.css";
import Button from "../components/Buttons/Button";
import useContacto from "../hooks/useContacto";
import { Contacto } from "../interfaces/Contacto";

const Contact: React.FC = () => {
  const { createContacto } = useContacto();
  const [formData, setFormData] = useState<Contacto>({
    nombre_completo: "",
    correo: "",
    dni: "",
    telefono: "",
    mensaje: "",
  });

  const [captchaValid, setCaptchaValid] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    alert("Datos enviados correctamente")
    createContacto(formData);

    console.log(formData);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>
            Complete el siguiente formulario y nos contactaremos con usted
          </h2>
        </div>

        <div className={styles.right}>
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmitCapture={handleSubmit}>
              <div className={styles.formFields}>
                <div className={styles.field}>
                  <label>Nombre Completo *</label>
                  <input
                    placeholder="Tu nombre completo"
                    name="nombre_completo"
                    value={formData.nombre_completo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label>Correo Electrónico *</label>
                  <input
                    type="email"
                    placeholder="Tu correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label>DNI *</label>
                  <input
                    placeholder="Tu DNI"
                    name="dni"
                    pattern="^\d{8}$"
                    title="El DNI debe tener exactamente 8 números"
                    value={formData.dni}
                    onChange={handleChange}
                    maxLength={8}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label>Teléfono *</label>
                  <input
                    placeholder="Tu teléfono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    pattern="^\d+$"
                    title="El teléfono debe contener solo números"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label>Mensaje *</label>
                  <textarea
                    rows={4}
                    placeholder="Ingresa tu mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={handleCaptcha}
                  />
                </div>
                <Button type="submit">Enviar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
