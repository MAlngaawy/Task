import Image from 'next/image';
import style from '../styles/Images.module.css';

const imagesLinks = [
  'https://images.unsplash.com/photo-1606774714485-cc178f8e6dec?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8eEh4WVRNSExnT2N8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1606735517056-c40996edc1ad?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHhIeFlUTUhMZ09jfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1606489129171-2b48741ddead?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHhIeFlUTUhMZ09jfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1577394244873-aa59f7399206?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHhIeFlUTUhMZ09jfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1606464422927-5acde3e240b2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHhIeFlUTUhMZ09jfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
];

function Images() {
  return (
    <>
      <div className={style.img_page}>
        <h1>My Imagespage</h1>
        <div>
          {imagesLinks.map((img, index) => {
            return (
              <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Image
                  key={index}
                  src={img}
                  alt="Picture of the author"
                  width="400"
                  height="400"
                  layout="intrinsic"
                />
              </>
            );
          })}
        </div>
        <p>Welcome to my Imagespage!</p>
      </div>
    </>
  );
}

export default Images;
