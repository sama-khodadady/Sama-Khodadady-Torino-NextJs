import { getTour } from "@/services/httpReq";
import TourDetailPage from "@/template/TourDetailPage";

async function TourDetail({ params }) {
  const { tourId } = await params;

  return <TourDetailPage tourId={tourId} />;
}

export default TourDetail;

export async function generateMetadata({ params }) {
  const { tourId } = await params;
  const { data } = await getTour(tourId);
  return { title: data?.title };
}
