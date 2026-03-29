/* ============================================================
   MENU PAGE — Roma D'Italia
   Design: "La Dolce Vita" — Cinematic Italian Poster Style
   Full dinner & lunch menu with category tabs
   ============================================================ */

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PASTA_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/roma_pasta_dish-2te7QfZ3Xug98t6b9XBkUw.webp";
const PIZZA_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/roma_pizza_dish-PZASZWGuZgReJGgSNXJvm6.webp";
const SEAFOOD_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/roma_seafood_dish-3KkbYAHZGanYBTt4aQz2hf.webp";

type MenuItem = {
  name: string;
  price: string;
  description: string;
  note?: string;
};

type MenuSection = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

const dinnerMenu: MenuSection[] = [
  {
    title: "Appetizers",
    items: [
      { name: "Pepperoni Bread", price: "11.75", description: "Fresh pizza dough stuffed with pepperoni, romano and mozzarella cheese, glazed with butter and garlic. Served with a side of meat sauce.", note: "Cheese bread and spinach bread also available!" },
      { name: "Italian Clam Catch", price: "11.75", description: "Fresh clams steamed in butter, garlic, white wine and spices. Choice of red tomato sauce or white wine sauce." },
      { name: "Sausage Bread", price: "11.75", description: "Fresh pizza dough stuffed with mild Italian sausage, mozzarella and romano cheese, glazed with butter and garlic. Served with a side of meat sauce." },
      { name: "Calamari Fritti", price: "13.95", description: "Fresh calamari dusted in flour, deep-fried, served with side of marinara sauce and lemon." },
      { name: "Sautéed Mushrooms", price: "10.25", description: "Fresh mushrooms sautéed in butter, garlic, wine and Italian spices." },
      { name: "Bruschetta", price: "8.75", description: "Delicately spiced tomatoes, basil, and red onions served with homemade garlic bread." },
      { name: "Italian Mussels", price: "11.25", description: "Fresh mussels steamed in butter, garlic, white wine and spices. Choice of red tomato sauce or white wine sauce." },
    ],
  },
  {
    title: "Soups & Salads",
    items: [
      { name: "Antipasto", price: "Petite 11.95 / Reg 14.95", description: "Mixed greens with chopped pepperoncini, tomatoes, Bermuda onions, mortadella, provolone cheese and salami with house vinaigrette dressing." },
      { name: "Caprese", price: "12.95", description: "Buffalo mozzarella, tomatoes, garlic, olive oil & basil. Bermuda onions on request." },
      { name: "Classic Green", price: "5.75", description: "Mixed greens with tomatoes, red onions, mozzarella and house vinaigrette dressing." },
      { name: "Grilled Chicken Salad", price: "Petite 11.95 / Reg 14.95", description: "Marinated chicken breast with fresh basil, tomatoes, mozzarella, and red onion served over mixed greens with house vinaigrette dressing." },
      { name: "Grilled Salmon Salad", price: "17.95", description: "Grilled salmon served over a bed of mixed greens and a dressing of fresh tomatoes, red onions, basil, olive oil & garlic. Topped with house vinaigrette dressing." },
      { name: "Caesar Salad", price: "5.75", description: "Fresh romaine lettuce, imported Romano cheese, and croutons tossed in our Caesar dressing." },
      { name: "Calamari Fritti Salad", price: "Petite 13.95 / Reg 16.95", description: "Calamari fritti served over greens with black olives and a dressing of fresh tomatoes, red onions, basil, olive oil & garlic." },
      { name: "Chicken Caesar Salad", price: "Petite 11.95 / Reg 14.95", description: "Marinated chicken breast served over fresh romaine lettuce, imported Romano cheese, and croutons tossed in our caesar dressing." },
      { name: "Calabrese", price: "10.95", description: "Fresh tomatoes, red onions, garlic, olive oil and basil." },
      { name: "Soup and Salad Special", price: "13.95", description: "Bowl of your choice of our delicious homemade soup and a petite antipasto salad." },
      { name: "Homemade Soups", price: "Cup 4.95 / Bowl 6.45", description: "Minestrone, Chicken Rice, Vegetarian Lentil." },
    ],
  },
  {
    title: "Chicken",
    subtitle: "Served with Roma's homemade Italian bread. Entrées without pasta served with a side of mostaccioli pasta topped with meat sauce.",
    items: [
      { name: "Chicken Parmigiana", price: "18.45", description: "Breaded chicken breast topped with meat sauce and mozzarella cheese. Baked to perfection!" },
      { name: "Chicken Picatta", price: "17.95", description: "Boneless chicken breast sautéed with white wine, garlic, and capers." },
      { name: "Chicken D'Italia", price: "19.95", description: "Boneless chicken breast baked with eggplant, ham, sliced tomatoes and provolone. Topped with mushrooms in a creamy white wine sauce." },
      { name: "Chicken Marsala", price: "17.95", description: "Boneless chicken breast sautéed with Marsala wine, mushrooms, onions and spices." },
      { name: "Chicken Cacciatore", price: "17.95", description: "Boneless chicken breast pieces sautéed with spices, mushrooms and green bell peppers in red tomato sauce or white wine sauce." },
      { name: "Grilled Chicken", price: "19.45", description: "Fresh chicken grilled to perfection. Served with grilled vegetables and mostaccioli pasta tossed in our fresh tomato sauce with garlic and basil." },
      { name: "Chicken Fettucini Alfredo", price: "16.45", description: "Cut boneless chicken breast tossed with fettucini simmered in our homemade Alfredo sauce." },
      { name: "Polpette di Pollo", price: "14.95", description: "Homemade chicken meatballs in a fresh marinara sauce served over spaghetti.", note: "Tina's favorite!" },
      { name: "Angel Hair Chicken Fresco", price: "15.95", description: "Cut boneless chicken breast tossed with angel hair pasta in a crushed tomato sauce." },
      { name: "Tortellini Gustavo", price: "16.95", description: "Meat filled tortellini tossed in a creamy tomato sauce with pieces of chicken, mushrooms and onions." },
    ],
  },
  {
    title: "Veal",
    subtitle: "Served with Roma's homemade Italian bread. Entrées without pasta served with a side of mostaccioli pasta topped with meat sauce.",
    items: [
      { name: "Veal Sorrentino", price: "23.95", description: "Fillets of veal baked with mozzarella, mushrooms, bacon, onions and olives.", note: "Teresa's favorite!" },
      { name: "Veal Scallopini", price: "22.95", description: "Fillets of veal sautéed with mushrooms and onions in a Marsala wine sauce." },
      { name: "Veal Parmigiana", price: "22.95", description: "Breaded fillets of veal baked in meat sauce and topped with mozzarella cheese." },
      { name: "Veal Picatta", price: "22.95", description: "Fillets of veal sautéed with capers in a white wine sauce." },
    ],
  },
  {
    title: "Signature Pastas",
    subtitle: "Served with Roma's homemade Italian bread.",
    items: [
      { name: "Manicotti", price: "13.45", description: "Homemade crepes filled with ricotta cheese baked with meat sauce and topped with mozzarella. Marinara sauce upon request." },
      { name: "Fettucini Alfredo", price: "14.45", description: "Fettucini simmered in our homemade Alfredo Sauce." },
      { name: "Cannelloni", price: "Reg 14.95 / w/Alfredo 16.45", description: "Homemade crepes filled with ground veal baked with meat sauce and topped with mozzarella cheese." },
      { name: "Fettucini Roma", price: "15.95", description: "Fettucini in a creamy Alfredo sauce tossed with bacon and green peas." },
      { name: "Ravioli Casalingo", price: "14.45", description: "Meat or cheese ravioli baked with meat sauce and topped with mozzarella cheese." },
      { name: "Gnocchi Catanzaro", price: "16.45", description: "Homemade potato dumplings in a creamy marinara sauce." },
      { name: "Cheese Ravioli Fresco", price: "14.75", description: "Ricotta filled ravioli sautéed in a crushed tomato sauce." },
      { name: "Spaghetti Sausage della Casa", price: "14.95", description: "Sliced sausage tossed with spaghetti in a fresh delicately spiced tomato sauce." },
      { name: "Baked Lasagna", price: "14.45", description: "Meat and ricotta cheese layered with pasta, topped with meat sauce and mozzarella cheese." },
      { name: "Angel Hair Estiva", price: "13.95", description: "Angel hair pasta tossed with fresh tomatoes, red onions and feta cheese in a garlic and olive oil sauce." },
      { name: "Tortellini Alfredo", price: "15.95", description: "Cheese filled spinach pasta in a creamy Alfredo sauce." },
      { name: "Fusilli Sausage & Green Peppers", price: "14.95", description: "Sliced sausage, green peppers and onions tossed in curly shaped pasta in meat sauce. Calabrese Style." },
      { name: "Mostaccioli Arrabiata", price: "12.95", description: "Mostaccioli tossed with crushed tomatoes, basil, olive oil, garlic and spices (hot & spicy!)", note: "Available without spices as Mostaccioli Fresco." },
      { name: "Penne Amore", price: "15.45", description: "Penne pasta sautéed with mushrooms, prosciutto and onions in a creamy marsala sauce." },
      { name: "Linguini Giovanni", price: "12.45", description: "Linguini tossed with fresh spinach in a garlic & olive oil sauce." },
      { name: "Homemade Spinach Lasagna", price: "13.95", description: "Spinach and ricotta cheese filled pasta baked with marinara sauce and topped with mozzarella cheese." },
      { name: "Linguini with Baby Clams", price: "15.95", description: "Your choice of red tomato sauce or white wine sauce." },
      { name: "Angel Hair Teresa", price: "13.95", description: "Angel hair pasta tossed with capers, onions, black olives, crushed tomatoes, basil, garlic and olive oil." },
      { name: "Spaghetti Pesto", price: "13.95", description: "Spaghetti tossed with pine nuts in a creamy basil sauce." },
    ],
  },
  {
    title: "Fresh Seafood",
    subtitle: "Served with Roma's homemade Italian bread.",
    items: [
      { name: "Fresh Shell Combo", price: "20.95", description: "Fresh clams and fresh black mussels sautéed in garlic and white wine. Served over linguini pasta. Your choice of red tomato sauce or white wine sauce." },
      { name: "Fettucini Prima Classe", price: "21.95", description: "Fresh shrimp tossed with fettucini pasta in a creamy marinara sauce.", note: "Alfio's favorite!" },
      { name: "Linguini with Shrimp Marinara", price: "24.95", description: "Fresh jumbo shrimp sautéed in garlic sauce served over linguini with marinara sauce." },
      { name: "Shrimp Scampi", price: "24.95", description: "Jumbo shrimp sautéed in butter, white wine and garlic. Served with a side of mostaccioli with marinara sauce." },
      { name: "Fresh Black Mussels", price: "19.95", description: "Fresh black mussels sautéed in garlic and white wine, served over linguini pasta. Your choice of red tomato sauce or white wine sauce." },
      { name: "Fresh Clams", price: "20.95", description: "Fresh clams in shell sautéed in garlic and white wine, served over linguini. Your choice of red tomato sauce or white wine sauce." },
      { name: "Mixed Seafood Platter", price: "26.95", description: "Fresh clams, mussels, shrimp, scallops, calamari and white fish sautéed in garlic and white wine, served over linguini pasta. Your choice of red tomato sauce or white wine sauce." },
      { name: "Fresh Jumbo Scallops", price: "25.95", description: "Fresh jumbo scallops served over linguini pasta in your choice of picatta, calabrese or limone sauce. Also available in red tomato sauce or white wine sauce." },
      { name: "Grilled Salmon", price: "23.95", description: "Fresh salmon grilled to perfection. Served with grilled vegetables and mostaccioli pasta tossed in our crushed tomato sauce with garlic and basil." },
      { name: "Cioppino", price: "35.95", description: "Italian style seafood stew!" },
    ],
  },
  {
    title: "Delicacies",
    subtitle: "Served with Roma's homemade Italian bread.",
    items: [
      { name: "Sausage and Green Platter", price: "16.45", description: "Calabrese style sausage and green peppers simmered in tomato sauce served with side of mostaccioli pasta with meat sauce." },
      { name: "Baked Mostaccioli Sigiliano", price: "13.45", description: "Mostaccioli baked with mushrooms, ricotta cheese, diced eggplant and topped with meat sauce and mozzarella cheese." },
      { name: "Eggplant Sorrentino", price: "15.45", description: "Baked rolls of eggplant stuffed with ricotta, mozzarella, eggs, romano cheese and herbs then topped with meat sauce. Served with a side of mostaccioli pasta with meat sauce.", note: "Louie's favorite!" },
      { name: "Eggplant Parmigiana", price: "15.45", description: "Served with a side of mostaccioli pasta with meat sauce or marinara sauce." },
      { name: "Spaghetti Roma D'Italia", price: "13.45", description: "Spaghetti baked with mushrooms and ricotta cheese then topped with meat sauce and mozzarella." },
    ],
  },
  {
    title: "Pizza",
    subtitle: "Roma's original New York style hand thrown pizza crust. All pizzas & breads made to order!",
    items: [
      { name: "Cheese Pizza", price: "Bambino 10\" 11.75 / Small 12\" 14.25 / Large 14\" 16.75", description: "Classic cheese pizza on Roma's hand-thrown New York style crust." },
      { name: "Calzone Pocket Pizza", price: "Bambino 14.95 / Small 18.50 / Large 21.95", description: "Baked crust stuffed with ricotta, mozzarella, parmesan cheese and spices. Served with a side of meat sauce." },
      { name: "Traditional Toppings", price: "1.20 / 1.70 / 2.25", description: "Bacon, Basil, Fresh Garlic, Green Bell Peppers, Ham, Jalapeños, Meatballs, Mushrooms, Olives, Onions, Pepperoni, Pineapple, Salami, Sausage." },
      { name: "Gourmet Toppings", price: "1.70 / 2.25 / 2.95", description: "Alfredo Sauce, Anchovies, Artichoke Hearts, Eggplant, Extra Cheese, Feta Cheese, Ricotta Cheese, Spinach, Fresh Tomatoes, Sun Dried Tomatoes.", note: "For thick crust add $3.75" },
    ],
  },
  {
    title: "Specialty Pizzas & Breads",
    subtitle: "Roma's original New York style hand thrown pizza crust. Bambino 8\" / Small 12\" / Large 14\"",
    items: [
      { name: "Roma Special", price: "16.45 / 19.95 / 22.95", description: "Meatball, green peppers, sausage, pepperoni, mushrooms and onions." },
      { name: "Fresh Tomato Calabrese", price: "15.95 / 19.45 / 22.45", description: "Fresh sliced tomatoes, basil, garlic, romano cheese and olive oil." },
      { name: "Grilled Chicken Pizza", price: "16.45 / 19.95 / 22.95", description: "Marinated chicken breast with red onion, basil and olive oil with fresh and traditional mozzarella cheese." },
      { name: "Vegetarian Pizza", price: "16.45 / 19.95 / 22.95", description: "Onions, olives, green bell peppers, fresh tomatoes and mushrooms." },
      { name: "Four Cheese Pizza", price: "16.45 / 19.95 / 22.95", description: "Buffalo mozzarella, fresh mozzarella, romano and ricotta cheese with tomatoes, olive oil and basil." },
      { name: "Spinach Bread", price: "11.75", description: "Fresh pizza dough stuffed with spinach, romano and mozzarella cheese, glazed with garlic and butter. Served with a side of marinara." },
      { name: "Mozzarella Bread", price: "10.75", description: "Fresh pizza dough stuffed with romano and mozzarella cheese, glazed with garlic and butter. Served with a side of marinara." },
    ],
  },
  {
    title: "Traditional Pastas",
    subtitle: "Served with Roma's homemade Italian bread. Choice of pasta: Rigatoni • Spaghetti • Linguini • Fettucini • Angel Hair • Mostaccioli • Fusilli",
    items: [
      { name: "Meat Sauce", price: "10.75", description: "Papa Dominic's original recipe." },
      { name: "Marinara Sauce", price: "10.75", description: "Original recipe simmered tomato sauce without meat." },
      { name: "Two Meatballs", price: "14.45", description: "Served with homemade meat sauce." },
      { name: "Two Sausage", price: "14.45", description: "Served with homemade meat sauce." },
      { name: "Bolognese", price: "12.75", description: "Homemade meat sauce sautéed with mushroom and garlic." },
      { name: "Garlic & Oil", price: "11.75", description: "Prepared with fresh garlic, oil and spices." },
      { name: "Catanzaro", price: "13.25", description: "Creamy, tangy marinara sauce." },
      { name: "Ravioli", price: "14.45", description: "Meat or cheese ravioli topped with meat or marinara sauce." },
      { name: "1/2 and 1/2 Special", price: "12.95", description: "1/2 spaghetti and 1/2 meat or cheese ravioli topped with meat sauce or marinara sauce.", note: "No variations please!" },
    ],
  },
  {
    title: "Hot Sandwiches",
    subtitle: "Served on Roma's homemade Italian bread.",
    items: [
      { name: "Meatball Sandwich", price: "Reg 10.45 / w/green peppers 10.95", description: "Topped and baked with meat sauce and mozzarella." },
      { name: "Eggplant Parmigiana Sandwich", price: "10.45", description: "Topped and baked with meat sauce and mozzarella." },
      { name: "Chicken Parmigiana Sandwich", price: "11.45", description: "Topped and baked with meat sauce and mozzarella." },
      { name: "Sausage Sandwich", price: "Reg 10.45 / w/green peppers 10.95", description: "Topped and baked with meat sauce and mozzarella with green peppers." },
      { name: "Veal Parmigiana Sandwich", price: "13.95", description: "Topped and baked with meat sauce and mozzarella." },
    ],
  },
  {
    title: "Side Orders & Beverages",
    items: [
      { name: "Garlic Bread", price: "2.95", description: "Homemade bread topped with garlic butter, grated romano, and parsley." },
      { name: "Side of Meatballs or Sausage", price: "6.45", description: "" },
      { name: "Soft Drinks", price: "3.25", description: "Coke, Diet Coke, Mr. Pibb, Sprite, Lemonade." },
      { name: "Arnold Palmer / Roy Rogers / Shirley Temple", price: "3.50", description: "" },
      { name: "Iced Tea", price: "3.25", description: "" },
      { name: "Milk", price: "3.25", description: "" },
      { name: "Apple Juice", price: "3.50", description: "" },
      { name: "Pellegrino Sparkling Mineral Water", price: "5.25", description: "" },
      { name: "Abita Bottled Root Beer", price: "4.95", description: "" },
    ],
  },
];

