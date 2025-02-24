export type LetterType = {
    sender: {
        name: string;
        address: string;
        phone: string;
        email: string;
    };
    date: string;
    recipient: {
        name: string;
        title: string;
        company: string;
        address: string;
    };
    subject: string;
    greeting: string;
    body: string[];
    closing: string;
    sender_details: {
        name: string;
        title: string;
    };
};
