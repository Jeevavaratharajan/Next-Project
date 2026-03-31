import PropertyPageClient from "@/components/property/PropertyPageClient";

const PropertyPage = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  return <PropertyPageClient initialType={resolvedSearchParams?.type || "All"} />;
};

export default PropertyPage;
