import emailjs from "@emailjs/browser";
emailjs.init(process.env.NEXT_PUBLIC_USER_KEY);

export default emailjs;
