"use client";
import { LetterType } from "./LetterType";
import { motion } from "framer-motion";

const lineVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Delay between each line
      duration: 0.5,
    },
  }),
};
interface FormatProps {
  letterData: LetterType;
  className?: string;
}
interface LetterSelectorProps extends FormatProps {
  format: "format1" | "format2";
}

function LetterFormat1({ letterData }: FormatProps) {
  const renderAnimatedLine = (text: string, index: number) => (
    <motion.p
      custom={index}
      variants={lineVariant}
      initial="hidden"
      animate="visible"
      key={index}
    >
      {text}
    </motion.p>
  );

  return (
    <>
      <div className="sender-details">
        {[
          letterData.sender.name,
          ...(Array.isArray(letterData.sender.address)
            ? letterData.sender.address
            : [letterData.sender.address]),
          letterData.sender.phone,
        ].map((line, idx) => renderAnimatedLine(line, idx))}
      </div>
      <motion.div
        className="font-bold"
        variants={lineVariant}
        custom={letterData.sender.address.length + 1}
        initial="hidden"
        animate="visible"
      >
        {letterData.date}
      </motion.div>
      <div className="receipient-details">
        {[
          letterData.recipient.name,
          letterData.recipient.title,
          letterData.recipient.company,
          letterData.recipient.address,
        ].map((line, idx) =>
          renderAnimatedLine(line, idx + letterData.sender.address.length + 2)
        )}
      </div>
      <motion.div
        className="subject font-bold"
        variants={lineVariant}
        custom={letterData.sender.address.length + 6}
        initial="hidden"
        animate="visible"
      >
        Subject : {letterData.subject}
      </motion.div>
      <motion.div
        className="greting"
        variants={lineVariant}
        custom={letterData.sender.address.length + 7}
        initial="hidden"
        animate="visible"
      >
        {letterData.greeting},
      </motion.div>
      <div className="body text-justify flex flex-col gap-1">
        {Array.isArray(letterData.body)
          ? letterData.body.map((paragraph: string, idx: number) =>
              renderAnimatedLine(
                paragraph,
                idx + letterData.sender.address.length + 8
              )
            )
          : renderAnimatedLine(letterData.body, letterData.sender.address.length + 8)}
      </div>
      <motion.div
        variants={lineVariant}
        custom={letterData.sender.address.length + letterData.body.length + 8}
        initial="hidden"
        animate="visible"
      >
        {letterData.closing},
      </motion.div>
      <br />
      <div className="sender-details">
        {[
          letterData.sender_details.name,
          letterData.sender_details.title,
        ].map((line, idx) =>
          renderAnimatedLine(
            line,
            idx + letterData.sender.address.length + letterData.body.length + 9
          )
        )}
      </div>
    </>
  );
}

function LetterFormat2({ letterData }: FormatProps) {
  const renderAnimatedLine = (text: string, index: number) => (
    <motion.p
      custom={index}
      variants={lineVariant}
      initial="hidden"
      animate="visible"
      key={index}
    >
      {text}
    </motion.p>
  );

  return (
    <>
      <motion.div
        className="font-bold"
        variants={lineVariant}
        custom={0}
        initial="hidden"
        animate="visible"
      >
        {letterData.date}
      </motion.div>

      <div className="receipient-details">
        {[letterData.recipient.name, letterData.recipient.title, letterData.recipient.company, letterData.recipient.address].map(
          (line, idx) => renderAnimatedLine(line, idx + 1)
        )}
      </div>

      <motion.div
        className="subject font-bold"
        variants={lineVariant}
        custom={5}
        initial="hidden"
        animate="visible"
      >
        Subject : {letterData.subject}
      </motion.div>

      <motion.div
        className="greting"
        variants={lineVariant}
        custom={6}
        initial="hidden"
        animate="visible"
      >
        {letterData.greeting}
      </motion.div>

      <div className="body text-justify">
        {Array.isArray(letterData.body)
          ? letterData.body.map((paragraph: string, idx: number) =>
              renderAnimatedLine(paragraph, idx + 7)
            )
          : renderAnimatedLine(letterData.body, 7)}
      </div>

      <motion.div
        variants={lineVariant}
        custom={letterData.body.length + 7}
        initial="hidden"
        animate="visible"
      >
        {letterData.closing},
      </motion.div>

      <br />

      <div className="sender-details">
        {[
          letterData.sender.name,
          letterData.sender_details.title,
          ...(Array.isArray(letterData.sender.address)
            ? letterData.sender.address
            : [letterData.sender.address]),
          letterData.sender.phone,
        ].map((line, idx) => renderAnimatedLine(line, idx + 8))}
      </div>
    </>
  );
}


const LetterFormatSelector: React.FC<LetterSelectorProps> = ({
  letterData,
  format,
}) => {
  switch (format) {
    case "format1":
      return <LetterFormat1 letterData={letterData} />;
    case "format2":
      return <LetterFormat2 letterData={letterData} />;
    default:
      return null;
  }
};
export default LetterFormatSelector;

export { LetterFormat1, LetterFormat2 };
