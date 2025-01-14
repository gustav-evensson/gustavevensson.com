"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { sendEmail } from "@/actions/resend";
import { toast } from "sonner";
import { useState } from "react";
import { LoaderCircle, Mail } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

type IFormInput = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<IFormInput>({
    mode: "onChange",
  });

  const [isSending, setIsSending] = useState(false);

  const doSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    setIsSending(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const res = await sendEmail(formData);

    if (res.ok) {
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
        className="p-2 px-3 outline-none rounded-bl-lg border w-full bg-background/30 focus-visible:ring-0 transition-[border] focus-visible:border-primary"
      />
      <input
        {...register("email")}
        type="text"
        placeholder="E-mail"
        className="p-2 px-3 outline-none rounded-bl-lg border w-full bg-background/30 focus-visible:ring-0 transition-[border] focus-visible:border-primary"
      />
      <textarea
        {...register("message")}
        placeholder="Message"
        className="p-2 px-3 outline-none rounded-bl-lg border w-full bg-background/30 focus-visible:ring-0 transition-[border] focus-visible:border-primary min-h-48"
      />
      {isSending ? (
        <div className="w-56 h-[42px] bg-primary text-primary-foreground rounded-bl-lg flex items-center justify-center">
          <LoaderCircle className="animate-spin" />
        </div>
      ) : (
        <InteractiveHoverButton
          text="Send message"
          type="submit"
          icon={<Mail className="w-4 h-4" />}
          className="w-56 rounded-none rounded-bl-lg bg-background/30"
          disabled={isSending}
        />
      )}
    </form>
  );
}
