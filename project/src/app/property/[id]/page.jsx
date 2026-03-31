import PropertyDetailClient from "@/components/property/PropertyDetailClient";

const PropertyDetailPage = async ({ params }) => {
  const resolvedParams = await params;
  return <PropertyDetailClient id={resolvedParams.id} />;
};

export default PropertyDetailPage;
