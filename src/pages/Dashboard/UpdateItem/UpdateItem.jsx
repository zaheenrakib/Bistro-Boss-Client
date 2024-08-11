import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { useLoaderData } from 'react-router-dom'

const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item)
  return (
    <SectionTitle heading="Update an Item" subHeading="Refresh info"></SectionTitle>
  )
}

export default UpdateItem