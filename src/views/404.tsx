import { Link } from "react-router-dom";
import { __ } from "../app/context/Helper";
import { Page404Props } from "../app/context/Props";

const Page404Template = (props: Page404Props) => {
  return (
    <>
        <div className="text-center">
            <h1>{props?.message || '404 - Page not found'}</h1>
            <Link to={'/'}>{__('Go to home page')}</Link>
        </div>
    </>
  )
}

export default Page404Template;
