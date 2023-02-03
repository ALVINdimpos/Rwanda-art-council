import React, { useEffect } from "react";
import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { USER, userData } from "../utils/config";
import { useSelector } from "react-redux";

const logo = require("../assets/images/logos/Logo.png").default;
const navigation = [
  {
    title: "Artists",
    href: "/dashboard/artists",
    icon: "bi bi-hdd-stack",
  },
  // {
  //   title: "Events",
  //   href: "/dashboard/events",
  //   icon: "bi bi-bell",
  // },
  // {
  //   title: "Testimonials",
  //   href: "/dashboard/testimonials",
  //   icon: "bi bi-card-text",
  // },
  // {
  //   title: "Forms",
  //   href: "/forms",
  //   icon: "bi bi-textarea-resize",
  // },
  // {
  //   title: "Breadcrumbs",
  //   href: "/breadcrumbs",
  //   icon: "bi bi-link",
  // },
  // {
  //   title: "About",
  //   href: "/about",
  //   icon: "bi bi-people",
  // },
];
const adminNavigation = [
  {
    title: "Federations",
    href: "/dashboard/federations",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Events",
    href: "/dashboard/events",
    icon: "bi bi-bell",
  },
  // {
  //   title: "Testimonials",
  //   href: "/dashboard/testimonials",
  //   icon: "bi bi-card-text",
  // },
  {
    title: "Gallery",
    href: "/dashboard/gallery",
    icon: "bi bi-columns",
  },
  // {
  //   title: "Team members",
  //   href: "/dashboard/teamMembers",
  //   icon: "bi bi-layout-split",
  // },
];
const fedNavigation = [
  {
    title: "Unions",
    href: "/dashboard/union",
    icon: "bi bi-patch-check",
  },
  {
    title: "Events",
    href: "/dashboard/events",
    icon: "bi bi-bell",
  },
  // {
  //   title: "Testimonials",
  //   href: "/dashboard/testimonials",
  //   icon: "bi bi-card-text",
  // },
  // {
  //   title: "Gallery",
  //   href: "/dashboard/gallery",
  //   icon: "bi bi-columns",
  // },
];

