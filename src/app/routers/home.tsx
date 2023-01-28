import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import IndexTemplate from "../../views";
import Layout from "../components/Layout";
import { selectConfig } from "../features/config/configSlice";

export default function HomePage() {
  const config = useSelector(selectConfig);

  return <Layout>
    <Helmet>
      <title>{config?.general?.title}</title>
      <meta name="description" content={config?.general?.description} />
    </Helmet>

    <IndexTemplate />
  </Layout>;
}