import React, { useEffect, useState } from "react";



const useDate = () => {
  const formatDate = (stringIn) => {
    const date = new Date(stringIn)
    const y = date.getFullYear()
    const m = date.getMonth()+1
    const d = date.getDate()
    const dateAsString = `${d}/${m}/${y}`
    return dateAsString
  }
  return {formatDate}
}

export default useDate