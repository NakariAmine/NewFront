import ECommerceAdmin from "@/components/Dashboard/E-commerceAdmin";
import DefaultLayout from "@/components/Layouts/AdminLayout";
import React from "react";

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <ECommerceAdmin />
    </DefaultLayout>
  );
};

export default BasicChartPage;
