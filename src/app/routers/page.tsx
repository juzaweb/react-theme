import { useSelector } from "react-redux";
import Login from "../../views/components/templates/Login";
import { selectConfig } from "../features/config/configSlice";

export default function Page() {
  const config = useSelector(selectConfig);

  return <Login />;
}