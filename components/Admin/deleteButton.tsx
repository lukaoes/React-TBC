'use client'

import { deleteUserAction } from "../../actions"

const DeleteButton = ({ id }: {id : number }) => {
  return <button onClick={() => deleteUserAction(id)}>❌</button>
}

export default DeleteButton
