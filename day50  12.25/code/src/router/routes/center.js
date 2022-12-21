import Center from "@/views/Center/Center";
import Login from "@/views/Center/Login";
import Balance from "@/views/Center/Balance";

var centerRouter = [
    {
        path: "/center",
        component: Center,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/balance",
        component: Balance,
    },
];

export default centerRouter;
