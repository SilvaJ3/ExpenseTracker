import React, { useState } from 'react'
import "../"

export const useForm = () => {

const [displayForm, setDisplayForm] = useState<boolean>(false)

  return {
    displayForm, 
    setDisplayForm
  }
}