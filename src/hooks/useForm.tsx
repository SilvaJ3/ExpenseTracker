import React, { useState } from 'react'

export const useForm = () => {

const [displayForm, setDisplayForm] = useState<boolean>(false)

  return {
    displayForm, 
    setDisplayForm
  }
}