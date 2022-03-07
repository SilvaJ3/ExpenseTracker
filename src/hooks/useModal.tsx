import React, { useState } from 'react'

export const useModal = () => {

const [displayModal, setDisplayModal] = useState<boolean>(false)

  return {
    displayModal, 
    setDisplayModal
  }
}