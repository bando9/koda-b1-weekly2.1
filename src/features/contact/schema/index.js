import * as yup from "yup";

export const messagesSchema = yup.object({
  name: yup
    .string()
    .trim()
    .matches(/^[^0-9]*$/, "Input tidak boleh mengandung angka")
    .required("Full Name wajib diisi"),
  email: yup
    .string()
    .trim()
    .email("Format email tidak valid")
    .required("Email Address wajib diisi"),
  phone: yup.number("Format harus angka").optional(),
  subject: yup.string().trim().required("Subject wajib diisi"),
  country: yup.string().trim().optional(),
  message: yup
    .string()
    .trim()
    .min(10, "Message minimal 10 karakter")
    .required("Message wajib diisi"),
});
