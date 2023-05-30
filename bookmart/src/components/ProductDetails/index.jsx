// import React, { useEffect, useState } from "react";
// import "./style.css";
// import { db, auth } from "../../firebase";
// import { useParams } from "react-router-dom";
// import { getDoc } from "firebase/firestore";
// import { doc } from "firebase/firestore";
// import Constants from "../Utilities/Constants";
// import { collection, query, where, addDoc ,getDocs} from "firebase/firestore";
// const Index = () => {
//   const { id } = useParams();

//   const [product, setProduct] = useState(null);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const GetCurrentUser = () => {
//     const [user,setUser] = useState("");
//     const usersCollectionRef = collection(db, "users");
//     useEffect(()=>{
//       auth.onAuthStateChanged(userlogged => {
//         if(userlogged){
//           const getUsers= async() =>{
//             const q = query(collection(db,"users"),where("uid", "==",userlogged.uid))
//             const data = await getDocs(q);
//             setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
//           };
//           getUsers();
//         }
//         else{
//           setUser(null);
//         }

//           })
//         },[])
//       return user
//     }
//      const loggeduser=GetCurrentUser();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const docRef = doc(db, "booksmanually", id);
//         const docSnap = await getDoc(docRef);
//         setProduct(docSnap.data());
//       } catch (error) {
//         setErrorMsg("Error fetching data");
//       }
//     };

//     fetchData();
//   }, [id]);

//   const addToWishlist = () =>{
//     if(loggeduser){
//       addDoc(collection(db,`wishlist-${loggeduser[0].uid}`,),{
//         product,quantity:1
//       }).then(()=>{
//         setSuccessMsg('Product added to wishlist');
//       }).catch((error)=>{setErrorMsg(error.message)})
//     }
//     else{
//       setErrorMsg('You need to Login first')
//     }
//   }

//   return (
//     <>
//   <div class="contain">
//        <div class="box">

//          <div class="images">

//            <div class="img-holder active">

//              <div
//                id="carouselExampleRide"
//                className="carousel slide carousel-css "
//                data-bs-ride="true"
//              >
//                <div className="carousel-inner image-slider">
//                  <div className="carousel-item active ">
//                    <img
//                      src={product?.imgURLs}
//                      className="d-block w-100 carousel-img"
//                      alt="Loading Error !"
//                    />
//                  </div>
//                  {product.imgURLs?.slice(1).map((item, index) => (
//                    <div className="carousel-item ">
//                      <img src={item} alt={Index}></img>
//                    </div>
//                  ))}

//                  <button
//                    className="carousel-control-prev"
//                    type="button"
//                    data-bs-target="#carouselExampleRide"
//                    data-bs-slide="prev"
//                  >
//                    <span
//                      className="carousel-control-prev-icon"
//                      aria-hidden="true"
//                    />
//                    <span className="visually-hidden">Previous</span>
//                  </button>
//                  <button
//                    className="carousel-control-next"
//                    type="button"
//                    data-bs-target="#carouselExampleRide"
//                    data-bs-slide="next"
//                  >
//                    <span
//                      className="carousel-control-next-icon color"
//                      aria-hidden="true"
//                    />
//                    <span className="visually-hidden">Next</span>
//                  </button>
//                </div>
//              </div>
//            </div>
//          </div>

//          <div class="basic-info">
//            <h1 >{product?.name}</h1>

//            <span>${product?.priceOffered}</span>
//            <div>${product?.originalPrice}</div>

//            <p class="green">{Constants.inclusive}</p>

//            <div class="options">
//              <button type="button" class="btn">
//                <i class="fas fa-shopping-cart"></i>&nbsp;  {Constants.cart}
//              </button>
//              <button type="button" class="btn" onClick={addToWishlist}>
//                <i class="fa fa-heart"></i>&nbsp; {Constants.wishlist}
//              </button>
//            </div>
//            {successMsg && <>
//        <div className="success-msg">{successMsg}</div></>}
//        {errorMsg && <>
//        <div className="error-msg">{errorMsg}</div></>}
//          </div>
//          <div class="description">
//            <h4>{Constants.aboutthisItem} </h4>
//            <p>{product?.description}</p>
//            <hr/>
//            <ul class="features">

//              <li>
//                {Constants.ownersName} <span>{product.ownerInfo?.name}</span>
//              </li>
//              <li>
//                {Constants.ownersContact}
//                <span>{product.ownerInfo?.contact}</span>
//              </li>
//              <li>
//                {Constants.ownersEmail}
//                <span>{product.ownerInfo?.email}</span>
//              </li>

//            </ul>
//          </div>
//        </div>
//      </div>
//     </>
//   );
// };

// export default Index;

import React, { useEffect, useState } from "react";
import "./style.css";
import { db, auth } from "../../firebase";
import { useParams, useLocation } from "react-router-dom";
import {
  getDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
} from "firebase/firestore";

import Constants from "../Utilities/Constants";
const Index = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const location = useLocation();
  const state = location.state;
  console.log(location.state);
  const GetCurrentUser = () => {
    const [user, setUser] = useState("");
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
      auth.onAuthStateChanged((userlogged) => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userlogged.uid)
            );
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getUsers();
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  };
  const loggeduser = GetCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "booksmanually", id);
        const docSnap = await getDoc(docRef);
        setProduct(docSnap.data());
      } catch (error) {
        setErrorMsg("Error fetching data");
      }
    };

    fetchData();
  }, [id]);

  const addToCart = () => {
    if (loggeduser) {
      addDoc(collection(db, `cart-${loggeduser[0].uid}`), {
        product,
        quantity: 1,
      })
        .then(() => {
          setSuccessMsg("Product added to cart");
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    } else {
      setErrorMsg("You need to Login first");
    }
  };

  return (
    <>
      <div class="contain">
        <div class="box">
          <div class="images">
            <div class="img-holder active">
              <div
                id="carouselExampleRide"
                className="carousel slide carousel-css "
                data-bs-ride="true"
              >
                <div className="carousel-inner image-slider">
                  <div className="carousel-item active ">
                    <img
                      src={product?.imgURLs}
                      className="d-block w-100 carousel-img"
                      alt="Loading Error !"
                    />
                  </div>
                  {product.imgURLs?.slice(1).map((item, index) => (
                    <div className="carousel-item ">
                      <img src={item} alt={Index}></img>
                    </div>
                  ))}

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleRide"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleRide"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon color"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="basic-info">
            <h1>{product.name}</h1>

            <span>Rs. {product.priceOffered}</span>
            <div>Rs. {product.originalPrice}</div>

            <p class="green">{Constants.inclusive}</p>

            <div class="options">
              <button type="button" class="btn" onClick={addToCart}>
                <i class="fas fa-shopping-cart"></i>&nbsp; {Constants.cart}
              </button>

              <button type="button" class="btn">
                <i class="fa fa-heart"></i>&nbsp; {Constants.wishlist}
              </button>
              {successMsg && (
                <>
                  <div className="success-msg">{successMsg}</div>
                </>
              )}
              {errorMsg && (
                <>
                  <div className="error-msg">{errorMsg}</div>
                </>
              )}
            </div>
          </div>
          <div class="description">
            <h4>{Constants.aboutthisItem} </h4>
            <p>{product.description}</p>
            <hr />
            <ul class="features">
              <li>
                {Constants.ownersName} <span>{product.ownerInfo?.name}</span>
              </li>
              <li>
                {Constants.ownersContact}
                <span>{product.ownerInfo?.contact}</span>
              </li>
              <li>
                {Constants.ownersEmail}
                <span>{product.ownerInfo?.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
