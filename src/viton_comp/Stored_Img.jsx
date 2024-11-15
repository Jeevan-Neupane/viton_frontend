import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components for the combined images with "+" sign between them
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
  justify-content: center; /* Center the images horizontally */
  gap: 1rem; /* Space between elements */
  margin-top: 2rem;
`;

const ImageWrapper = styled.div`
  width: 40rem; /* Set a fixed width for images */
  height: 50rem; /* Set a fixed height for images */
  position: relative;
`;

const BaseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1rem;
  object-fit: contain;

  object-position: center; /* Center the image */
`;

const OverlayImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: 0.7; /* Adjust opacity for blending effect */
`;

const PlusSign = styled.div`
  font-size: 3rem;
  color: #333;
  font-weight: bold;
`;

const ResultImage = styled.img`
  width: 40rem;
  height: 50rem;
  object-fit: cover;
  border-radius: 1rem;
  object-fit: contain;
`;

const StoredImages = () => {
  const [storedImages, setStoredImages] = useState([]);

  // Load images from localStorage on component mount
  useEffect(() => {
    const imagesFromStorage =
      JSON.parse(localStorage.getItem("tryOnImages")) || [];
    setStoredImages(imagesFromStorage);
  }, []);

  return (
    <div>
      <h2
        style={{
          marginTop: "2rem",
        }}
      >
        Previously Stored Images
      </h2>
      {storedImages.length > 0 ? (
        storedImages.map((image, index) => (
          <ImageContainer key={index}>
            <ImageWrapper>
              <BaseImage
                src={image.vton_img}
                alt={`Virtual Try-On ${index + 1}`}
              />
            </ImageWrapper>
            <PlusSign>+</PlusSign>
            <ImageWrapper>
              <OverlayImage
                src={image.garm_img}
                alt={`Garment ${index + 1}`}
              />
            </ImageWrapper>
            <PlusSign>=</PlusSign>
            <ResultImage
              src={image.result_img}
              alt={`Result ${index + 1}`}
            />
          </ImageContainer>
        ))
      ) : (
        <p>No images stored yet.</p>
      )}
    </div>
  );
};

export default StoredImages;
