import './ImageGalleryForm.css';

const ImageGalleryForm = () => {

  return (
    <div className="image-gallery-form-container">
      <form className="image-gallery-form">
        <h2>Upload Images</h2>
        <div className="form-control">
          <label>Select Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="image-gallery">
        <h2>Image Gallery</h2>
        <div className="gallery-images">


        </div>
      </div>
    </div>
  );
};

export default ImageGalleryForm;
