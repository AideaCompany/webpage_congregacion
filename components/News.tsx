import React from 'react'

export const News = () => {
  return (
    <div className="news__target">
      <div className="header__news">
        <h1 className="title__news title">ULTIMAS NOTICIAS</h1>
      </div>
      <div className="body__news">
        <div className="summary__news">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga officia nemo omnis sint doloribus. Non suscipit, ipsam nihil facilis quae
            sit velit quia, quisquam repellendus distinctio nesciunt repellat fugiat repudiandae?
          </p>
        </div>
        <div className="img__news">
          <img src="/images/index/papa-francisco.png" alt={'Congregación de Franciscanas de María Inmaculada'} />
        </div>
      </div>
    </div>
  )
}
