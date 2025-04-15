import { useState } from "react";
import Chat from "../Icons/Chat";
import styles from "./ChatBot.module.css";
import Close from "../Icons/Close";
import { useNavigate } from "react-router-dom";
import { Mensaje } from "../../interfaces/Mensaje";

const firstMessages : Mensaje[] = [
  {
    message: "¡Hola! Soy SIVICBOT. Bienvenido al chat ¿En qué puedo ayudarte?",
    options: [
      { text: "¿Qué es SIVIC?", display: "block" },
      { text: "¿Para qué sirve el SIVIC?", display: "block" },
      {
        text: "¿Qué tipos de caso de denuncia puedo reportar?",
        display: "block",
      },
      { text: "¿Qué sucede con mis datos personales?", display: "block" },
      {
        text: "¿Cuánto tiempo demora la respuesta de mi denuncia?",
        display: "block",
      },
      { text: "¿A dónde derivará mi denuncia?", display: "block" },
      {
        text: "¿Dónde puedo consultar el estado de mi denuncia?",
        display: "block",
      },
      { text: "Quiero hablar con una persona.", display: "block" },
    ],
  },
];

const ChatBot: React.FC = () => {
  const navigate = useNavigate();
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [messages, setMessages] = useState(firstMessages);
  const [viewReturn, setViewReturn] = useState("none");

  const answers : Mensaje[] = [
    {
      message:
        "Es una plataforma para la comunicación y atención de casos relacionados al estigma y discriminación de las personas afectadas por TB, así como a la atención en TB y canasta PANTB.",
      options: [],
    },
    {
      message:
        "Sirve para acciones de vigilancia en derechos humanos, con un énfasis en el estigma y la discriminación, así como en el tratamiento de la tuberculosis y la provisión de la canasta PANTB.",
      options: [],
    },
    {
      message:
        "Puedes denunciar o reportar mediante esta plataforma temas relacionados a Estigma / discriminación, Tratamiento de TB y Canasta PANTB, en la sección de reportar un caso",
      options: [],
    },
    {
      message:
        "SIVICTB protegerá sus datos personales y respetará el derecho a la confidencialidad según La Ley de Protección de Datos Personales en Perú es la Ley N° 29733, La Ley N° 30287 Ley de Prevención y control de TB.",
      options: [],
    },
    {
      message:
        "La respuesta a su reporte podría tomar aproximadamente 3 a 7 días hábiles.",
      options: [],
    },
    {
      message:
        "Se derivará para resolución a OAT, según región de intervención y la vez a las entidades que correspondan la solución del caso.",
      options: [],
    },
    {
      message:
        "En la sección de Consulta en la parte superior de la página web.",
      options: [],
    },
    {
      message: "Por favor, haz click aquí para ir al formulario de preguntas.",
      onClick: () => {
        setIsOpenChat(false);
        resetChat();
        navigate("/contact");
      },
    },
  ];

  const openChat = () => {
    const newState = !isOpenChat;
    setIsOpenChat(newState);

    const modal = document.querySelector(
      `.${styles.chatbot}`
    ) as HTMLDivElement;
    if (modal) {
      modal.style.display = newState ? "flex" : "none";
    }
  };

  const optionSelected = (index: number) => {
    let newMessages : Mensaje = {
      ...messages[0],
      options: messages[0].options?.map((option, i) => {
        if (i == index) return option;
        else {
          option.display = "none";
          return option;
        }
      }),
    };

    setMessages([newMessages, answers[index]]);

    setViewReturn("block");

  };

  const resetChat = () => {
    let newMessages = {
      ...messages[0],
      options: messages[0].options?.map((option) => {
        option.display = "block";
        return option;
      }),
    };
    setMessages([newMessages]);
    setViewReturn("none");
  };

  return (
    <>
      <div className={styles.chatbot} style={{ display: isOpenChat ? "flex" : "none" }}>
        <div className={styles.header}>
          <p>SIVIC Bot</p>
          <button className={styles.exitButton}>
            <Close onClick={openChat} />
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.chat}>
            {messages.map((message, index) => (
              <div className={styles.message} key={index} onClick={message.onClick} style={{ cursor: typeof message.onClick === 'function' ? "pointer" : "default" }}>
                {message.message}
                {message.options?.map((option, index) => (
                  <div
                    className={styles.option}
                    key={index}
                    style={{ display: option.display }}
                    onClick={() => (optionSelected(index))}
                  >
                    {option.text}
                  </div>
                ))}
              </div>
            ))}
            <div
              className={styles.messageButton}
              style={{ display: viewReturn }}
              onClick={resetChat}
            >
              Regresar
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={openChat}>
        <Chat />
      </button>
    </>
  );
};

export default ChatBot;
