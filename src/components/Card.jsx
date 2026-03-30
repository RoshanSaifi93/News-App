// import React from "react";

const Card = ({ data }) => {
  return (
    <div className="cardContainer">
      {data &&
        data.map((item) => {
          if (!item.urlToImage) return null;

          return (
            <div className="card" key={item.url}>
              <img
                src={item.urlToImage}
                alt={item.title}
                loading="lazy"
                decoding="async"
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1504711434969-e33886168f5c";
                }}
              />

              <a
                className="title"
                href={item.url}
                rel="noopener noreferrer"
              >
                {item.title}
              </a>

              <p>{item.description}</p>

              <a
                href={item.url}
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default Card;