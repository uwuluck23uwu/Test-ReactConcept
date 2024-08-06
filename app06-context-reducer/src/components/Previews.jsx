import React, { useState } from "react";
import styled from "styled-components";

const FileInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  color: #e20707;
  cursor: pointer;
  font-size: 16px;
  width: 100%; /* ขยายเต็มพื้นที่ */
  max-width: 300px; /* กำหนดขนาดสูงสุด */

  &::file-selector-button {
    background-color: #e20707;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
`;

const PreviewsContainer = styled.div`
  padding-left: 50px;
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #e20707;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #c80000;
  }
`;

const RemoveButton = styled(Button)`
  background-color: white;
  color: #e20707;
  margin-top: 20px;
  margin-left: 35px;
  border: 2px solid #e20707;

  &:hover {
    background-color: #e20707;
    color: white;
  }
`;

function Previews({ onFilesChange }) {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);
    setPreviews(filesArray.map((file) => URL.createObjectURL(file)));
    onFilesChange(filesArray);
  };

  const handleRemovePreviews = () => {
    setPreviews([]);
    onFilesChange([]);
  };

  return (
    <div>
      <FileInput
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <PreviewsContainer>
        {previews.map((preview, index) => (
          <PreviewImage key={index} src={preview} alt={`Preview ${index}`} />
        ))}
      </PreviewsContainer>
      {previews.length > 0 && (
        <RemoveButton onClick={handleRemovePreviews}>Remove All</RemoveButton>
      )}
    </div>
  );
}

export default Previews;
