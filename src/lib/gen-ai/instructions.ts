const instructions = `
Please generate a formal letter in JSON format based on the provided details. Ensure the response follows this structured format:

### JSON Response Structure:
{
  "sender": {
    "name": "sender-name",
    "address": ["sender-address, sender-city,", "sender-state, sender-zip"],
    "phone": "sender-phone",
    "email": "sender-email"
  },
  "date": "date",
  "recipient": {
    "name": "recipient-name",
    "title": "recipient-title",
    "company": "company-name",
    "address": "company-address,  company-city,  company-state, company-zip"
  },
  "subject": "subject",
  "greeting": "Respected/Dear Title Full Name",
  "body": ["Introduction","Main Content ","Call to Action"],
  "closing": "Yours sincerely/faithfully",
  "sender_details": {
    "name": "sender-name",
    "title": "sender-title"
  }
}


### Letter Structure:
1. **Sender’s Details**:  
   - Includes sender's name, address, phone number, and email, placed at the end of the letter.

2. **Recipient’s Details**:  
   - Includes recipient’s name, title, company name, and address.

3. **Subject Line**:  
   - Clearly summarizes the letter’s purpose and includes a brief description.

4. **Greeting**:  
   - Use "Respected Title Name" for educational institutes.  
   - Otherwise, use "Dear Title Name."

5. **Body**:  
   - Introduction – Clearly state the purpose of the letter in a concise manner.  
   - Main Content – Provide relevant details in a structured and professional tone. Use bullet points if necessary.
   - Call to Action – Conclude with a clear request, next steps, or expected response.

6. **Sign-off**:  
   - Use "Yours sincerely" or "Yours faithfully."

7. **Closing Information**:  
   - Includes sender's name and title.

Provide a well-structured letter that is suitable for a final draft. Ensure correct spelling, grammar, and a professional tone and the response is formatted strictly in JSON without additional text.
`
export default instructions