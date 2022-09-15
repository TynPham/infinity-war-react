import Cast from "../component/cast/Cast";
import Gallery from "../component/gallery/Gallery";
import Inicio from "../component/inicio/Inicio";
import Synopsis from "../component/synopsis/Synopsis";
import Trailer from "../component/trailer/Trailer";

export const topNavbar = [
  {
    path: "/",
    title: "INICIO",
    component: Inicio,
  },
  {
    path: "/synopsis",
    title: "SYNOPSIS",
    component: Synopsis,
  },
  {
    path: "/cast",
    title: "CAST",
    component: Cast,
  },
  {
    path: "/gallery",
    title: "GALLERY",
    component: Gallery,
  },
  {
    path: "/trailer",
    title: "TRAILER",
    component: Trailer,
  },
];
