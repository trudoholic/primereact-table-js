// import React from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"

const Table = () => {
  const products = [
    {
      id: 1,
      name: "Apple Watch",
      price: "$350,000",
      category: "Accessories",
      quantity: "7",
      rating: "5",
    },
    {
      id: 2,
      name: "Fitness watch",
      price: "$10,000",
      category: "Fitness",
      quantity: "23",
      rating: "2",
    },
    {
      id: 3,
      name: "Beach dress",
      price: "$25,000",
      category: "Clothing",
      quantity: "5",
      rating: "4",
    },
    {
      id: 4,
      name: "Washing machine",
      price: "$260,000",
      category: "Electronics",
      quantity: "10",
      rating: "4",
    },
    {
      id: 5,
      name: "Blue Jeans",
      price: "$10,000",
      category: "Clothing",
      quantity: "50",
      rating: "5",
    },
    {
      id: 6,
      name: "Samsung Watch",
      price: "$270,000",
      category: "Accessories",
      quantity: "7",
      rating: "3",
    },
    {
      id: 7,
      name: "Yoga mat",
      price: "$15,000",
      category: "Fitness",
      quantity: "15",
      rating: "4",
    },
    {
      id: 8,
      name: "Jumpsuit",
      price: "$15,700",
      category: "Clothing",
      quantity: "30",
      rating: "5",
    },
    {
      id: 9,
      name: "Hand mixer",
      price: "$50,000",
      category: "Electronics",
      quantity: "10",
      rating: "4",
    },
    {
      id: 10,
      name: "Palazzo",
      price: "$12,000",
      category: "Clothing",
      quantity: "4",
      rating: "3",
    },
  ]

  return (
    <div className="table-wrapper">
      <h2 className="table-name">PrimeReact data table</h2>

      <DataTable
        value={products}
        responsiveLayout="scroll"
        showGridlines
        size="small"
        stripedRows
      >
        <Column field="name" header="Name"/>
        <Column field="price" header="Price"/>
        <Column field="category" header="Category"/>
        <Column field="quantity" header="Quantity"/>
        <Column field="rating" header="Rating"/>
      </DataTable>
    </div>
  )
}

export default Table