import { useState } from "react";
import menu from "./data";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const categories = ["all", ...new Set(menu.map((item) => item.category))];
  //console.log(categories);
  const filterMenu = (cate) => {
    if (cate === "all") {
      setMenuItems(menu);
      return;
    }
    const newMenu = menu.filter((item) => item.category === cate);
    setMenuItems(newMenu);
  };
  return (
    <main>
      <section className="menu">
        <Title text="Our menu" />
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
