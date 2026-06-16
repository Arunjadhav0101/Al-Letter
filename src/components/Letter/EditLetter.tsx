import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { updateLetter } from "@/store/letterSlice";
import { LetterType } from "./LetterType";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
type LetterEditFormProps = {
  letterData: LetterType | null;
};

const LetterEditForm: React.FC<LetterEditFormProps> = ({ letterData }) => {
  const { control, handleSubmit, reset } = useForm<LetterType>({
    defaultValues: letterData || {},
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (letterData) {
      reset({...letterData, body: Array.isArray(letterData.body)? letterData.body.join("\n"):letterData.body});
    }
  }, [letterData, reset]);

  const onSubmit = (data: LetterType) => {
    dispatch(updateLetter({...data, body: !Array.isArray(data.body)? data.body.split("\n"):data.body}));
  };

  if (!letterData) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
      <div>
        <label>Sender Name:</label>
        <Controller
          name="sender.name"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <div>
        <label>Sender Address:</label>
        <Controller
          name="sender.address"
          control={control}
          render={({ field }) => <Textarea {...field} />}
        />
      </div>
      <div>
        <label>Sender Phone:</label>
        <Controller
          name="sender.phone"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <div>
        <label>Date:</label>
        <Controller
          name="date"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <div>
        <label>Recipient Name:</label>
        <Controller
          name="recipient.name"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <div>
        <label>Recipient Title:</label>
        <Controller
          name="recipient.title"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <div>
        <label>Recipient Company:</label>
        <Controller
          name="recipient.company"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <div>
        <label>Recipient Address:</label>
        <Controller
          name="recipient.address"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <div>
        <label>Subject:</label>
        <Controller
          name="subject"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <div>
        <label>Greeting:</label>
        <Controller
          name="greeting"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <div>
        <label>Body:</label>
        <Controller
          name="body"
          control={control}
          render={({ field }) => <Textarea {...field} />}
        />
      </div>
      <div>
        <label>Closing:</label>
        <Controller
          name="closing"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <div>
        <label>Sender Details Name:</label>
        <Controller
          name="sender_details.name"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <div>
        <label>Sender Details Title:</label>
        <Controller
          name="sender_details.title"
          control={control}
          render={({ field }) => <Input type="text" {...field} />}
        />
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default LetterEditForm;