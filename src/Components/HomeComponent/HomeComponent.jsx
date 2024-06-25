import React, { useState } from "react";
import "./HomeComponent.css";
import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";
import img4 from "../../assets/images/img4.jpeg";
import img5 from "../../assets/images/img5.jpeg";
import img6 from "../../assets/images/img6.jpeg";
import img7 from "../../assets/images/img7.jpeg";
import img8 from "../../assets/images/img8.jpeg";
import img9 from "../../assets/images/img9.jpg";
import img10 from "../../assets/images/img10.jpg";
import img11 from "../../assets/images/img11.jpeg";
import img12 from "../../assets/images/img12.jpg";
import img13 from "../../assets/images/img13.jpeg";
import img14 from "../../assets/images/img14.jpg";
import img15 from "../../assets/images/img15.jpg";
import img16 from "../../assets/images/img16.jpg";
import img17 from "../../assets/images/img17.jpg";
import img18 from "../../assets/images/img18.jpg";
import img19 from "../../assets/images/img19.jpg";
import profilepic from "../../assets/images/profilepic.jpeg";
import logoimage from "../../assets/images/logoimage.png";
import dribbble from "../../assets/images/dribbble.jpg";
import profilepic2 from "../../assets/images/profilepic2.webp";
import profilepic3 from "../../assets/images/profilepic3.webp";

