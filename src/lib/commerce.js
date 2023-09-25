import Commerce from "@chec/commerce.js";
import { ENV } from "../constants";

export const commerce = new Commerce(ENV.REACT_APP_CHEC_PUBLIC_KEY, true);
