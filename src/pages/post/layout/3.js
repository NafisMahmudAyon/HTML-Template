
import React, {useState} from "react";

const Layouts3 = () => {
    

    const layout = [
        {
          id: "1",
          title: "Layout ",
          image: "/images/layout/",
          url: "/post/layout",
        },
        {
          id: "2",
          title: "Layout ",
          image: "/images/layout/",
          url: "/post/layout",
        },
        {
          id: "3",
          title: "Layout ",
          image: "/images/layout/",
          url: "/post/layout",
        },
        {
          id: "4",
          title: "Layout ",
          image: "/images/layout/",
          url: "/post/layout",
        },
        {
          id: "3",
          title: "Layout ",
          image: "/images/layout/",
          url: "/post/layout",
        },
        {
          id: "4",
          title: "Layout ",
          image: "/images/layout/",
          url: "/post/layout",
        },
    ]
    const [visibleItems, setVisibleItems] = useState(2);

  const itemsToShow = layout.slice(0, visibleItems);

  function handleLoadMore() {
    setVisibleItems(visibleItems + 2);
  }

  return (
    <div>
      {itemsToShow.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}

      {visibleItems < layout.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default Layouts3;
