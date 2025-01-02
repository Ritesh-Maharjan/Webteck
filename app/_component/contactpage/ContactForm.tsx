"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Schema for Validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  referal: z.string(),
  plan: z.enum(
    ["Maintenance plan", "Landing Page", "Basic Website", "Corporate"],
    {
      errorMap: () => ({ message: "You must select a valid plan" }),
    }
  ),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label className="hidden" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name*:"
          {...register("name")}
          className={`${
            errors.name ? "border-b-2 border-opacity-1 border-red-500" : ""
          } bg-transparent border-b border-white w-full border-opacity-50 focus:outline-none py-1`}
        />
        {errors.name && (
          <small className="text-red-600 font-bold">
            {errors.name.message}
          </small>
        )}
      </div>

      <div>
        <label className="hidden" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your email*:"
          {...register("email")}
          className={`${
            errors.name ? "border-b-2 border-opacity-1 border-red-500" : ""
          } bg-transparent border-b border-white w-full border-opacity-50 focus:outline-none py-1`}
        />
        {errors.email && (
          <small className="text-red-600 font-bold">
            {errors.email.message}
          </small>
        )}
      </div>

      <div>
        <label className="hidden" htmlFor="referal">
          Referal code:
        </label> 
        <input
          type="text"
          id="Referal Code"
          placeholder="Referral Code:"
          {...register("referal")}
          className={`bg-transparent border-b border-white w-full border-opacity-50 focus:outline-none py-1`}
        />
      </div>

      <div>
        <label className="hidden" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your project:"
          className={`${
            errors.name ? "border-b-2 border-opacity-1 border-red-500" : ""
          } bg-transparent border-b border-white w-full border-opacity-50 focus:outline-none py-1`}
        />
        {errors.message && (
          <small className="text-red-600 font-bold">
            {errors.message.message}
          </small>
        )}
      </div>

      <div>
        <label className="hidden" htmlFor="plan">
          plan:
        </label>
        <select
          id="plan"
          defaultValue={"value"}
          {...register("plan")}
          className={`${
            errors.name ? "border-b-2 border-opacity-1 border-red-500" : ""
          } bg-transparent border-b border-white w-full border-opacity-50 focus:outline-none py-1`}
        >
          <option value="value" disabled className="bg-black text-white">
            Maintenance plan:
          </option>
          <option className="bg-black text-white" value="Landing Page">
            Landing Page
          </option>
          <option className="bg-black text-white" value="Basic Website">
            Basic Website
          </option>
          <option className="bg-black text-white" value="Corporate">
            Corporate
          </option>
        </select>
        {errors.plan && (
          <small className="text-red-600 font-bold">
            {errors.plan.message}
          </small>
        )}
      </div>

      <div className="flex gap-4 mt-4">
        <button
          className="w-fit border py-3 px-6 rounded-full"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Request Proposal"}
        </button>
        <div className="flex flex-col text-base gap-1 text-[#CDCDCD]">
          Have a question?
          <a className="text-white" href="https://calendly.com/vancouverwebteck/30min">
            Book a meeting
          </a>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
