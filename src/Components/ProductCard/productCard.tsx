import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./slide.module.css";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useTranslation } from "react-i18next";
import { Rating } from '@mui/material'

interface Product {
  Memory:[string];
  name: string;
  characterisctics:[];
  cost:[];
  img: [];
  id:number;
  color:[];
  rating:number;
}
interface ProductCardProps {
  data: Product; 
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { t } = useTranslation();
  const { type } = useContext(ThemeContext);
  const { data } = props;
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);
  const [activeCost, setActiveCost] = useState(0);
  const handleNavigate = () => {
    navigate(`/product/${data.id}`);
    window.scrollTo({ top: 0 });
  };
  const handdleClickImg = (index: number) => {
    setActiveImg(index);
  };
  const handdleClickCost = (index: number) => {
    setActiveCost(index);
  };
  return (
    <div className={`${style.container} ${style[type]}`}>
      <div className={style.imgWrap}>
        <img className={style.img} src={data.img[activeImg]} alt="g" />
      </div>
      <Rating name="read-only" value={data.rating} readOnly  precision={0.5} />
      <p className={style.name}>{data.name}</p>
      <p className={style.cost}>$ {data.cost[activeCost]}.00</p>
      <div className={style.wrapper}>
        <div className={style.iconWrap}>
          {data.img.map((val: string, index:number) => (
            <div
              key={index}
              onClick={() => handdleClickImg(index)}
              className={`${style.borderIcon} ${index === activeImg ? style.active : ""}`}
            >
              <img className={style.icon} src={val} alt="g" />
            </div>
          ))}
        </div>
        <div className={style.iconWrap}>
          {data.Memory.map((val: string, index:number) => (
            <div
              key={index}
              onClick={() => handdleClickCost(index)}
              className={`${style.borderMemory} ${index === activeCost ? style.active : ""}`}
            >
              <p className={style.memory}>{val}</p>
            </div>
          ))}
        </div>
        <button onClick={() => handleNavigate()} className={style.btn}>
          {t("product.btn")}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
