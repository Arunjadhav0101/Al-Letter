import { LetterType } from "~/utils/genai/letterType";
type FormatProps = {
  letterData: LetterType;
  className?: string;
};
function LetterFormat1({ letterData, className }: FormatProps) {
  className;
  return (
    <>
      <div className="sender-details ">
        <p>{letterData.sender.name}</p>
        <p>{letterData.sender.address}</p>
        <p>{letterData.sender.phone}</p>
      </div>
      <div className="font-bold">{letterData.date}</div>
      <div className="receipient-details">
        <p>{letterData.recipient.name}</p>
        <p>{letterData.recipient.title}</p>
        <p>{letterData.recipient.company}</p>
        <p>{letterData.recipient.address}</p>
      </div>
      <div className="subject font-bold">Subject:{letterData.subject}</div>
      <div className="greting">{letterData.greeting}</div>
      <div className="body text-justify">
        {letterData.body.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      <div>{letterData.closing}</div>
      <div className="sender-deatails">
        <p> {letterData.sender_details.name}</p>
        <p> {letterData.sender_details.title}</p>
      </div>
    </>
  );
}

function LetterFormat2({ letterData }: FormatProps) {
  return (
    <>
      <div className="font-bold">{letterData.date}</div>
      <div className="receipient-details">
        <p>{letterData.recipient.name}</p>
        <p>{letterData.recipient.title}</p>
        <p>{letterData.recipient.company}</p>
        <p>{letterData.recipient.address}</p>
      </div>
      <div className="subject font-bold">Subject:{letterData.subject}</div>
      <div className="greting">{letterData.greeting}</div>
      <div className="body text-justify">
        {letterData.body.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      <div className="sender-deatails">
        <p> {letterData.sender_details.name}</p>
        <p> {letterData.sender_details.title}</p>
      </div>
      <div className="sender-details ">
        <p>{letterData.sender.name}</p>
        <p>{letterData.sender.address}</p>
        <p>{letterData.sender.phone}</p>
      </div>
    </>
  );
}

export { LetterFormat1, LetterFormat2 };
