import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import GenericFormInputs from "@/shared/GenericFormInputs";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

let inputs = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your Email",
    required: true,
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    required: true,
    type: "password",
  },
];

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2),
});

const Form2 = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-[500px] mx-auto"
        >
          {inputs.map((elem, i) => (
            <GenericFormInputs key={i} form={form} {...elem} />
          ))}
          {/* <GenericFormInputs
            form={form}
            name={"email"}
            placeholder={"enter your emaio"}
            label={"Email"}
            required={true}
          />

          <GenericFormInputs
            form={form}
            name={"password"}
            placeholder={"enter your password"}
            label={"Password"}
            required={true}
          /> */}

          <Button>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Form2;
