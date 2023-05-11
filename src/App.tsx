import { blogList } from "./assets/data.js";
import Card from "./components/Card.js";

export default function App() {
  return blogList.map((item, index) => (
      <div className=" flex justify-center items-center my-[14rem]" key={index}>
          <Card image={item.image} h2={item.h2} p={item.p}  />
      </div>
  ));
}
