"use client";

import clsx from "clsx";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

import { login, registerUser } from "@/actions";
import { useState } from "react";

import { useTranslations } from "next-intl";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const t = useTranslations("Auth");
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage("");
    const { name, email, password } = data;

    // Server action
    const resp = await registerUser(name, email, password);

    if (!resp.ok) {
      setErrorMessage(resp.message);
      return;
    }

    await login(email.toLowerCase(), password);
    window.location.replace("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      {/* {
        errors.name?.type === 'required' && (
          <span className="text-red-500">* El nombre es obligatorio</span>
        )
      } */}

      <label htmlFor="email">{t("fullName")}</label>
      <input
        className={clsx("mb-5 rounded border bg-gray-200 px-5 py-2", {
          "border-red-500": errors.name,
        })}
        type="text"
        autoFocus
        {...register("name", { required: true })}
      />

      <label htmlFor="email">{t("email")}</label>
      <input
        className={clsx("mb-5 rounded border bg-gray-200 px-5 py-2", {
          "border-red-500": errors.email,
        })}
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <label htmlFor="email">{t("password")}</label>
      <input
        className={clsx("mb-5 rounded border bg-gray-200 px-5 py-2", {
          "border-red-500": errors.password,
        })}
        type="password"
        {...register("password", { required: true, minLength: 6 })}
      />

      <span className="text-red-500">{errorMessage} </span>

      <button className="btn-primary">{t("submitRegister")}</button>

      {/* divisor l ine */}
      <div className="my-5 flex items-center">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">{t("or")}</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        {t("loginTitle")}
      </Link>
    </form>
  );
};
