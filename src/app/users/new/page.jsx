'use client';

import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import React from 'react';


const shell =
  "rounded-xl border border-border/70 bg-linear-to-b from-neutral-50/90 to-white p-4 ring-1 ring-black/5 dark:from-neutral-900/80 dark:to-neutral-900 dark:ring-white/10";
const field =
  "rounded-xl border border-border/80 bg-surface shadow-sm ring-1 ring-black/5 transition-[box-shadow,border-color] focus-visible:ring-2 focus-visible:ring-neutral-400/25 dark:ring-white/10 dark:focus-visible:ring-neutral-500/30";

const NewUserPage = () => {


    const onSubmit =  async (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);
        const newUser = Object.fromEntries(formData.entries());
        console.log(newUser);
        
       const response = await fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        }).then((response) => response.json());
        console.log('Response:',response);

    }
 

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl font-bold flex justify-center items-center h-[8vh]">Add New User</h1>
            <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset className={shell}>
        <Fieldset.Legend className="font-medium text-neutral-800 dark:text-neutral-100">
          Profile Settings
        </Fieldset.Legend>
        <Description className="text-neutral-600 dark:text-neutral-400">
          Update your profile information.
        </Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input className={field} placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input className={field} placeholder="john@example.com" />
            <FieldError />
          </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
           Submit
          </Button>
          <Button type="reset" variant="secondary" view="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
           </div> 

    );
};

export default NewUserPage;