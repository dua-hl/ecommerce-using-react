import React from 'react'
import style from './ShoppingNav.module.css'
import { Link } from 'react-router-dom'

export default function ShoppingNav({allCategories}) {



  return (
    <div>

<div className={`${style.shoppingNav}`}>

<nav>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <ul className={`d-flex gap-4 justify-content-center align-items-center w-100 ${style.catList}`}>

      {allCategories.map((category) => (
        <li className={`${style.catItem}`}>
          <Link className="nav-link" aria-current="page" to={`/products/shopping/${category.CatName} `}>
            {category.CatName}
          </Link>
        </li>
      ))}

</ul>
</nav>


</div>

    </div>
  )
}
