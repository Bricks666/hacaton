import { useState } from "react"
import { Form, Field } from "react-final-form"
import { Button } from "../../Shared/Button/Button"
import { Field as MyField } from "../../Shared/Field/Field"

import SearchStyle from './Search.module.css'

const onSubmit = (props) => {
  console.log(props)
}
export const Search = (props) => {
  const [showInput, toggleShow] = useState(false);
  console.log(showInput)
  return(
    <Form
    onSubmit={onSubmit}
    render={(props) => {
      console.log(props.form)
      return (
        <form className={SearchStyle.search} onSubmit={
          async (evt) => {
           await  props.handleSubmit(evt);
           props.form.reset();
           toggleShow(false)
          }
          }>
          <Field className={`${SearchStyle.field} ${showInput ? SearchStyle.showField: ""}`} name="search" component={MyField}
          placeholder="Введите название достопримечательности" />
          <Button onClick={showInput ? () => {} :  (evt) => {evt.preventDefault();toggleShow(true); props.form.focus("search")}} className={SearchStyle.button} type="submit"/>
        </form>
      )
    }}
    />
  )
}
