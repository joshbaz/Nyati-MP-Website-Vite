export const MENUDATA = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Watch",
    path: "/films",
  },
  {
    title: "In Theatres",
    path: "/intheatres",
  },

  {
    title: "about",
    subItems: true,
    path: "/about",
    subData: [
      {
        title: "About Nyati",
        url: "/about/about-nyati",
      },
      {
        title: "Press",
        url: "/about/press",
      },
      {
        title: "Contact Us",
        url: "/about/contactus",
      },
    ],
  },
];

//  {
//     title:"Events",
//     path: "/events",
//   },

export const MENULOGIN = [
  {
    title: "All",
    path: "/browse",
  },
  {
    title: "Movies",
    path: "/browse/genre/movies",
  },
  {
    title: "TV Shows",
    path: "/browse/genre/shows",
  },

  {
    title: "My List",
    subItems: true,
    path: "/mylist",
    subData: [
      {
        title: "Watchlist",
        url: "/mylist/watchlist",
      },
      {
        title: "Purchases & Rentals",
        url: "/mylist/purchases&rentals",
      },
    ],
  },
];


