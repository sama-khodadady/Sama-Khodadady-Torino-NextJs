import TourOrderPage from "@/template/TourOrderPage";

async function TourOrder({ params }) {
  const { tourId } = await params;

  return <TourOrderPage tourId={tourId} />;
}

export default TourOrder;
