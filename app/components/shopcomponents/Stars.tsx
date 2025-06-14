import React from "react";
const FullStar = ({forProduct}:{forProduct?:boolean}) => {
  return <svg className="inline-block" stroke="gold" fill="gold" strokeWidth="0" viewBox="0 0 24 24"
  width={forProduct? "25" :"19"} height={forProduct? "25" :"19"} xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
};

const HalfStar = ({forProduct}:{forProduct?:boolean}) => {
  return (<svg
    className="inline-block"
    stroke="#FFD700"
    strokeWidth="0"
    viewBox="0 0 24 24"
    width={forProduct? "25" :"19"}
    height={forProduct? "25" :"19"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="halfGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#F3F4F6" />
      </linearGradient>
    </defs>
    <path
      fill="url(#halfGrad)"
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>)
}
const EmptyStar = ({forProduct}:{forProduct?:boolean}) => {
  return <svg className="inline-block brome" stroke="#F3F4F6" strokeWidth="0" viewBox="0 0 24 24" width={forProduct? "25" :"19"} height={forProduct? "25" :"19"} xmlns="http://www.w3.org/2000/svg" fill="#a3a4a7"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
}
const StarRating = ({ rating, maxStars = 5,ForProduct }: {ForProduct?:boolean, rating: number, maxStars?: number }) => {

  const getStars = (rating: number, maxStars: number) => {
    const stars = [];
    const roundedRating = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FullStar forProduct={ForProduct} key={`full-${i}`} />)
    };
    if (hasHalfStar) {
      stars.push(<HalfStar forProduct={ForProduct} key={`${crypto.randomUUID}`} />)
    };
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<EmptyStar forProduct={ForProduct} key={i} />)
    }
    return stars;
  }

  return <div>{getStars(rating, maxStars)}</div>

}
export default StarRating
