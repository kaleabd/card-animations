/**
 * This is a React component that renders a list of cards using data from an external file.
 * @returns The App component is being returned, which contains a div that maps over the blogList array
 * and renders a Card component for each item in the array. The Card component is passed the image, h2,
 * and p props from each item in the array.
 */
import { blogList } from "./assets/data.js";
import Card from "./components/Card.js";

export default function App() {
  return(
    <div>
      {
        blogList.map((item, index) => (
          <div className=" flex justify-center items-center my-[14rem]" key={index}>
              <Card image={item.image} h2={item.h2} p={item.p}  />
          </div>
        ))
      }
    </div>
  )
}
