import reg from "./reg.module.css";
import { Redirect} from "react-router-dom";

function regDrawer(props) {
//if logined then redirect to profile
  return <div className={reg.main}>Try Register</div>;
}

export default regDrawer;
