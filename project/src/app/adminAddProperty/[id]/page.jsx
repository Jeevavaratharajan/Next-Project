import AdminPropertyForm from "@/components/admin/AdminPropertyForm";

const EditPropertyPage = ({ params }) => {
  return <AdminPropertyForm propertyId={params.id} />;
};

export default EditPropertyPage;