const Sidebar = () => {
  const [userRole, setUserRole] = React.useState(userData);
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();
  const state = useSelector((state) => state);
  const {
    login: { success, user },
  } = state;
  useEffect(() => {
    if (user !== {}) {
      setUserRole(user.role);
    }
  }, [user]);
  useEffect(() => {
    if (userData) {
      setUserRole(userData.role);
    }
  }, []);

  console.log(userRole);
  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <img
          width={100}
          height={100}
          src={
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhcSEhUXEhcSGBcbFxsXGhsYFBQaGBgYGxoXGBgbHzolGx4pHhobJTYlKy4wMzMzGiJGPjkyPSwyMzABCwsLEA4QHhISHjIqIikyNDg0OD0wNDU0PD0yMDIyMzAyMjg4MD0yNTQwMjQ+MjIyMjIyMjIyMjIwMjI0MjAyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUDAgj/xABCEAACAgEDAgUBBgQDBQYHAAABAgADEQQSIQUxBhMiQVFhBxQyQnGBI1KRoRVicjOisbLBFnSCktHwJDRDU2Nkc//EABkBAQADAQEAAAAAAAAAAAAAAAACAwQFAf/EACsRAQACAgAFAgUEAwAAAAAAAAABAgMRBBIhMUETcRQiUWGhBZHB0TKBsf/aAAwDAQACEQMRAD8AuaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIGDKe03jjrDJq9Si6a2nQW7bEKsljLuI3KQccAc/8AAy4p+b669adJ1JqGH3cakfekUfxnXc3KsQcKOM/+mRAvzw91ZNbpatVWCFuXdg91OcMp+cMCM/SdPMrDxAV/wLT6vpT2VJpBXYiq7AsittsW3afVhslvqrTR1Hj9n6rRfWzfcUWuq5gf4S2alS+5j2ypAGfbY3zyFu5iVv4GOq19eu1p1FlS6qx00xJJWitCfWiMdoPIGflDIz17U0aK7S29N1WrvcXql1ju9umtz3VrCNjv9FzwT8CBd2YzK28dPa3VunaZL7qEvFgfynK7gD8ds4yM44zxPjw/U2j6/boqrLWofTCzZY7WBXynILEnPf8Ar+kCzMyHfZl4hv6hojqNRt3i10GwbV2qqEcZ+pkZ8N6R+s6rW6m/UX1pp7TVplpsNYrxu9eB3bG089yTnPGPv7JtO1vRbUS06dmusHmLjdWNtW5hngHGefbMC1MzMpLquop0eq0dnTdVq792oSu6x7Hs01+SoZfMI2WNgnO3IGfYgS7BAzERAREQEREBERAREQEREBERAREQEREDBkH8G+Dn0leur1LV2LrbGOELHCMHBDZA5w3tJzECE+CPCl2j0V2h1b13V2M+3bn8Fi7XUhhx7n3/ABGc/QfZ4K+j39PYo1tzWOGydvmKf4POMgbUTPH5m7+9jRAir+F8dIPTa28smjZv9i55YnHcM2c/QyH63wT1e7R6bTu+iUaF1KInmAWBBjfZYRw30C87mJPtLannZYqgliAB3JOAP1MCH9V8N6rUa/Qa1mqH3RW85VLepmHPl5HbPyRPdPDdo603UdyeW2n8rbk793p5xjGOPmSTTayuzPl2I+3vtYNj9cdpswK90vhnqWh1Wofp9mmNGtcOwvDl6HJO4oqcN3PcjOAOMZPx0XwLqKujX9Ne1Fe93ZXTcVAPl4U5AODsIP0MsWIFTazwZ1e7TaOt30a/4c9flou8K4QD12OQfV6QCoUA5Y59paWm37F8zbv2jfszs3Y9W3POM5xmepYDvxMBwfcQPuIiAiIgIiICImIGYmJmAiIgIiYgZieF2pRPxuiZ/mYL/wAZ9o4YZBBB7Ecg/vA9ImIgZiIgYnlbaqKWYhVUZJJwAB3JJ7Ces4niLqConkjy2suVgq2nFW3GC1nyvIGPcn2GSPYjfZG1orG5amr8U1lWXSjzLMenf/Drz8kuQSP07/I7yNairUOd+s1gQ9wtfqdf9Krwh9s5/UmaraZqlUXUWKAAPMrYWK3+Y+3+8P0njph5hxTW1nGQXZa0I/m78j/xCX8uDvMz7acXLxOW861/38pV4N0umVrLa3LO/p2uwNoVWPqcD3Y8/GNv1kvEq6zSjGLtQij+TTrubg//AHTj49yfaSbwn1Le70brGVEVkNreZYeSGy2O3Kcc9zK7YpiJtETEfdt4XiYnWPWpS2V39oHjt9HYNLp1Bs2hrHbsgb8KKPdiOc+wI9zxYkpf7QtVcnVXr0tf8axKsOqF72G0jFWc7BwcsoDcHnAlNp6OjWNy4etfqWqHmah106P+e51pGPgGw+Y6/QbhNGjpnT0OX1y7v/16LH5/1vsBk50niHpGhrrW2htVqtifeHKLbatu0eYHttb1ENkYUkCTzp+m6frqUvSmm2twSpapcjBIIIIyCCCCPkSPLvylza8Ki0vXdLTgLrescfytUK/2rew/3kn6b9pNK4V79QwHvfp6yx/8VDj/AJZLb/AvTHbeNMiN/kGF/es+g/us4nVvs7QjOmXTN/kuqKZ+nm0MpX/yme6mHm6z3b2i+0Xp7nDWBM++HwP13KDn9AZLNNqUtQWVstiMMqykMrD6ET8+dV0FNFho1emt0Vi+9T+dUwJOHCWHcy/pZ88Z4m/4Z6hqem2JdRYNTpLLEW3y87PUcfxK2G6mznIyBu4GWE8i0+SaR4W74l60dIi7VD2WEhQx9KhRlmbHJA44Hckdu84HRus6rUahUe0hGDZFaqo4UnuQW/vOz4g6LbqnBV1UKFC7gSV5YvgDvu9HOeNn6zx6X4T8lxZ94fcucbFRQMjByHDZ/tN2OcMYp3/k5eanE2zRyTqsa249euverVFrrCaimwh9pXLlTymM8fM5+g195srU22MGsQENY5yCwB7t8Sa1+GtMocEWN5py+bHAbknlVIXuSe0rzQWBXrfOUWxWB75QPlTnufTj6yzgKxalqzG5Yf1D1cU1tNum9T1+7otrH82wnU31lXIRFssYN6mG3aWAAHH9Z7jXauvJt1Nte7nZ6Xtb9mBFY/p+hm/4b1GmfUNStKkOrMjOqGzIPqVmC5IIORkk8HJ5GJG/h7RtyaKxnvtG3/lxMNcPp31k37NtKWyV5sd/6Z8P6prtNXY5yWHJ45wSOccZ45wBzPfqXUqNNX5l9i1L8ucZPwB3J+gnL1nUFoxpdMqqUA3H8tQbkAD8znk49sgnuA3JsZA4sZQ9mcB2HmWkn8qFs7c/yoAPpKb8RStteXXx8Pe1d/l66nxdfaCOn6O20e1tw8mnHyu8gt+h2/8ASc+zV9XAJurXVKe40t3lPVjHYL6m/T1Toa3QapgpfcA2chdzsgAzhinO4+wXgY5LZwfvRdGuHFahFJyXs4JJ/MK1wf2OyRm9/olFKeZcPT9a0asQ+7R2e4vrNZ/excj92xJb4XpKpYeyPZmvH4SNiBmX6Fs8+/J95t0dJQbTcW1DIcqbOQh+VTsCPY8t9Z08SVcUVnm8o2yzaNSYiZmZcqIiYzA8rLAoLMcBQST7AAZJMrTXapr7HvsqsYP+B6mWzZWM7FZMeng5IyOWaSbxtr9tRoQpucA2BnVCK88jnuXI249xu+JCdJd5li11K3mucIucjPflxyBjJJxwAe8txTWOs21Phy+PyzNoxV8u34c0R1Fn8N3NK/7XhkDccVkdiTnkAnC5zjcMznWaGu2s1OoKkYx2247EEfhI9iO0x0vRiipa9xcqPUx7sxJLMf1Ykzckb3m07lswYYx05f3VlqtI1FtlS1ecamA821tlRDKrLkDGWAYA4bkg8DOJ1PCr2Nq/U9eEqchKk2qCzIDztBbt8n2mp4o8pdVa7l1H8MEIhbc3lg53khV9JUYz+XtzMeEtQlmsTy69gVbCWZ9zuMAbdoAAGWU9j+HvLLXi1fmtMz9PDnUiKcTqOkbWNKm+1zqNtF9a1ME8+nFjAAWbEdvQH7qpL5IHfaPbINsgysvGlK2db0NbgMqVNYQfzGvzbAMfVkH95mt2duvdW76VNLtWxBdqGC4qORXVuxtW0AgvYQR6AQFz6s/hn6B8PdOGl0tdPpyi+raAql2JZyFHAG5jxKC8KWC3qNFl+W32+a+BlncbrOB8lwP6mWPT9p6ajUV0aekoljYNlrAEcE+mpe+cYGWHJ7GRrMQleJlZOZFeuePdBpSUNgusGRsqIbBHs7/hT9zn6StDqut9Xyo8002dwqiujb9WwN4+mTmSbpP2WI1Va6ttjoXLGlubAxG1CWXChcdwCTu7jE93M9nnLEd0R6r4pXWahvv2mVq7Nqp5ZI1FA/IarCcPnJJBGG47YEkHg7wFql1HnPa1dAP8pSzVJ3CvWwyinjIYZ4OPZpYfRvDOk0YHkUqGUEB2y1gBOSA7ZIBJJwMDmdoRFfMk38QyBGJmJNBx/Eup8rSXMCVOwqpHcM/pX/eYSu9B06y301r6VHLHhFA+WPbiTrxfqEWmtXRrVtuVSqnBbar2AZHtlBI9rXOANUworGNtFWN2Pbd7L+p/oJq4fiLY4mtI3MuR+oYq5LV5p6R/LpeEum1rdZYlnm+WoQsOE3OQ7qvzhRXzn8xkrvcqjMoyVBIHyQMgTk+F6FTTq6rs8/8AibR+UMAEH1IQKCfcgnjOJ2sTPe9rzzW7ujgx1x0itY6K20HXqXRfuun1OudgCzkeXUzNyzM+OMnPeb/TtfqVvS7Vpp6KVDDbWS9lbPgCyxwSuFAKk8YFhJ4BnQ6h016BlW3UL7Hg0L/wNY+eCoA7jJHAfxJo8lams1jDjbpa2dc47GxsIP6mYrTaLdKx7uhWtbV62n2WSsziQHoXXNXW206U1aUA4VrlfUJ8FEC7Qv8AkLcex42maaTVpagettynj6gjuCDyCPcHmaK3rbtKi9LV7w24iJNAiIgfJkV1vi1FZ1rXfsZl3HIBZTgkD3XORnIzjgY5kpMrbU9JuqcoW0y4G5mZmYDcTj0MuMnDHbhsD9ibMXLv5omfZl4u+Sld0a9hF1j2CrzLHOWZtz/AACD0qAAAAQcD3mzpdVZpnLmymklduGAdkGcnZXX+Ek4zkDO1fifei6V96sFP3m2wD1WeWvl1IvOBg92Y8D09gx9pI9L4M0VfJrNh/wDyMWH6bRhf7SeTLEfLWkR792DDw+a8+pvrLgf9rHJ2q9t5PGFWumsn4Bwz/wBwZ7V9Qu1HpKa7Tk+6qzVj9yquP2Mmmn0ldYxWiIPhVCj+gE2CJREzE7dCuG/m0q7/AMO1CWOiWHeQrFXfFtgIIDYZjuHpI5Pt2nzo+im7ULVqK/KwC4ZV2sxrZOAy+n83fBPxjvPvxdVv1bmxCyole1uRtB3Hgjjlt3cE8Te8EITbY2+x1rrRVFjbghdmLhf12J7Cab2tbHuYjX18sNKU+J5evT7uj411+r0+nWzSVNaRYvm7BusWoZLlF92OMe+M5xKW1ev1Gm6guoextS9bLZW7knzqmyUIJ7KyEjA4GSPafo2UD4s6lVbrdRVap8tbW8p0H8Sk8byqnG9HcFip9zlSCTnHbs7dJc3V6d9HdXq9N6qWsD6ezHpwrZFVg/LYv4WU98HHEn32f9W6RZtV9PTp9USfU6qwtYknNdjfhJz+DjHYZAnI6B4X6jXpBqdK9Woq1GS+nsBNd6AkK2ywAZYAEfgYccntOHrhoN5r1Ol1PT7QfUtZFqc+/l3YYL8bWI+OJ5G4ezqej9DCJS3QfFY0RCp1E6iof/Tv01xIHwliklf05A+JPug+O9Dq28pbAlnsHBVX/wD5swG79DhvpJRaJQmswlkTGZmSRJiZiBDfG/UHrahEYoT5r7hjICqqY+h/iHn6GRenRO7oHx/EsrGHJ3WBnUNgdyME5JwMZ5nf8YBzqk2pvK1d9u7ZusPIHbJ29z8cYmeg6ettTXhLfMr32M9uPWAhTaoz/NYpz/l7zRTi5x05K16z3n+nHzYfV4qOaeka1CcAYHE+pgTMzuwxIp1nwdXZmzSu2iuJJ3Vf7J2Pfzafwtk9zwfrJXMZnkxE93sTMdYVgB1WhtltNWqI9q38u5gO7Ij+mwZ/lIOMZVTxPTTdS1zNv0mh1CP2ZtRsoqOP5wzEuBzyBn4MnfVqKWqbzyFRfVuJ2msj84Y/hI+frjkHEjPmOKw9zitQWw1p8sMoYhXCucjcMNt7jMy5KRSYtWv7NWO83ia2np90k6V1HzVKsoSysLvRW3qNw4KvgblJDAHA/CeOJ05X3S/EWlGrGx7L/wCHYreTTbZ6i1ZQelMn8L842j55k8096uiupyrAEH5B7TRSZmsTaNSzXiItqs7h6xEzJotfUXLWjOxwqAsT8ADJlU333ah3vWqyzeSzHacL8V57HaMJ9dv1lheJ6Ht05RM+pl3YBJ2g5PCjJGQAcA8EyP8ASukam25PPLiqlg/rLAOyncqqrYON2CSR2GPfi7HusTaJ1P5YOLpbJatNTrykHhnpR0+nCuB5jktZjtuPZfqFXC/XGfedqBMyqZmZ3LbWsViKx2ggzMwZ4krrxJZ/8dYQ9tTItahkPpK7Q3KcZ5c+/t2ki8GVn7ubGwzWWOS4XaHCnap24G3AXHbkgn82Z8a/w89t72eanl3bSyNVusQhFTNdgcbeFB5BGc8HM72k0y1VrWgwtahVHwAMCTtNeWNb35ZMeGa5bXntPZjX3Guqywd0R2Hx6VJ/6T8+r96V69FrqDazba6vM3JchYhQarl/GmSDg71+MT9EOgIweQeCDyCD3BnC0PhPTUMpqNq1owZai5elGBypRXyUx8KQJVMbba206+g0i01V0oMLUiIo+FRQo/sJr9W6NptWmzUVJaPbcPUv1Vhyp/QzpRJIq36r9mNIXOkWskflva4g/QOlgI/dTK/6h03U6ezyn6Ygc9sLqbVf6qRaVb/3nE/Q88r6EdSrqHVu4YAqf1B7yE1hOLzCl+l+J+raVh5hpWs4xXqLK6lUDjFYL7149ue3aTzpX2h6C1hXZalNnGSS3kk/C3Oqg/uBn2zHU/s46ZdkrUdOx/NSdn+4QU/tI/r/ALOXorH3OvT6lx+I6neXI/yJu8vP6jEdYN1lZ6sCMg5B7Yn3I54H02pq0SV6sAWqz8DbhVLsVX0ekAA8AdhiSOTQQLx7T/HofsHSxGYg7QVZGUce+C5/RTNjwfofLuZtyPvqBVkOeNw3Dt3/AA5H6Tt9f6KurVAXNZrYsCACDlSpyP0PzHRug06XLJud2GGdzliM5wAOFGcdh7D4mn1o9Hk87YPhp+JnLqNa/wBuyJqa3WpSu6xtoJwOCSx5OFA5Y4BOB8Gbc53VOmLftO4o6btrDkYbG4Mp7g4HweOCJltvXR0K631cDrHi+yhsfdLVr97iBZWOO+K2P9CymaadbOrU+VqlsYg4rrbyST/p/wBpj9zOwvR9Sp9L1/6gXX/cwf8AmnhqfBmnvIbU7XYHOa0FRbvw7Alm/qJTq141O49pXbrSd1mJ94cJ9FuDJqyHWzaDTWrLvKMHU+n+JY4YBu/t7ibnTvA9DEO9TgD8PnP5jgeyqn4FX/VuODyAZMNHoKqVC1oFwAM8liB2BY8nH1M3JKlJr3naF7xbtGnJp6KFXYttiL/KgqrUf+SsTa0OiroTZXnGWblixJY5Y5J9zz8TciWahDZEzE9eMTMRAREQEREDEzEQEREBERAREQEREBERAh/i3xc2lup0elp+9avUZKV7gqooz63P7Hj4VjkY56Hh7WdQdnTXaaunaFKNXZvV8kgqQRkEYBz75kM0hLeLbd/5NP6M+w8uvt/VpYfWteul01upIyKK3fHztUnH7wOhEpsdQ6r/AIV/jg1rl9+7yNi/d/LF3l7dvf65znHvnmdvxd4o1Ar6VfpnalddbVvUYO5XFZ2nI/zHtAsmJBev9Y1FfXNDpUsK0312GxMDDFVsIJOMjsOx9pzrtbrdR13UdPTV2aelKFfCLWXHFOdjMp2klu5zxn5yAsuYleeBOvXgdSq1Vrahem2uq2MB5jJX5gO4jufRnn5M1fCqdS6tUeoPrrNIju4oqpVCiqp2+vcPXyCOfjOecAJul2s+9lDVWNLsytgc+aX44KYwB3/tz7TleDfFD6+3WVPWqDR3eWpUklxusGTnt+Af1mjV1fUf9oX0ZsPkDShwmBjd6fVnGfc+8532Tf8AzXVv+9n/AJ7oFlxEQEREBERAREQEREBERAREQEREBERAREQIB4v8Nav77T1XpwR76V2WVu21bkwRwxOM4Yjkj2PtN/SL1LX1X06/TV6Oq2lkVVsFthZ+NxKHAUD27yYRAqBeh9XHTv8ABPuyhPM2/efNXy/KNvmE7M7s54xjt7Tt+NfCl50uhXRJ57dNes+WWCNYqBRwzcZ9I/qe/aWJECtm6Z1HVdX0evt0g01NCupBtR7Eytgy4B9ywwFzgd/gdHQdC1Kdf1GuavFFunCI+5OWHk8bc7h+Buce0nEQIF4T8M31X9V+817atfdYayGUl0drecKcrw4747zn+G9N1fpKvoU0g11Ku7UWLaleAxztcNyBnJPHucZ4lmxAhNXQ9SOvtrig8htKE37l/H6eNud3secYnx9n/QdTpL+oPqECLqdQXqIZW3LutOcKePxDg47ycxAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/2Q=="
          }
          alt="Logo"
        />
      </div>
      <Button
        close
        size="sm"
        className=".d-none .d-sm-block .d-md-none"
        onClick={() => showMobilemenu()}
      />
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {userRole === "admin"
            ? adminNavigation.map((navi, index) => (
                <NavItem key={index} className="sidenav-bg">
                  <Link
                    to={navi.href}
                    style={{
                      color:
                        location.pathname === navi.href ? "#C5801A" : "#000",
                    }}
                    className={
                      location.pathname === navi.href
                        ? " nav-link py-3"
                        : "nav-link  py-3"
                    }
                  >
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </Link>
                </NavItem>
              ))
            : userRole === "federation"
            ? fedNavigation.map((navi, index) => (
                <NavItem key={index} className="sidenav-bg">
                  <Link
                    to={navi.href}
                    style={{
                      color:
                        location.pathname === navi.href ? "#C5801A" : "#000",
                    }}
                    className={
                      location.pathname === navi.href
                        ? " nav-link py-3"
                        : "nav-link  py-3"
                    }
                  >
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </Link>
                </NavItem>
              ))
            : navigation.map((navi, index) => (
                <NavItem key={index} className="sidenav-bg">
                  <Link
                    to={navi.href}
                    style={{
                      color:
                        location.pathname === navi.href ? "#C5801A" : "#000",
                    }}
                    className={
                      location.pathname === navi.href
                        ? " nav-link py-3"
                        : "nav-link  py-3"
                    }
                  >
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </Link>
                </NavItem>
              ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