import { FaRegUserCircle } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";
import { PiEyeDuotone } from "react-icons/pi";
import { RiAccountPinCircleLine, RiFilter3Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";

export const HomeComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState("popular");
  const [filteredImages, setFilteredImages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImage] = useState("");
  const [modalCaption, setModalCaption] = useState("");

  const openModal = (image) => {
    setModalVisible(image);
  };

  const closeModal = () => {
    setModalVisible(null);
  };

  const images = [
    { name: 'Peter,Spiderman', nam: 'Spiderman', src: img1, author: 'Stan Lee', likes: 430, views: 12.8, categ: 'Discover' },
    { name: 'Batman,bruce wayne', nam: 'Batman', src: img2, author: 'Bill Finger', likes: 843, views: 62.2, categ: 'Animation' },
    { name: 'Heman', nam: 'Heman', src: img3, author: 'Roger Sweet', likes: 654, views: 47, categ: 'Animation' },
    { name: 'Thor', nam: 'Thor', src: img4, author: 'Odin Loki', likes: 556, views: 62.2, categ: 'Animation' },
    { name: 'Black Panther,tchala', nam: 'Black Panther', src: img5, author: 'Mike Robb', likes: 441, views: 45.9, categ: 'Web Design' },
    { name: 'Captain America,Steve rogers', nam: 'Captain America', src: img6, author: 'Mark Anto', likes: 390, views: 55, categ: 'Illustration' },
    { name: 'Ironman,tony stark', nam: 'Ironman', src: img7, author: 'Rick Reiler', likes: 619, views: 32.5, categ: 'Web Design' },
    { name: 'Keaneu Reeves,Jhon Wick', nam: 'Jhon Wick', src: img8, author: 'Harper Lee', likes: 670, views: 52.8, categ: 'Mobile' },
    { name: 'Harry Potter,Daniel Radcliff', nam: 'Harry Potter', src: img9, author: 'JA Rowling', likes: 643, views: 62.1, categ: 'Discover' },
    { name: 'Tyler Durden,Brad Pitt', nam: 'Tyler Durden', src: img10, author: 'Roger Mark', likes: 554, views: 57.9, categ: 'Mobile' },
    { name: 'Joker', nam: 'Joker', src: img11, author: 'Artris Lian', likes: 586, views: 62.2, categ: 'Illustration' },
    { name: 'Adolf Hitler', nam: 'Adolf Hitler', src: img12, author: 'Mike Robb', likes: 641, views: 60.9, categ: 'Branding' },
    { name: 'Wolverin,Logan', nam: 'Wolverin', src: img13, author: 'Mark Anto', likes: 290, views: 55.3, categ: 'Web Design' },
    { name: 'Mike Tyson', nam: 'Mike Tyson', src: img14, author: 'Rick Reiler', likes: 819, views: 76.9, categ: 'Branding' },
    { name: 'Conor Mccregor,ufc champion', nam: 'Conor McCregor', src: img15, author: 'Khabibtm', likes: 819, views: 62.1, categ: 'Discover' },
    { name: 'Walter Hartwell White,Heisenberg', nam: 'Walter H. White', src: img16, author: 'K.A Jessee', likes: 750, views: 72.4, categ: 'Product Design' },
    { name: 'Thomas Shelby,Tommy,Cillian Murphy', nam: 'Thomas Shelby', src: img17, author: 'Mark stue', likes: 743, views: 65.2, categ: 'Branding' },
    { name: 'Professor,Sergio Marquina', nam: 'Sergio Marquina', src: img18, author: 'Rio Mark', likes: 754, views: 67, categ: 'Illustration' },
    { name: 'Sherlock Holmes', nam: 'Sherlock Holmes', src: img19, author: 'Anto Juan', likes: 596, views: 69.2, categ: 'Product Design' }
  ];

  const handleButtonClick = (category) => {
    const filtered = images.filter((image) => image.categ === category);
    setFilteredImages(filtered);
  };

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    if (selectedValue === "popular") {
      const sortedImages = [...images].sort((a, b) => b.likes - a.likes);
      setFilteredImages(sortedImages);
    } else if (selectedValue === "following") {
      const sortedImages = [...images].sort((a, b) => b.views - a.views);
      setFilteredImages(sortedImages);
    } 
    // else if (selectedValue === "news") {
    //   const sortedImages = [...images].sort((a, b) => b.views - a.views);
    //   setFilteredImages(sortedImages);
    // }
     else {
      setFilteredImages([]);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const filtered = images.filter((image) =>
        image.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  };

  const displayedImages =   searchTerm.trim() !== "" || filteredImages.length > 0 ? filteredImages : images;

  // const displayedImages = searchTerm.trim() !== "" ? filteredImages : images;

  return (
    <div className="fullhome">
      <div className="homee">
        <div className="firstbox ">
          <span className="dropdwn">
            <a className="f1" href="#FindDesigners">
              Find Designers <RiArrowDropDownLine className="icondd" />
              <ul className="navl">
                <li>Designer Search</li>
                <li>Post a job</li>
              </ul>
            </a>
          </span>
          <a className="f11" href="#Inspiration">
            Inspiration
          </a>
          <span className="dropdown">
            <a className="f1" href="#Courses">
              Courses <RiArrowDropDownLine className="icondd" />
              <ul className="navl1">
                <li>UX Diploma</li>
                <li>UI Certificate</li>
                <li>Live Interactive Workshops</li>
              </ul>
            </a>
          </span>
          <a className="f11" href="#Jobs">
            Jobs
          </a>
          <a className="f11" href="#Go Pro">
            Go Pro
          </a>
        </div>
        <div className="homec">
          <img src={dribbble} alt="logo" className="dribbb"></img>
        </div>

        <div className="searchbr">
          <div className="seric"><FiSearch /></div>
          <input
            type="search"
            name="name"
            placeholder="Search ... "
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="insidesb"
          />
        </div>
        <div className="useric">
          {/* <FaRegUserCircle size={36} /> */}
          <img className="accimgprofile" src={profilepic3}></img>
        </div>
      </div>

      <div className="box1">
        <div className="ddown">
          <label>
            <span className="ddul"><RiArrowDropDownLine className="popularddicon" />
              <select
                value={value}
                onChange={handleDropdownChange}
                className="ddselect"
              >
                <option value="following" className="ddli">Following</option>
                <option value="popular" className="ddli">Popular</option>
                <option value="news" className="ddli">News&Noteworthy</option>
              </select>
            </span>
          </label>
        </div>
        <span className="alist">
          {["Discover", "Animation", "Branding", "Illustration", "Mobile", "Web Design", "Product Design"].map((category) => (
            <a
              key={category}
              className={`a1 ${searchTerm === category ? 'active' : ''}`}
              onClick={() => {
                setSearchTerm(category);
                handleButtonClick(category);
              }}
              href={`#${category}`}
            >
              {category}
            </a>
          ))}
        </span>
        <span>
          <button id="btn"><RiFilter3Fill id="filic" />Filters</button>
        </span>
      </div>

      <div>
        <div className="thumbnail">
          {displayedImages.length === 0 && searchTerm.trim() !== "" ? (
            <div className="noresult">No results found</div>
          ) : (
            displayedImages.map((image, index) => (
              <span className="thumbnailspan" key={index}>
                <img className="tn1" src={image.src} alt={image.name} onClick={() => openModal(image)} />
                <span className="authorname">
                  <p className="p4">
                    <img className="imgprofile" src={profilepic2} />
                  </p>
                  <p className="p1">{image.author}</p>
                  <p className="pro">PRO</p>
                  <AiTwotoneHeart id="likeicon" />
                  <p className="p2">
                    {image.likes}
                  </p>
                  <PiEyeDuotone size={22} id="eyeicon" />
                  <p className="p3">
                    {image.views}K
                  </p>
                </span>
              </span>
            ))
          )}

          {modalVisible && (
            <div className="modal1" onClick={closeModal}>
              <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
                <div className="closebutton"> <span className="close1" onClick={closeModal}>
                  &times;
                </span></div>
                <img className="modalimg1" src={modalVisible.src} alt={modalVisible.name} />
                <div className="capt1">{modalVisible.nam}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="loadmorediv">
        <a className="loadmore" href="#loadmorework">
          Load more work
        </a>
      </div>
    </div>
  );
};

export default HomeComponent;
