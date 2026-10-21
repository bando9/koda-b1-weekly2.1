export const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  country: "",
  message: "",
  method: "email-rb",
  tech: "",
};

export const checkboxs = [
  { id: "react", label: "React" },
  { id: "node.js", label: "Node.js" },
  { id: "python", label: "Python" },
  { id: "typescript", label: "TypeScript" },
  { id: "react native", label: "React Native" },
  { id: "vue.js", label: "Vue.js" },
  { id: "django", label: "Django" },
  { id: "express.js", label: "Express.js" },
];

export const inputs = [
  {
    nameFor: "name",
    title: "Full Name",
    ph: "Jordan Smith",
    type: "text",
    required: true,
  },
  {
    nameFor: "email",
    title: "Email Address",
    ph: "you@example.com",
    type: "email",
    required: true,
  },
  {
    nameFor: "phone",
    title: "Phone Number",
    ph: "+1 (415) 555-0100",
    type: "tel",
    required: false,
  },
  {
    nameFor: "subject",
    title: "Subject",
    ph: "Project inquiry",
    type: "text",
    required: true,
  },
];

export const informations = [
  {
    id: "location",
    icon: "location",
    tag: "Location",
    label: "San Francisco, CA 94105",
  },
  {
    id: "email",
    icon: "email",
    tag: "Email",
    label: "alex.carter@email.com",
  },
  {
    id: "phone",
    icon: "phone",
    tag: "Phone",
    label: "+1 (415) 555-0192",
  },
  {
    id: "hours",
    icon: "time",
    tag: "Hours",
    label: "Mon – Fri, 9 AM – 6 PM PST",
  },
];
