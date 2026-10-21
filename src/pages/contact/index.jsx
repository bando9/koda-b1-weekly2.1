import { useForm } from "react-hook-form";
import Header from "../../components/header";
import Input from "../../features/contact/input";
import InputCheckbox from "../../features/contact/input-checkbox";
import InputRadio from "../../features/contact/input-radio";
import SocialMedia from "../../features/contact/social-media";
import InformationTag from "../../features/contact/information-tag";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  checkboxs,
  informations,
  initialForm,
  inputs,
} from "../../features/contact/data";
import { messagesSchema } from "../../features/contact/schema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(messagesSchema),
    defaultValues: initialForm,
  });

  // console.log(errors);

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

    setMessages((prevMessages) => [...prevMessages, createMessage]);

    reset();
  }

  useEffect(() => {
    localStorage.setItem("touchMessages", JSON.stringify(messages));
  }, [messages]);

  const handleReset = () => reset();

  return (
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
          <div className="md:grid md:grid-cols-2 md:space-x-4 space-y-6">
            {inputs.map((input, i) => (
              <Input
                key={i}
                isRequired={input.isRequired}
                ph={input.ph}
                title={input.title}
                nameFor={input.nameFor}
                type={input.type}
                register={register}
                errors={errors}
              />
            ))}
          </div>

          <Input
            title="Country"
            register={register}
            nameFor="country"
            type="text"
            errors={errors}
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
            {errors.message?.message ? (
              <span className="text-xs lg:text-sm text-red-500">
                {errors.message?.message}
              </span>
            ) : (
              <span></span>
            )}
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
              {checkboxs.map((checkbox) => (
                <InputCheckbox
                  key={checkbox.id}
                  nameFor={checkbox.id}
                  label={checkbox.label}
                  register={register}
                />
              ))}
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
              type="button"
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
                {informations.map((info) => (
                  <InformationTag
                    key={info.id}
                    icon={info.icon}
                    label={info.label}
                    tag={info.tag}
                  />
                ))}
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
  );
}
