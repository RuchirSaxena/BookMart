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
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Constants from "../Utilities/Constants";
const Index = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loggedInUser, setLoggedInUser] = useState();
  const location = useLocation();
  const state = location.state;

  console.log(location.state);
  const userLoggedIn = useSelector((state) => state.loggedUser.loggedUserData);
  useEffect(() => {
    setLoggedInUser(userLoggedIn);
  }, []);
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

  const fetchData = async () => {
    try {
      const docRef = doc(db, "booksmanually", id);
      const docSnap = await getDoc(docRef);
      setProduct(docSnap.data());
    } catch (error) {
      setErrorMsg("Error fetching data");
    }
  };
  const fetchDataforWishlist = async () => {
    try {
      const docRef = doc(db, `wishlist-${loggeduser[0]?.uid}`, id);
      const docSnap = await getDoc(docRef);

      const productData = docSnap.data();
      
      await setProduct(docSnap.data().product);
    } catch (e) {
      setErrorMsg("Error fetching data");
    }
  };

  useEffect(() => {
    if (state.message == "/wishlist") {
      fetchDataforWishlist();
    } else {
      fetchData();
    }
  }, [loggeduser]);


  const addToCart = () => {
    if (loggeduser) {
      addDoc(collection(db, `cart-${loggeduser[0].uid}`), {
        product,
        quantity: 1,
      })
        .then(() => {
          toast.success(`Book added to cart`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    } else {
      setErrorMsg("You need to Login first");
    }
  };

  const addToWishlist = () =>{
    if(loggeduser){
      addDoc(collection(db,`wishlist-${loggeduser[0].uid}`,),{
        product,quantity:1
      }).then(()=>{
        toast.success(`Book added to Wishlist`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }).catch((error)=>{setErrorMsg(error.message)})
    }
    else{
      setErrorMsg('You need to Login first')
    }
  }
  return (
    <>
      {product && (
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

                <button type="button" class="btn" onClick={addToWishlist}>
                  <i class="fa fa-heart"></i>&nbsp; {Constants.wishlist}
                </button>
                
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
      )}
    </>
  );
};

export default Index;
