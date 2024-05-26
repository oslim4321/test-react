import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const GenericFormInputs = ({
  form,
  name,
  placeholder,
  type,
  label,
  required,
  description,
  options,
}) => {
  switch (type) {
    case "text":
    case "password":
    case "email":
    case "number":
      return (
        <div>
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                {required && <span className="text-red-400">*</span>}
                <FormControl>
                  <Input placeholder={placeholder} {...field} />
                </FormControl>
                <FormDescription>{description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      );
    case "textarea":
      return (
        <div>
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                {required && <span className="text-red-400">*</span>}
                <FormControl>
                  <Textarea placeholder={placeholder} {...field} />
                </FormControl>
                <FormDescription>{description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      );
    case "select":
      return (
        <div className="w-full">
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                {required && <span className="text-red-400">*</span>}
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="w-full"
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent classNamew="w-full">
                      {options?.map((opt, i) => (
                        <SelectItem
                          key={i}
                          value={opt.value}
                          classNamew="w-full"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>{description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      );
  }
};

export default GenericFormInputs;
