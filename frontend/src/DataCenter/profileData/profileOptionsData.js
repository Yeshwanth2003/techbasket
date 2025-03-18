import OrdersIMG from "./asserts/yourorders.png";
import ProfileSecIMG from "./asserts/profilesecurity.png";
import ProfileMngIMG from "./asserts/manageprofile.png";
import CusSerIMG from "./asserts/customerservice.png";
import SavedItemIMG from "./asserts/saveditem.png";
import LogoutIMG from "./asserts/logout.png";
import SellerIMG from "./asserts/seller.png";

const profileOptionsData = [
  {
    toLink: "/profile/orders",
    title: "Your Orders",
    desc: "Track, return, cancel an order, or buy again",
    imgLink: OrdersIMG,
    id: 0,
  },
  {
    toLink: "/profile/security",
    title: "Login & Security",
    desc: "Edit login, name, and mobile number",
    imgLink: ProfileSecIMG,
    id: 1,
  },
  {
    toLink: "/profile/management",
    title: "Manage Profile",
    desc: "Delete your profile, change password",
    imgLink: ProfileMngIMG,
    id: 2,
  },
  {
    toLink: "/profile/saveditem",
    title: "Saved item",
    desc: "Manage your saved items",
    imgLink: SavedItemIMG,
    id: 3,
  },
  {
    toLink: "/profile/customerservice",
    title: "Customer Service",
    desc: "Browse self service options, help articles or contact us",
    imgLink: CusSerIMG,
    id: 4,
  },
  {
    toLink: "/profile/createseller",
    title: "Sell Your Product",
    desc: "Create your seller account with us",
    imgLink: SellerIMG,
    id: 5,
  },
  {
    toLink: "/",
    title: "Logout",
    desc: "Browse self service options, help articles or contact us",
    imgLink: LogoutIMG,
    id: 6,
  },
];
export default profileOptionsData;
