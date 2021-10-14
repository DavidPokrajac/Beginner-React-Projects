import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import SortCont from "./SortCont";
import FilterCont from "./FilterCont";

export default function App() {

  const [items, setItems] = useState([])
  const [openSortCt, setOpenSortCt] = useState(false)
  const [openFilterCt, setOpenFilterCt] = useState(false)

  const [term1, setTerm1] = useState("")
  const [term2, setTerm2] = useState("")
  const [price, setPrice] = useState("luxury")
  const [year, setYear] = useState("")

  useEffect(() => {
    fetch("https://private-d5ae92-carsapi1.apiary-mock.com/cars")
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
  }, [])

  function setManName(e) {
    setTerm1(e.target.value); 
  }

  function setModName(e) {
    setTerm2(e.target.value);
  }

  function setPriceHandler(e) {
    setPrice(e.target.value);
  }

  function setYearHandler(e) {
    setYear(e.target.value);
  }

  function filterItems(item) {
    if (term1 && !item.make.includes(term1) && !item.make.toUpperCase().includes(term1.toUpperCase())) return false;
    if (term2 && !item.model.includes(term2) && !item.model.toUpperCase().includes(term2.toUpperCase())) return false;
    return true;
  }

  function filterIt(item) {
    switch(price) {
      case "cheapest":
        return item.price < 20000;
        break;
      case "ordinary":
        return item.price >= 20000 && item.price <= 50000;
        break;
      case "expensive":
        return item.price >= 50000 && item.price <= 100000;
        break;
      case "luxury":
        return item.price >= 100000;
        break;
    }
  }

  function filterYear(item){
    switch(year) {
      case "2015":
        return item.year === 2015;
        break;
      case "2017":
        return item.year === 2017;
        break;
    }
    return item;
  }

  function reverse() {
    items.reverse();
    setItems([...items])
  }

  function sortHigherHP() {
    items.sort((a, b) => {
       return b.horsepower - a.horsepower;
     });
    setItems([...items]);
  }

  function sortLowerHP() {
    items.sort((a, b) => {
       return a.horsepower - b.horsepower;
     });
    setItems([...items]);
  }

  function sortOldestAge() {
    items.sort((a, b) => {
       return a.year - b.year;
     });
    setItems([...items]);
  }

  function sortNewestAge() {
    items.sort((a, b) => {
       return b.year - a.year;
     });
    setItems([...items]);
  }

  function sortHighestPrice() {
    items.sort((a, b) => {
       return b.price - a.price;
     });
    setItems([...items]);
  }

  function sortLowestPrice() {
    items.sort((a, b) => {
       return a.price - b.price;
     });
    setItems([...items]);
  }

  function hey() {
    setOpenSortCt(!openSortCt)
    if(openFilterCt){
      setOpenFilterCt(false)
    }
  }  

  function hi() {
    setOpenFilterCt(!openFilterCt)
    if(setOpenSortCt){
      setOpenSortCt(false)
    }
  }  

  return (
    <div>
      <Header />
      <Navigation 
        hi={hi} 
        hey={hey} 
        openFilterCt={openFilterCt} 
        openSortCt={openSortCt}
      />
      <FilterCont 
        openFilterCt={openFilterCt}
        term1={term1}
        term2={term2}
        price={price}
        year={year} 
        setManName={setManName}
        setModName={setModName}
        setPriceHandler={setPriceHandler}
        setYearHandler={setYearHandler}
      />
      <SortCont 
        openSortCt={openSortCt}
        reverse ={reverse}
        sortHigherHP={sortHigherHP} 
        sortLowerHP={sortLowerHP}
        sortOldestAge={sortOldestAge}
        sortNewestAge={sortNewestAge}
        sortHighestPrice={sortHighestPrice}
        sortLowestPrice={sortLowestPrice}
      />
       
      {items.filter(filterItems).filter(filterIt).filter(filterYear).slice(0, 50).map((a, index) => {
        return (
          <div key={index} className="card">
            <p>Manufacturer: {a.make[0].toUpperCase() + a.make.slice(1)}</p>
            <p>Model: {a.model}</p>
            <p>Year: {a.year}</p>
            <p>Horsepower: {a.horsepower} HS</p>
            <p>Price: {a.price} $</p>
          </div>
        )
      })}
      <Footer />
    </div>
  );
}
