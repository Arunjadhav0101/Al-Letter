import { LetterType } from "@/components/Letter/LetterType";

const sendEmail = (letterData: LetterType) => {
  const letterBody = Array.isArray(letterData.body)
    ? letterData.body.join("\n")
    : letterData.body;
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /mobile|android|iphone|ipad|tablet/.test(userAgent);
  if (isMobile) {
    const url = `mailto:${encodeURIComponent("")}?subject=${encodeURIComponent(
      letterData.subject
    )}&body=${encodeURIComponent(letterBody)}`;
    window.open(url, "_blank");
  }
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=""&su=${encodeURIComponent(
    letterData.subject
  )}&body=${encodeURIComponent(letterBody)}`;
  window.open(mailtoLink, "_blank");
};
export default sendEmail;
