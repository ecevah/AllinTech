// components/ContactCard.jsx
"use client";
import React, { useState } from "react";
import styles from "./contact-card.module.css";
import Image from "next/image";
import { ARROW_BUTTON_WHITE, ARROW_WHİTE } from "@/constant/constant_svg";
import AnimateOnScroll from "@/service/animate-on-scroll";

export default function ContactCard({
  white,
  green,
  label,
  name,
  email,
  subject,
  message,
  button,
  response,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // To display success/error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          success: true,
          message: response.success,
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          success: false,
          message: data.message || response.error,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        success: false,
        message: response.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${styles.bgImage} p-6 sm:p-12 lg:p-24`}>
      <Image
        src={ARROW_WHİTE}
        width={136}
        height={15}
        alt="Arrow"
        className="absolute top-[50px] left-[40px] lg:block hidden"
      />
      <div className="flex flex-col ml-4 sm:ml-8 lg:ml-[76px]">
        <AnimateOnScroll animationClass="slide-right">
          <div className="text-[28px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[55px] lg:leading-[65px] tracking-[-5.5%] font-bold cursor-default">
            {white}
          </div>
          <div className="PlusJakarta text-[32px] sm:text-[50px] lg:text-[64px] leading-[40px] sm:leading-[55px] lg:leading-[65px] tracking-[-5.5%] font-extrabold italic text-[#B9FD50] cursor-default">
            {green}
          </div>
          <div className="text-[24px] sm:text-[32px] lg:text-[40px] leading-[30px] sm:leading-[40px] lg:leading-[50px] font-normal my-[20px] sm:my-[30px] lg:my-[35px] cursor-default">
            {label}
          </div>
        </AnimateOnScroll>
        <form
          className="max-w-full lg:max-w-[535px] flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col sm:flex-row justify-between items-center">
            <input
              type="text"
              name="name"
              placeholder={name}
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} w-full sm:w-[30%] mb-4 sm:mb-0 sm:mr-[3%]`}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={email}
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} w-full sm:w-[67%]`}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder={subject}
            value={formData.subject}
            onChange={handleChange}
            className={`${styles.input} mb-4`}
            required
          />
          <textarea
            name="message"
            placeholder={message}
            value={formData.message}
            onChange={handleChange}
            className={`${styles.input} h-[150px] sm:h-[200px] max-h-[200px] !py-[15px] !px-[20px] mb-4`}
            required
          />
          {status && (
            <div
              className={`mb-4 text-${status.success ? "green" : "red"}-500`}
            >
              {status.message}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`border-solid border-[#FFFFFF66] border-[1px] bg-black rounded-full w-fit flex flex-row items-center justify-center px-[20px] sm:px-[30px] py-[8px] sm:py-[11px] ml-auto mt-[10px] sm:mt-[17px] hover:bg-[#FFFFFF66] cursor-pointer ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              response.loading
            ) : (
              <>
                <div className="Jost text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] tracking-[0.5px] mr-[5px]">
                  {button}
                </div>
                <Image
                  src={ARROW_BUTTON_WHITE}
                  width={24}
                  height={24}
                  alt="Arrow"
                />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
