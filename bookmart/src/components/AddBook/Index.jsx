import React, { useState, useEffect } from "react";
import { storage, db } from "../../firebase";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import "./Index.css";
import {InputLabel} from "@mui/material";
import {MenuItem} from "@mui/material";
import {Select} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Heading from "../HeadingUI";
let initialState = {
  name: "",
  originalPrice: "",
  priceOffered: "",
  authorName: "",
  category: "",
  description: "",
  ownerInfo: {
    name: "",
    contact: "",
    email: "",
  },
  imgURLs: [],
};

const AddEditBook = () => {
  const [data, setData] = useState(initialState);
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const uploadFile = () => {
      files.map((file) => {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            switch (snapshot.state) {
              case "paused":
                console.log("upload is Paused");
                break;
              case "running":
                console.log("upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((urls) => {
              initialState = {
                ...initialState,
                imgURLs: [...initialState.imgURLs, urls],
              };
              console.log(initialState);
              setData({ ...data, imgURLs: initialState.imgURLs });
            });
          }
        );
      });
    };
    files && uploadFile();
  }, [files]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleImageUpload = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setFiles((prevState) => [...prevState, newImage]);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    await addDoc(collection(db, "booksmanually"), {
      ...data,
      timeStamp: serverTimestamp(),
    }).then(() => {
      console.log("Successfully uploaded");
    });
    setData(initialState);
    setFiles([]);
  };

  return (
    <div className="addBookContainer">
      <Heading text={"Add Books"} />

      <div className="addBookForm">
        <form onSubmit={handleSubmit}>
          <TextField
            className="inputHandle"
            id="outlined-required"
            label="Book Name"
            value={data.name}
            name="name"
            required
            onChange={handleChange}
          />

          <div className="priceContainer">
            <TextField
              id="outlined-required"
              label="Book Original Price"
              value={data.originalPrice}
              name="originalPrice"
              required
              onChange={handleChange}
              fullWidth
            />

            <TextField
              id="outlined-required"
              label="Book Price Offered"
              value={data.priceOffered}
              name="priceOffered"
              required
              onChange={handleChange}
              fullWidth
            />
          </div>

          <TextField
            id="outlined-required"
            label="Book's Author Name"
            value={data.authorName}
            name="authorName"
            required
            onChange={handleChange}
          />

          <FormControl>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              label="Category"
              id="category"
              value={data.category}
              name="category"
              onChange={handleChange}
            >
              <MenuItem value="Fiction">Fiction</MenuItem>
              <MenuItem value="Comedy">Comedy</MenuItem>
              <MenuItem value="Self Help">Self Help</MenuItem>
              <MenuItem value="Romance">Romance</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="outlined-required"
            label="Description"
            value={data.description}
            name="description"
            required
            onChange={handleChange}
          />

          <div className="ownerInfo">
            <TextField
              id="outlined-required"
              label="Owner Name"
              value={data.ownerInfo.name}
              name="authorContact"
              required
              fullWidth
              onChange={(e) =>
                setData({
                  ...data,
                  ownerInfo: {
                    ...data.ownerInfo,
                    name: e.target.value,
                  },
                })
              }
            />

            <TextField
              id="outlined-required"
              label="Owner Contact"
              value={data.ownerInfo.contact}
              name="ownerName"
              required
              fullWidth
              onChange={(e) =>
                setData({
                  ...data,
                  ownerInfo: {
                    ...data.ownerInfo,
                    contact: e.target.value,
                  },
                })
              }
            />

            <TextField
              id="outlined-required"
              label="Owner Email"
              value={data.ownerInfo.email}
              name="ownerEmail"
              required
              fullWidth
              onChange={(e) =>
                setData({
                  ...data,
                  ownerInfo: {
                    ...data.ownerInfo,
                    email: e.target.value,
                  },
                })
              }
            />
          </div>

          <Button variant="contained" component="label" >
            Upload Images*
            <input
              hidden
              required
              accept="image/*"
              multiple
              type="file"
              onChange={handleImageUpload}
            />
          </Button>

          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
          
        </form>
      </div>
    </div>
  );
};

export default AddEditBook;
