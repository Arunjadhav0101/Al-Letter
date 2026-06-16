"use client";

import formFields from "@/lib/letter/formFields";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { generateLetter } from "@/lib/client/generateLetter";
import {  useState, useTransition } from "react";
import { setLetter, setShowLetter } from "@/store/letterSlice";
import { useDispatch } from "react-redux";

function LetterForm() {
  const { register, handleSubmit } = useForm<FieldValues>();
  const [error, setError] = useState("");
  const [isSubmitting, startLoading] = useTransition();
  const dispatch = useDispatch();

  const onSubmit = async (data: FieldValues) => {
    startLoading(async () => {
    dispatch(setLetter(null));
      try {
        const result = await generateLetter(data);
        if(result instanceof Error) {
          console.log("error", result.message);
        }
        console.log(result);
        dispatch(setLetter(result));
        dispatch(setShowLetter(true));
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          console.log(error.message);
        } else {
          setError("An unknown error occurred"); 
        }
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[400px] w-full md:max-w-[650px] mx-auto py-8 p-4"
    >
      <div className="grid gap-8">
        {formFields.map((value) => (
          <Card key={value.title}>
            <CardHeader>
              <CardTitle className="text-2xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {value.fields.map((field) => {
                return (
                  <div key={field.name}>
                    <label htmlFor={field.name}> {field.label}:</label>
                    <Input
                      {...register(field.name)}
                      className="mt-1"
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      id={field.name}
                      defaultValue={""}
                      required={field.isRequired}
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
        {error && <p>{error}</p>}
        <Button
          className="mx-auto w-[200px] p-5 font-bold"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Generating..." : "Generate"}
        </Button>
      </div>
    </form>
  );
}

export default LetterForm;
