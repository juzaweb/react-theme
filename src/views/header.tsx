import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MenuItem, selectMenu } from "../app/features/menu/menuSlice";
import { useLocation } from 'react-router-dom';
import { selectConfig } from "../app/features/config/configSlice";
import { upload_url } from "../app/context/Helper";
import { getPosts } from "../app/context/DataHelper";
import { useState } from "react";
import { Post } from "../app/context/PostContext";

const TemplateHeader = () => {
    const config = useSelector(selectConfig);
    const menu = useSelector(selectMenu)['primary'];
    const [suggests, setSuggests] = useState<Array<Post>>();
    const location = useLocation();

    function handleSearchOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        let value = e.target.value;
        if (value) {
            getPosts('posts', {q: e.target.value, limit: 5}).then((res) => setSuggests(res.data));
        } else {
            setSuggests(undefined);
        }
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={'/'}>
                            <img 
                                src={upload_url(config?.general.logo)} 
                                className="w-100" 
                                alt={config?.general.title}
                            />
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarCollapse">

                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                {menu?.items.map(
                                    function (item: MenuItem) {
                                        if (item?.children) {
                                            return (
                                                <li key={item.id} className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" to={item.link} id={"navbarDropdown" + item.id} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {item.label}
                                                    </Link>
                                                    <ul className="dropdown-menu" aria-labelledby={"navbarDropdown" + item.id}>
                                                        {item?.children.map((child: MenuItem) => (
                                                            <li key={child.id}>
                                                                <Link className="dropdown-item" to={child.link}>{child.label}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            );
                                        }

                                        let active = false;
                                        if (item.link) {
                                            const url = new URL(item.link);
                                            active = location.pathname === url.pathname;
                                        }

                                        return (
                                            <li key={item.id} className="nav-item">
                                                <Link
                                                    className={"nav-link " + (active ? 'active' : '')}
                                                    aria-current="page"
                                                    to={item.link}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>

                            <form className="d-flex" action="/">
                                <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" name="q" onChange={handleSearchOnChange} />
                                
                                <button className="btn btn-outline-success" type="submit">Search</button>

                                {suggests ? (
                                    <nav style={{position: 'absolute',top: '56px', zIndex: 999, background: '#fff'}}>
                                        <ul>
                                            {suggests.map(
                                                (item) => (
                                                    <li><Link to={item.url}>{item.title}</Link></li>
                                                )
                                            )}
                                        </ul>
                                    </nav>
                                ) : ''}
                                
                            </form>

                            
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default TemplateHeader;