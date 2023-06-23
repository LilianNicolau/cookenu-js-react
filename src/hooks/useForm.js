import React from 'react'
import { useState } from 'react';

export default function useForm(initialValues) {

  const [form, setForm] = useState(initialValues);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const limparDados = () => {
    setForm(initialValues)
  }

  return [form, onChange, limparDados];
}
