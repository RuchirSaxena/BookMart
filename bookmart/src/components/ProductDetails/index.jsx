import React, { useEffect, useState } from "react";
import "./index.css";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
const Index = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "booksmanually", id);
        const docSnap = await getDoc(docRef);
        setProduct(docSnap.data());
      } catch (error) {
        console.log("Error getting document:", error);
        setErrorMsg("Error fetching data");
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {product.name}

      {product.category}

      {product.ownerInfo?.name && <>Owner Info : {product.ownerInfo.name}</>}

      {product.ownerInfo?.email && <>Owner Info : {product.ownerInfo.email}</>}

      {product.ownerInfo?.contact && (
        <>Owner Info : {product.ownerInfo.contact}</>
      )}

      {product.priceOffered}

      {product.originalPrice}

      {product.description}

      {product.authorName}

      <div className="imgContainer">
        {product.imgURLs &&
          product.imgURLs.map((url, index) => (
            <img src={url} alt={`Image ${index}`} key={index} />
          ))}
      </div>
    </>
  );
};

export default Index;
