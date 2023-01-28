import { upload_url } from "../../../app/context/Helper";

export default function Banner(props: {data: any}) {
    return (
        <aside className="wrapper__list__article">
            <h4 className="border_section">{ props.data.title }</h4>
            <a href={props.data.link} target="_blank">
                <figure>
                    <img src={ upload_url(props.data.banner) } alt="" className="img-fluid" />
                </figure>
            </a>
        </aside>
    );
}