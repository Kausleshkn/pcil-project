import ImageGalleryForm from "./ImageGalleryForm/ImageGalleryForm";
import AdminLogin from "./Login/AdminLogin";
import PointsForm from "./PointsForm/PointsForm";
import QueryForm from "./SliderData/QueryForm";



export default function LoginPage() {
  return (
    <>
<div style={{display:"flex", flexWrap:"wrap", justifyContent:'space-around'}}>

      <AdminLogin />
      <QueryForm />
      <PointsForm />

      <ImageGalleryForm />
</div>


    </>
  )
}


