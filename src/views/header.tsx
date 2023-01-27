import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MenuItem, selectMenu } from "../app/features/menu/menuSlice";
import { useLocation } from 'react-router-dom';

const TemplateHeader = () => {
    const menu = useSelector(selectMenu)[1];
    const location = useLocation();
    
    return (
      <>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>Juzaweb</Link>

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
                        function(item: MenuItem) {
                            if (item?.children) {
                                return (
                                    <li key={item.id} className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={item.link} id={"navbarDropdown"+item.id} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {item.label}
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby={"navbarDropdown"+item.id}>
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
                                            className={"nav-link "+ (active ? 'active' : '')} 
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
                        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" name="q" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
            </header>
      </>
    )
  }

export default TemplateHeader;