import { SingleProps } from "../../app/context/Props";
import SingleTemplate from "./single";

const PageTemplate = (props: SingleProps) => {
    return <SingleTemplate {...props} />;
}

export default PageTemplate;