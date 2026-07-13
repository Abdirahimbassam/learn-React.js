
import React , { useState } from "react";

export const UseForm = (intialValues) => {

    const [ values , setValues ] = useState(intialValues)

    const handleChange = (e) => {
        const { name , value } = e.target;
        setValues ( { ...values , [name] : value })
    }

  return { values , handleChange }

}
