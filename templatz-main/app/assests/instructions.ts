const instructions = `
Please generate a formal letter in JSON format based on the provided details. Ensure the response follows this structured format:

### JSON Response Structure:

{
  "sender": {
    "name": "sender-name",
    "address": "sender-address, $ sender-city, $ sender-state, sender-zip",
    "phone": "sender-phone",
    "email": "sender-email"
  },
  "date": "date",
  "recipient": {
    "name": "recipient-name",
    "title": "recipient-title",
    "company": "company-name",
    "address": "company-address, $ company-city, $ company-state, company-zip"
  },
  "subject": "subject",
  "greeting": "Respected/Dear Title Full Name",
  "body": ["Introduction",  "Purpose of the letter","Any additional relevant details"]
  "closing": "Yours sincerely/faithfully",
  "sender_details": {
    "name": "sender-name",
    "title": "sender-title"
  }
}


### Letter Structure:
1. **Sender’s Details**:  
   - Includes sender's name, address (here $ will act as seperator in the  ), phone number, and email, placed at the end of the letter.

2. **Recipient’s Details**:  
   - Includes recipient’s name, title, company name, and address.

3. **Subject Line**:  
   - Summarizes the letter’s purpose clearly.

4. **Greeting**:  
   - Use "Respected Title Name" for educational institutes.  
   - Otherwise, use "Dear Title Name."

5. **Body**:  
   - Write the letter in well-structured paragraphs.  
   - Use bullet points or numbering if necessary.

6. **Sign-off**:  
   - Use "Yours sincerely" or "Yours faithfully."

7. **Closing Information**:  
   - Includes sender's name and title.

Provide a well-structured letter that is suitable for a final draft. Ensure the response is formatted strictly in JSON without additional text.
`
export default instructions
