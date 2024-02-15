import React, { Component } from "react";
import NavBar from "./navbar";
import VegetablePart from "./vegetablepart";
import MiddlePart from "./middlePart";
import MiddlePart2 from "./middlePart2";
import LastSecondPart from "./lastSecondPart";
import FirstPart from "./firstPart";

class MainComponent extends Component {
  state = {
    vegetables: [
      {
        img: "https://images-cdn.ubuy.co.in/6419288e96d7ba2fb701c6b2-dragon-fruit-pitahaya.jpg",
        name: "Organic Dragon Fruit",
        desc: "Dragon fruit is a tropical fruit that's low in calories and high in fiber and antioxidants. Some people say it tastes like a cross between a pear and a kiwi. ",
      },
      {
        img: "https://bonnieplants.com/cdn/shop/articles/BONNIE_brussels_sprouts_iStock-501881052-1800px_3ade3220-4d7f-419a-a78e-93cdeaa2cd9c.jpg?v=1642541962",
        name: "Organic Sprout Veggie",
        desc: "Sprouts are the newly germinated seeds or the tender roots of a legume grown following the sprouting process. The sprouting process turns lentils.",
      },
      {
        img: "https://www.greendna.in/cdn/shop/products/Spinach43_715x.jpg?v=1602165575",
        name: "Organic Spinach",
        desc: "Spinach (Spinacia oleracea) is a leafy green vegetable that originated in Persia. It belongs to the amaranth family and is related to beets and quinoa.",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZ1RkVkYCIL7ZthQaBwEsAXZq1V2pw3__QQ&s",
        name: "Organic Carrot",
        desc: "Carrots are rich in vitamins, minerals, and antioxidant compounds. As part of a balanced diet, carrots can help support immune function, wound healing.",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UDp76JDFHYMbaJgLtyvLBiNBM-avcJjOlg&s",
        name: "Organic Capsicum",
        desc: "Organic Red Capsicum, also known as red bell pepper, is a culinary gem that brings both visual appeal and a burst of sweetness to your dishes.",
      },
      {
        img: "https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-06/Type%20of%20cucumber.jpg",
        name: "Organic Cucumber",
        desc: "Cucumber is green-skinned fruit with safe to eat seeds and soft fair flesh. They are a rich basis of electrolytes and antioxidants. Cucumbers are 95 percent water.",
      },
    ],
    array: [
      {
        font: "fa-solid fa-leaf",
        desc: "ruits and vegetables are a great source of vitamins and minerals. 2 they not only gives us energy but also nourishes us physically. 3 eating fruits and vegetalbles increases the immune. 4 it also keeps you healthy",
        name: "Fresh Vegetables & Fruits",
      },
      {
        font: "fa-solid fa-hand",
        desc: "An organic vegetable is one that is free from chemicals such as pesticides and herbicides. These chemicals have traditionally been used by farmers and gardeners to help the plants free from insects and disease.",
        name: "Organic Vegetables",
      },
      {
        font: "fa-solid fa-tree",
        desc: "Fruits and vegetables contain important vitamins, minerals and plant chemicals. They also contain fibre. There are many varieties of fruit and vegetables available and many ways to prepare, cook and serve them. A diet high in fruit and vegetables can help protect you against cancer, diabetes and heart disease.",
        name: "Natural Vegetables & Fruits",
      },
      {
        font: "fa-solid fa-map-pin",
        desc: "Primary Countries means Australia, the Benelux countries, Canada, France, Germany, Italy, Japan, the Scandinavian countries, Spain, Switzerland, the United Kingdom and the United States.",
        name: "Primary Country Under",
      },
      {
        font: "fa-solid fa-glass-water-droplet",
        desc: "Alkaline water has a higher pH level than that of plain tap water. So proponents say that it can neutralize acid in your bloodstream. Some say that alkaline water can help prevent disease, such as cancer and heart disease. However, more research is needed to verify these claims.",
        name: "Alkaline Water",
      },
      {
        font: "fa-solid fa-glass-water",
        desc: "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice.",
        name: "Fresh-Juice",
      },
    ],
  };
  render() {
    let { vegetables } = this.state;
    return (
      <div>
        <NavBar />
        <FirstPart />
        <VegetablePart vegetables={vegetables} />
        <MiddlePart />
        <LastSecondPart array={this.state.array} />
        <MiddlePart2 />
      </div>
    );
  }
}

export default MainComponent;
