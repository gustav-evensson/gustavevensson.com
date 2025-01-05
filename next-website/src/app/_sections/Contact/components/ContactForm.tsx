"use client";

import { useForm, SubmitHandler, set } from "react-hook-form";
import { sendEmail } from "@/actions/resend";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

type IFormInput = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm(){

  const {
    register,
    handleSubmit,
    reset
  } = useForm<IFormInput>({
    mode: "onChange"
  });

  const [isSending, setIsSending] = useState(false);

  const doSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {

    setIsSending(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const res = await sendEmail(formData);
    
    if(res.ok) {
      toast.success(res.message, { duration: 5000 });
      reset();
    } else {
      toast.error(res.message);
    }

    setIsSending(false);
  };

  return (
    <form onSubmit={handleSubmit(doSubmit)} className="w-full flex flex-col items-end gap-4">
      <input
        {...register("name")}
        type="text"
        placeholder="Name"
        autoComplete="off"
        className="p-2 px-3 rounded-bl-lg border border-transparent w-full bg-secondary focus-visible:ring-0 transition-[border] focus-visible:border-foreground"
      />
      <input
        {...register("email")}
        type="text"
        placeholder="E-mail"
        className="p-2 px-3 rounded-bl-lg border border-transparent w-full bg-secondary focus-visible:ring-0 transition-[border] focus-visible:border-foreground"
      />
      <textarea
        {...register("message")}
        placeholder="Message"
        className="p-2 px-3 rounded-bl-lg border border-transparent w-full bg-secondary focus-visible:ring-0 transition-[border] focus-visible:border-foreground min-h-48"
      />
      <button type="submit" className={cn("flex items-center justify-center w-full py-3 sm:py-0 sm:w-44 sm:h-12 rounded-bl-lg bg-foreground text-background transition hover:opacity-90 disabled:opacity-50")} disabled={isSending}>
        {isSending ? <ReloadIcon className="animate-spin" /> : "Send message"}
      </button>
    </form>
  );
}