const lunchMenu: MenuSection[] = [
  {
    title: "Salads",
    items: [
      { name: "Antipasto", price: "Petite 11.95 / Reg 14.95", description: "Mixed greens with chopped pepperoncini, tomatoes, Bermuda onions, mortadella, provolone cheese and salami with house vinaigrette dressing." },
      { name: "Caprese", price: "12.95", description: "Buffalo mozzarella, tomatoes, garlic, olive oil & basil." },
      { name: "Classic Green", price: "5.75", description: "Mixed greens with tomatoes, red onions, mozzarella and house vinaigrette dressing." },
      { name: "Grilled Chicken Salad", price: "Petite 11.95 / Reg 14.95", description: "Marinated chicken breast with fresh basil, tomatoes, mozzarella, and red onion served over mixed greens." },
      { name: "Caesar Salad", price: "5.75", description: "Fresh romaine lettuce, imported Romano cheese, and croutons tossed in our Caesar dressing." },
      { name: "Chicken Caesar Salad", price: "Petite 11.95 / Reg 14.95", description: "Marinated chicken breast served over fresh romaine lettuce, imported Romano cheese, and croutons tossed in our caesar dressing." },
      { name: "Calabrese", price: "10.95", description: "Fresh tomatoes, red onions, garlic, olive oil and basil." },
    ],
  },
  {
    title: "Lunch Combos",
    subtitle: "Served with Roma's homemade Italian bread.",
    items: [
      { name: "Soup & Salad Special", price: "13.95", description: "Bowl of your choice of our delicious homemade soup and a petite antipasto salad." },
    ],
  },
  {
    title: "Homemade Soups",
    items: [
      { name: "Homemade Soups", price: "Cup 4.95 / Bowl 6.45", description: "Minestrone, Chicken Rice, Vegetarian Lentil." },
    ],
  },
  {
    title: "Hot Sandwiches",
    subtitle: "Served on Roma's homemade Italian bread.",
    items: [
      { name: "Meatball Sandwich", price: "Reg 10.45 / w/green peppers 10.95", description: "Topped and baked with meat sauce and mozzarella." },
      { name: "Eggplant Parmigiana Sandwich", price: "10.45", description: "Topped and baked with meat sauce and mozzarella." },
      { name: "Chicken Parmigiana Sandwich", price: "11.45", description: "Topped and baked with meat sauce and mozzarella." },
      { name: "Sausage Sandwich", price: "Reg 10.45 / w/green peppers 10.95", description: "Topped and baked with meat sauce and mozzarella with green peppers." },
      { name: "Veal Parmigiana Sandwich", price: "13.95", description: "Topped and baked with meat sauce and mozzarella." },
    ],
  },
  {
    title: "Cold Sandwiches",
    subtitle: "Served on Roma's homemade Italian bread.",
    items: [
      { name: "Italian Sub", price: "10.45", description: "Salami, ham, provolone, lettuce, tomato, onion and house dressing." },
      { name: "Turkey Sub", price: "10.45", description: "Turkey, provolone, lettuce, tomato, onion and house dressing." },
    ],
  },
  {
    title: "Signature Pastas",
    subtitle: "Served with Roma's homemade Italian bread.",
    items: [
      { name: "Manicotti", price: "13.45", description: "Homemade crepes filled with ricotta cheese baked with meat sauce and topped with mozzarella." },
      { name: "Fettucini Alfredo", price: "14.45", description: "Fettucini simmered in our homemade Alfredo Sauce." },
      { name: "Baked Lasagna", price: "14.45", description: "Meat and ricotta cheese layered with pasta, topped with meat sauce and mozzarella cheese." },
      { name: "Linguini Giovanni", price: "12.45", description: "Linguini tossed with fresh spinach in a garlic & olive oil sauce." },
      { name: "Mostaccioli Arrabiata", price: "12.95", description: "Mostaccioli tossed with crushed tomatoes, basil, olive oil, garlic and spices (hot & spicy!)" },
    ],
  },
  {
    title: "Delicacies",
    subtitle: "Served with Roma's homemade Italian bread.",
    items: [
      { name: "Eggplant Parmigiana", price: "15.45", description: "Served with a side of mostaccioli pasta with meat sauce or marinara sauce." },
      { name: "Spaghetti Roma D'Italia", price: "13.45", description: "Spaghetti baked with mushrooms and ricotta cheese then topped with meat sauce and mozzarella." },
    ],
  },
  {
    title: "Specialty Bread",
    items: [
      { name: "Pepperoni Bread", price: "11.75", description: "Fresh pizza dough stuffed with pepperoni, romano and mozzarella cheese, glazed with butter and garlic." },
      { name: "Sausage Bread", price: "11.75", description: "Fresh pizza dough stuffed with mild Italian sausage, mozzarella and romano cheese, glazed with butter and garlic." },
      { name: "Spinach Bread", price: "11.75", description: "Fresh pizza dough stuffed with spinach, romano and mozzarella cheese, glazed with garlic and butter." },
      { name: "Mozzarella Bread", price: "10.75", description: "Fresh pizza dough stuffed with romano and mozzarella cheese, glazed with garlic and butter." },
    ],
  },
  {
    title: "Side Orders",
    items: [
      { name: "Garlic Bread", price: "2.95", description: "Homemade bread topped with garlic butter, grated romano, and parsley." },
      { name: "Side of Meatballs or Sausage", price: "6.45", description: "" },
    ],
  },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="menu-item-hover flex items-start justify-between py-4 px-3 border-b border-[#1A3A2A]/8 gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h4 className="font-display text-lg font-semibold text-[#1A3A2A]">{item.name}</h4>
          {item.note && (
            <span className="font-body text-xs italic text-[#C0392B]">{item.note}</span>
          )}
        </div>
        {item.description && (
          <p className="font-body text-sm text-[#2D1B0E]/60 mt-1 leading-relaxed">{item.description}</p>
        )}
      </div>
      <div className="flex-shrink-0 text-right">
        <span className="font-display text-base font-semibold text-[#C0392B] whitespace-nowrap">${item.price}</span>
      </div>
    </div>
  );
}

