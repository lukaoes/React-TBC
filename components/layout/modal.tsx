'use client'

import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode
}

const Modal = ({ children }: Props) => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? createPortal(<div className='overlay'>{children}</div>, document.getElementById('modal-container') ?? document.body) : null;
}

export default Modal;