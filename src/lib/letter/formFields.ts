const formFields = [
  {
    title: "Sender details",
    fields: [
      {
        type: "text",
        placeholder: "Enter first Name",
        name: "sender-name",
        label: "Your Name",
        isRequired: true,
      },
      {
        type: "text",
        placeholder: "Enter Address Name",
        name: "sender-address",
        label: "Your Address",
        isRequired: true,
      },
      {
        type: "text",
        placeholder: "Enter City Name",
        name: "sender-city",
        label: "City",
        isRequired: true,
      },
      {
        type: "text",
        placeholder: "Enter State Name",
        name: "sender-state",
        label: "State",
        isRequired: true,
      },
      {
        type: "number",
        placeholder: "Enter Your Pin Code",
        name: "sender-zip",
        label: "ZIP",
        isRequired: true,
      },
      {
        type: "email",
        placeholder: "Enter Your Email",
        name: "sender-email-address",
        label: "Email Address",
        isRequired: true,
      },
      {
        type: "number",
        placeholder: "Enter Your Phone Number",
        name: "sender-number",
        label: "Phone Number",
        isRequired: true,
      },
      {
        type: "text",
        placeholder: "Enter Your Title",
        name: "sender-title",
        label: "Your Title (if applicable)",
        isRequired: false,
      },
    ],
  },
  {
    title: "Receiver details",
    fields: [
      {
        type: "text",
        placeholder: "Enter a Recipient's Name",
        name: "recipient-name",
        label: "Recipient's Name",
        isRequired: true,
      },
      {
        type: "text",
        placeholder: "Enter a Recipient's Title",
        name: "recipient-title",
        label: "Recipient's Title",
        isRequired: true,
      },
      {
        type: "text",
        placeholder: "Enter a Company/Organization",
        name: "company-organization",
        label: "Company/Organization",
      },
      {
        type: "text",
        placeholder: "Enter a Company Address",
        name: "company-address",
        label: "Company Address",
        isRequired: true,
      },
      {
        type: "text",
        placeholder: "Enter a City",
        name: "company-city",
        label: "City",
        isRequired: true,
      },
      {
        type: "text",
        placeholder: "Enter a State",
        name: "company-state",
        label: "State",
        isRequired: true,
      },
      {
        type: "number",
        placeholder: "Enter a ZIP",
        name: "company-zip",
        label: "ZIP",
        isRequired: true,
      },
    ],
  },
  {
    title: "Letter details",
    fields: [
      {
        type: "text",
        placeholder: "Enter a Prompt",
        name: "sender-prompt",
        label: "Prompt",
        isRequired: true,
      },
      {
        type: "date",
        placeholder: "Enter a Date",
        name: "sender-date",
        label: "Date",
        isRequired: true,
      },
    ],
  },
];

export default formFields;
