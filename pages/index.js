import { useState, useEffect } from "react";
import ImageCard from "../components/ImageCard";
import ImageSearch from "../components/ImageSearch";

export default function IndexPage() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="bg-accent-1">
      <div className="container mx-auto p-2">
        <h1 className="font-mono text-3xl text-center text-orangish-1">
          Photo Search
        </h1>
        <ImageSearch searchText={(text) => setTerm(text)} />
        {isLoading ? (
          <h1>Is Loading....</h1>
        ) : images.length === 0 ? (
          <h3>No Result was Found</h3>
        ) : (
          <div className="flex flex-wrap gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
