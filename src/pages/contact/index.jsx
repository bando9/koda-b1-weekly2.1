import { useForm } from "react-hook-form";
import Footer from "../../components/footer";
import Header from "../../components/header";
import NavBar from "../../components/nav-bar";
import Input from "../../features/contact/input";
import InputCheckbox from "../../features/contact/input-checkbox";
import InputRadio from "../../features/contact/input-radio";
import SocialMedia from "../../features/contact/social-media";
import InformationTag from "../../features/contact/information-tag";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  country: "",
  message: "",
  method: "email-rb",
  tech: "",
};

export default function Contact() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialForm,
  });

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("touchMessages");
      const data = saved ? JSON.parse(saved) : [];

      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });

  function onSubmit(data) {
    const createMessage = {
      id: uuidv4(),
      ...data,
    };

    setMessages((prevMessages) => [createMessage, ...prevMessages]);

    reset();
  }

  useEffect(() => {
    localStorage.setItem("touchMessages", JSON.stringify(messages));
  }, [messages]);

  const handleReset = () => reset();

  return (
    <div>
      <NavBar />

      <main>
        <Header
          label="get in touch"
          title="contact me"
          description="Have a project in mind or just want to say hello? Fill out the form and I'll get back to you within 24 hours."
        />

        <section className="px-6 py-16 lg:px-28 lg:grid lg:grid-cols-12 lg:gap-8">
          <form
            className="mt-7 space-y-6 lg:col-span-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="font-bold text-[#101828] text-xl">Send a Message</h2>
            <div className="md:grid md:grid-cols-2 md:space-x-4">
              <Input
                required={true}
                ph="Jordan Smith"
                title="Full Name"
                register={register}
                nameFor="name"
                type="text"
              />

              <Input
                required={true}
                ph="you@example.com"
                title="Email Address"
                register={register}
                nameFor="email"
                type="email"
              />

              <Input
                ph="+1 (415) 555-0100"
                title="Phone Number"
                register={register}
                nameFor="phone"
                type="tel"
              />

              <Input
                required={true}
                ph="Project inruiry"
                title="Subject"
                register={register}
                nameFor="subject"
                type="text"
              />
            </div>

            <Input
              ph=""
              title="Country"
              register={register}
              nameFor="country"
              type="text"
            />

            <div className="flex flex-col space-y-1.5">
              <label htmlFor="message" className="font-medium text-sm">
                Message <span className="text-[#FF6467]">*</span>
              </label>
              <textarea
                id="message"
                className="border border-[#E5E7EB] py-3 px-4 rounded-lg resize-none w-full h-25"
                placeholder="Tell me about your project or what you need help with..."
                {...register("message")}
              />
            </div>

            <div>
              <h3 className="font-medium text-sm">Preferred Contact Method</h3>
              <div className="flex gap-3">
                <InputRadio
                  label="Email"
                  register={register}
                  nameFor="email-rb"
                />

                <InputRadio
                  label="Phone"
                  register={register}
                  nameFor="phone-rb"
                />
                <InputRadio
                  label="Whatsapp"
                  register={register}
                  nameFor="whatsapp-rb"
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-[#364153]">
                Technologies Interested In
              </h3>
              <div className="grid grid-cols-2">
                <InputCheckbox
                  nameFor="react"
                  label="React"
                  register={register}
                />
                <InputCheckbox
                  nameFor="node.js"
                  label="Node.js"
                  register={register}
                />
                <InputCheckbox
                  nameFor="python"
                  label="Python"
                  register={register}
                />
                <InputCheckbox
                  nameFor="typescript"
                  label="TypeScript"
                  register={register}
                />
                <InputCheckbox
                  nameFor="react native"
                  label="React Native"
                  register={register}
                />
                <InputCheckbox
                  nameFor="vue.js"
                  label="Vue.js"
                  register={register}
                />
                <InputCheckbox
                  nameFor="django"
                  label="Django"
                  register={register}
                />
                <InputCheckbox
                  nameFor="express.js"
                  label="Express.js"
                  register={register}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 items-start lg:flex-row">
              <button
                type="submit"
                className="py-3 px-8 bg-[#111111] text-white rounded-lg"
              >
                Send Message
              </button>
              <button
                type="click"
                onClick={handleReset}
                className="px-8 py-3 border-[#E5E7EB] border-2 rounded-lg"
              >
                Reset Form
              </button>
            </div>
          </form>

          <div className="mt-12 space-y-6 lg:col-span-4">
            <div className="bg-[#F9FAFB] rounded-xl p-6">
              <div className="space-y-5">
                <h2 className="font-semibold text-base">Office Information</h2>
                <div className="space-y-4">
                  <InformationTag
                    icon="location"
                    label="San Francisco, CA 94105"
                    tag="Location"
                  />

                  <InformationTag
                    icon="email"
                    label="alex.carter@email.com"
                    tag="Email"
                  />

                  <InformationTag
                    icon="phone"
                    label="+1 (415) 555-0192"
                    tag="Phone"
                  />

                  <InformationTag
                    icon="time"
                    label="Mon – Fri, 9 AM – 6 PM PST"
                    tag="Hours"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#F9FAFB] p-6 space-y-4">
              <p className="font-semibold text-base">Find Me Online</p>
              <div className="space-y-6">
                <SocialMedia media="Github" label="@alexcarter" />
                <SocialMedia media="LinkedIn" label="Alex Carter" />
                <SocialMedia media="Twitter" label="@alexcodes" />
                <SocialMedia media="Dev.to" label="@alexcarter" />
              </div>
            </div>

            <div className="p-6 flex flex-col justify-center items-center bg-[#FFF7ED] rounded-xl">
              <img src="/images/maps-icon.png" />
              <h2 className="text-[#FF5F22] font-semibold text-sm">
                San Fransisco, CA
              </h2>
              <p className="text-[#FF5F22B2] text-xs mt-0.5">United States</p>
              <p className="text-[#FF5F22B2] text-xs mt-3">
                37.7749° N, 122.4194° W
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
