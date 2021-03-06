/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import CandidateInfo from "layouts/CandidateInfo";
var routes = [
  {
    path: "/candidates",
    name: "Candidates",
    icon: "ni ni-key-25 text-info",
    component: Index,
    layout: "/admin",
  },
];
export default routes;