function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <div className="mb-10">
      <div className="mb-4">
        <h3 className="font-display text-3xl font-bold italic text-[#1A3A2A]">{section.title}</h3>
        {section.subtitle && (
          <p className="font-body text-sm italic text-[#2D1B0E]/50 mt-1">{section.subtitle}</p>
        )}
        <div className="mt-2 h-px bg-[#1A3A2A]/15" />
      </div>
      <div>
        {section.items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<"dinner" | "lunch">("dinner");

  const currentMenu = activeTab === "dinner" ? dinnerMenu : lunchMenu;

  return (
    <div className="min-h-screen bg-[#FAF6EE]">
      <Navbar />

      {/* Page Header */}
      <div className="bg-[#1A3A2A] pt-24 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${PASTA_URL})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="ornament text-sm mb-3 text-[#D4A843]">
            <span className="w-8 h-px bg-[#D4A843] inline-block" />
            Roma D'Italia
          </p>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-white">
            Our <span className="italic text-[#D4A843]">Menu</span>
          </h1>
          <p className="font-body text-lg text-white/60 mt-4 italic max-w-xl mx-auto">
            Authentic Italian recipes crafted with love since 1961.
            All entrées served with Roma's homemade Italian bread.
          </p>
          <p className="font-ui text-sm text-white/50 mt-3">
            Call to order:{" "}
            <a href="tel:7145440273" className="text-[#D4A843] hover:underline">
              714.544.0273
            </a>
          </p>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#FAF6EE] border-b border-[#1A3A2A]/15 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0">
            {(["dinner", "lunch"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-4 px-8 font-ui text-sm font-semibold tracking-widest uppercase transition-all duration-200 ${
                  activeTab === tab
                    ? "text-[#1A3A2A]"
                    : "text-[#2D1B0E]/40 hover:text-[#2D1B0E]/70"
                }`}
              >
                {tab === "dinner" ? "Dinner Menu" : "Lunch Menu"}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C0392B]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column — first half of sections */}
          <div className="lg:col-span-2">
            {currentMenu.map((section) => (
              <MenuSectionBlock key={section.title} section={section} />
            ))}
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-36 space-y-6">
              {/* Featured dish images */}
              <div className="overflow-hidden rounded-sm shadow-md">
                <img src={PIZZA_URL} alt="Roma Special Pizza" className="w-full h-48 object-cover" />
              </div>
              <div className="overflow-hidden rounded-sm shadow-md">
                <img src={SEAFOOD_URL} alt="Fresh Seafood" className="w-full h-48 object-cover" />
              </div>

              {/* Order card */}
              <div className="bg-[#1A3A2A] text-white p-6 rounded-sm">
                <h3 className="font-display text-2xl font-bold italic text-[#D4A843] mb-2">
                  Ready to Order?
                </h3>
                <p className="font-body text-sm text-white/70 mb-4">
                  Call us to place your order for dine-in, takeout, or catering.
                </p>
                <a href="tel:7145440273" className="btn-roma-red w-full text-center block mb-3">
                  Call (714) 544-0273
                </a>
                <div className="text-xs text-white/40 font-ui text-center">
                  Lunch served weekdays until 3 PM
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-white border border-[#1A3A2A]/10 p-6 rounded-sm">
                <h4 className="font-ui text-xs font-semibold tracking-widest uppercase text-[#D4A843] mb-4">
                  Hours
                </h4>
                <div className="space-y-2 text-sm font-body">
                  <div className="flex justify-between">
                    <span className="text-[#2D1B0E]/70">Sun, Tues–Thurs</span>
                    <span className="text-[#1A3A2A] font-medium">11am–9pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2D1B0E]/70">Fri & Sat</span>
                    <span className="text-[#1A3A2A] font-medium">11am–9:30pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2D1B0E]/40">Monday</span>
                    <span className="text-[#2D1B0E]/40 italic">Closed</span>
                  </div>
                </div>
              </div>

              {/* Allergen notice */}
              <div className="bg-[#FAF6EE] border border-[#1A3A2A]/10 p-4 rounded-sm">
                <p className="font-body text-xs text-[#2D1B0E]/50 leading-relaxed italic">
                  Please note that all substitutions and changes are subject to additional charges. 
                  A gratuity may be added to parties of 8 or more. Our menu contains major allergens 
                  including shellfish, eggs, fish, milk, tree nuts, and wheat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
