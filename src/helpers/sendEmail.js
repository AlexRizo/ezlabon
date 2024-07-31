import emailjs from "emailjs-com";

export const emailSender = async (data) => {
    emailjs.send('service_zv6hjl1', 'template_b0wsyvi', data, 'tCfXOjrUne151atAa').then(
        (response) => {
          console.log('Correo enviado', response.status, response.text);
        },
        (error) => {
          console.error('Ha ocurrido un error al enviar el correo...', error);
        },
    );
};