import { SingleProps } from "../../app/context/Props";
import SingleTemplate from "./single";

const PageTemplate: NextPage<SingleProps> = (props) => {
    return <SingleTemplate {...props} />;
}

export default PageTemplate;