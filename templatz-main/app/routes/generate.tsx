import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Form, useActionData, useNavigate, useNavigation } from "@remix-run/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {  ActionFunctionArgs } from "@remix-run/node";
import { generateLetter } from "~/utils/genai/generateLetter";
import formFields from "~/assests/letterFormFields.json"
import { LetterType } from "~/utils/genai/letterType";
import { useLetterData } from "~/utils/letterContext";
import { useEffect } from "react";

function GenerateLetter() {
  const letter = useActionData<{response:LetterType}>()
  const navigation = useNavigation();
  const navigate = useNavigate()
  const isSubmitting = navigation.state === "submitting"
  const {setLetterData, letterData} = useLetterData();
  useEffect(()=>{
    if(letter?.response){
      setLetterData(letter.response)
      navigate("/letter")
    }
  }, [letter])
  console.log(letterData,"context");
  
  return (
    <>
    <Form className="space-y-3 max-w-[500px] mx-auto pt-2" method="post" >
      {formFields.map((value) => {
        return (
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
                      className="mt-1"
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      id={field.name}
                      defaultValue={""}
                      required
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        );
      })}

      <div className="flex justify-center">
        <Button className="relative size-32 " variant={"default"} disabled={isSubmitting}>{isSubmitting?"Generating...":"Generate with AI"}</Button>
      </div>
    </Form>
    </>
  );
}
export default GenerateLetter;


export async function action({request} : ActionFunctionArgs ){
  console.log('submmited')
  const formData = await request.formData();
  let promptStr = "";
  for(let [name, value] of formData.entries()){
    promptStr+=`${name} : ${value}\n`
  }
  const letter = await generateLetter(promptStr)

  return letter;
}


